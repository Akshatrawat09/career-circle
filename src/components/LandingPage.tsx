
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, User, ArrowRight, CheckCircle, Zap, Shield, Globe } from 'lucide-react';
import { useState } from 'react';
import AuthForm from './AuthForm';

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Career Circle
              </h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={() => setShowAuth(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm text-blue-800 mb-6 border border-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            The Future of Professional Networking
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              Career Circle
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Connect with industry leaders, share breakthrough insights, and accelerate your professional journey in our exclusive community of forward-thinking professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => setShowAuth(true)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Join Now - It's Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowAuth(true)}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-500 mr-2" />
              100% secure & private
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 text-green-500 mr-2" />
              Join 10,000+ professionals
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Elite Network</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                Connect with C-suite executives, industry pioneers, and rising stars who are shaping the future of business.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Smart Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                Share game-changing strategies, get expert feedback, and discover cutting-edge trends before they go mainstream.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm hover:-translate-y-2">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Personal Brand</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                Build your thought leadership with a premium profile that showcases your expertise and achievements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white mb-20 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-blue-100 text-lg">Active Professionals</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-lg">Meaningful Connections</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100 text-lg">Career Growth Rate</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-12 md:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Top Performers Choose
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Career Circle</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Join an exclusive community where ambition meets opportunity and connections drive success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Curated Community",
                  description: "Every member is verified and vetted to ensure high-quality networking opportunities."
                },
                {
                  title: "Accelerated Growth",
                  description: "Access exclusive mentorship programs and career advancement opportunities."
                },
                {
                  title: "Industry Intelligence",
                  description: "Stay ahead with insider insights and market intelligence from industry leaders."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Premium Experience",
                  description: "Ad-free, distraction-free environment designed for serious professionals."
                },
                {
                  title: "Global Reach",
                  description: "Connect with decision-makers and influencers from Fortune 500 companies worldwide."
                },
                {
                  title: "Future-Ready",
                  description: "Built with cutting-edge technology and continuously evolving features."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the most exclusive professional network and unlock opportunities you never knew existed.
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowAuth(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-16 py-6 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 rounded-xl"
          >
            Start Your Journey Today
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">Join in 30 seconds • No spam, ever • Cancel anytime</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Career Circle</h1>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering professionals to build meaningful connections and accelerate their careers.
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Career Circle. Built with passion for professional growth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
