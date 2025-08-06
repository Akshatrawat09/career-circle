
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const getInitials = (name: string | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 
            className="text-xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Career Circle
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(`/profile/${user.id}`)}
                className="flex items-center space-x-2"
              >
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="text-xs">
                    {getInitials(user.user_metadata?.name)}
                  </AvatarFallback>
                </Avatar>
                <span>Profile</span>
              </Button>
              <Button variant="ghost" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
