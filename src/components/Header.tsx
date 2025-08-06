
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, LogOut, Users, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
  };

  const getInitials = (name: string | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-4 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Career Circle
            </h1>
          </div>
          
          {user && (
            <nav className="hidden md:flex items-center space-x-1">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                size="sm"
                onClick={() => navigate('/')}
                className={isActive('/') ? 
                  'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 
                  'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }
              >
                <Home className="w-4 h-4 mr-2" />
                Feed
              </Button>
            </nav>
          )}
        </div>
        
        <div className="flex items-center space-x-3">
          {user && (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(`/profile/${user.id}`)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-lg"
              >
                <Avatar className="w-7 h-7 border-2 border-gray-200">
                  <AvatarFallback className="text-xs bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                    {getInitials(user.user_metadata?.name)}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:block font-medium">
                  {user.user_metadata?.name?.split(' ')[0] || 'Profile'}
                </span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleSignOut}
                className="text-gray-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="hidden sm:block">Sign Out</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
