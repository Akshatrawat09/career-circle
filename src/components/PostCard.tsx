
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Heart, Share, Clock } from 'lucide-react';

interface Post {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    id: string;
    name: string;
  };
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${post.profiles.id}`);
  };

  return (
    <Card className="mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-4">
          <Avatar 
            className="w-12 h-12 cursor-pointer border-2 border-gray-200 group-hover:scale-105 transition-transform duration-200"
            onClick={handleProfileClick}
          >
            <AvatarFallback className="text-sm bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
              {getInitials(post.profiles.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 
              className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors duration-200 text-lg"
              onClick={handleProfileClick}
            >
              {post.profiles.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Clock className="w-3 h-3 mr-1" />
              {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-6">
          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-base">
            {post.content}
          </p>
        </div>
        
        {/* Engagement buttons */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">Like</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-500 hover:text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">Comment</span>
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-500 hover:text-green-500 hover:bg-green-50 px-3 py-2 rounded-lg transition-all duration-200"
          >
            <Share className="w-4 h-4 mr-1" />
            <span className="text-sm">Share</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
