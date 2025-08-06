
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import PostFeed from '@/components/PostFeed';
import AuthForm from '@/components/AuthForm';

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <PostFeed />
      </main>
    </div>
  );
};

export default Home;
