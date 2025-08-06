
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import ProfilePage from '@/components/ProfilePage';
import AuthForm from '@/components/AuthForm';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ProfilePage />
      </main>
    </div>
  );
};

export default Profile;
