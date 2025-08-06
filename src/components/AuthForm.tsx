
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Users, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signUp, signIn } = useAuth();
  const { toast } = useToast();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(loginForm.email, loginForm.password);
    
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    } else {
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });
    }
    
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signUp(signupForm.email, signupForm.password, signupForm.name);
    
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    } else {
      toast({
        title: 'Account created!',
        description: 'Welcome to Career Circle! You can now start networking.',
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-md">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Career Circle
              </CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Join the exclusive network of ambitious professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 p-1">
                <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Sign In
                </TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Join Now
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="you@company.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In to Your Account'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-gray-700 font-medium">Full Name</Label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Jane Smith"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-700 font-medium">Email Address</Label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@company.com"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-700 font-medium">Password</Label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a secure password"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Join Career Circle'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    By joining, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthForm;
