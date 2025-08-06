
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { PlusCircle, Send } from 'lucide-react';

interface CreatePostProps {
  onPostCreated: () => void;
}

const CreatePost = ({ onPostCreated }: CreatePostProps) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const getInitials = (name: string | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !user) return;

    setIsLoading(true);

    const { error } = await supabase
      .from('posts')
      .insert({
        user_id: user.id,
        content: content.trim(),
      });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create post. Please try again.',
      });
    } else {
      setContent('');
      onPostCreated();
      toast({
        title: '🎉 Post shared!',
        description: 'Your insights have been shared with the community.',
      });
    }

    setIsLoading(false);
  };

  return (
    <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
          <PlusCircle className="w-5 h-5 mr-2 text-blue-600" />
          Share Your Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start space-x-3">
            <Avatar className="w-10 h-10 border-2 border-gray-200 flex-shrink-0">
              <AvatarFallback className="text-sm bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                {getInitials(user?.user_metadata?.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What professional insights would you like to share with the community?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                className="resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-500">
              {content.length > 0 && `${content.length} characters`}
            </div>
            <Button 
              type="submit" 
              disabled={!content.trim() || isLoading}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sharing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Share Post
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
