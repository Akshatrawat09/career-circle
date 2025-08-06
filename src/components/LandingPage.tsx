
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, User, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AuthForm from './AuthForm';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">Career Circle</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with professionals in your industry, share insights, and grow your career network in a supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowAuth(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAuth(true)}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Professional Network</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Connect with like-minded professionals and expand your career network in a meaningful way.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Share Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Share your professional experiences, insights, and learn from others in your field.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl font-semibold">Personal Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Showcase your professional journey with a personalized profile and portfolio.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Career Circle?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a community of professionals who are committed to mutual growth and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Authentic Connections</h3>
                  <p className="text-gray-600">Build genuine professional relationships based on shared interests and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600">Access opportunities, mentorship, and insights to accelerate your professional development.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Industry Insights</h3>
                  <p className="text-gray-600">Stay updated with the latest trends and discussions in your field.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safe Environment</h3>
                  <p className="text-gray-600">Professional, respectful community with strong moderation and guidelines.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Easy to Use</h3>
                  <p className="text-gray-600">Clean, intuitive interface designed for busy professionals.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Free to Join</h3>
                  <p className="text-gray-600">Get started today with our free membership and unlock your potential.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Professional Network?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who are already growing their careers with Career Circle.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowAuth(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg"
          >
            Join Career Circle Today
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Career Circle. Built with ❤️ for professional growth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
