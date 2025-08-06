
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PostCard from './PostCard';
import CreatePost from './CreatePost';
import { Loader2, Users } from 'lucide-react';

interface Post {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    name: string;
  };
}

const PostFeed = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts', refreshKey],
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
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Post[];
    },
  });

  const handlePostCreated = () => {
    setRefreshKey(prev => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
            <p className="text-gray-500">Loading your professional feed...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="text-red-600 font-medium mb-2">Unable to load posts</div>
          <p className="text-red-500 text-sm">Please refresh the page and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <Users className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Professional Feed</h1>
        </div>
        <CreatePost onPostCreated={handlePostCreated} />
      </div>
      
      {posts && posts.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome to Career Circle!</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Be the first to share your professional insights and start meaningful conversations in our community.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostFeed;
