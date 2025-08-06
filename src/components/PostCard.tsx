
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

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
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Avatar 
            className="w-10 h-10 cursor-pointer"
            onClick={handleProfileClick}
          >
            <AvatarFallback className="text-sm">
              {getInitials(post.profiles.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 
              className="font-semibold cursor-pointer hover:text-blue-600"
              onClick={handleProfileClick}
            >
              {post.profiles.name}
            </h3>
            <p className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
