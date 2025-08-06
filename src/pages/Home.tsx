
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';
import PostFeed from '@/components/PostFeed';
import LandingPage from '@/components/LandingPage';

const Home = () => {
  const { user } = useAuth();

  if (!user) {
    return <LandingPage />;
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
