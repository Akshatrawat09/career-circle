import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import PostCard from './PostCard';
import { Edit, Save, X, User, FileText, Calendar, Loader2 } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  bio: string;
}

interface Post {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    name: string;
  };
}

const ProfilePage = () => {
  const { userId } = useParams();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', bio: '' });

  const isOwnProfile = user?.id === userId;

  const { data: profile, isLoading: profileLoading, refetch: refetchProfile } = useQuery({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data as any;
    },
    enabled: !!userId,
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['user-posts', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          id,
          content,
          created_at,
          profiles:user_id (
            id,
            name
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as any;
    },
    enabled: !!userId,
  });

  useEffect(() => {
    if (profile) {
      setEditForm({ name: profile.name, bio: profile.bio || '' });
    }
  }, [profile]);

  const handleSaveProfile = async () => {
    if (!user || !profile) return;

    const { error } = await supabase
      .from('profiles')
      .update({
        name: editForm.name,
        bio: editForm.bio,
      })
      .eq('id', user.id);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to update profile.',
      });
    } else {
      setIsEditing(false);
      refetchProfile();
      toast({
        title: '✅ Profile updated!',
        description: 'Your profile has been updated successfully.',
      });
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  if (profileLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-500">Loading profile...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="text-red-600 font-medium">Profile not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="mb-8 border-0 shadow-xl bg-white/90 backdrop-blur-md">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
          <div className="flex justify-between items-start">
            <CardTitle className="flex items-center text-xl">
              <User className="w-6 h-6 mr-2" />
              Professional Profile
            </CardTitle>
            {isOwnProfile && (
              <div className="flex space-x-2">
                {isEditing ? (
                  <>
                    <Button 
                      size="sm" 
                      onClick={handleSaveProfile}
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                      <Save className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => {
                        setIsEditing(false);
                        setEditForm({ name: profile.name, bio: profile.bio || '' });
                      }}
                      className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => setIsEditing(true)}
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Profile
                  </Button>
                )}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex items-start space-x-6 mb-8">
            <Avatar className="w-24 h-24 border-4 border-gray-200 shadow-lg">
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                {getInitials(profile.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                    <Input
                      id="name"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio" className="text-gray-700 font-medium">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      value={editForm.bio}
                      onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                      placeholder="Share your professional background, expertise, and aspirations..."
                      rows={4}
                      className="mt-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">{profile.name}</h1>
                  {profile.bio ? (
                    <p className="text-gray-600 leading-relaxed text-lg">{profile.bio}</p>
                  ) : (
                    <div className="text-gray-400 italic">
                      {isOwnProfile ? 
                        "Add a professional bio to tell others about your expertise and background" :
                        "No bio available"
                      }
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500 mt-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    Member since {new Date(profile.created_at).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-gray-900">
            <FileText className="w-5 h-5 mr-2" />
            Posts & Insights
            {posts && (
              <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {posts.length}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {postsLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Loading posts...</p>
              </div>
            </div>
          ) : posts && posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">
                {isOwnProfile ? "You haven't shared any insights yet." : "No posts shared yet."}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
