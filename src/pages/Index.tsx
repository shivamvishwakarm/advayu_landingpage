
import { ArrowRight, CheckCircle, Users, Target, Zap, Shield, Globe, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Advayu</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <Button variant="outline" className="border-gray-200">Login</Button>
              <Button className="bg-black hover:bg-gray-800 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Now Live in 50+ UPI Apps
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
              List Your Offers Inside{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UPI Apps
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reach customers right at the point of payment with geo- and behavior-targeted offers that drive instant action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg h-14">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg h-14">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
                <div className="text-gray-600 text-sm">Monthly Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">300%</div>
                <div className="text-gray-600 text-sm">Avg ROI Boost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1-Tap</div>
                <div className="text-gray-600 text-sm">Redemption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Active Brands</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Advayu */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">What is Advayu?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Advayu is an intelligent offer discovery layer that integrates seamlessly into UPI apps. 
              We deliver geo-targeted and behavior-based offers to customers exactly when they're ready to pay, 
              creating the perfect moment for conversion.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-lg text-gray-700 italic">
                "No app downloads, no friction – just instant value for both brands and customers."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two powerful targeting methods to reach your ideal customers
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Offline Stores</CardTitle>
                <CardDescription className="text-gray-600 text-lg">Geo-Targeted Reach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Customer opens UPI app near your store</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Advayu shows your targeted offer</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">1-tap redemption drives immediate footfall</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Pay only for successful conversions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">D2C/Online Brands</CardTitle>
                <CardDescription className="text-gray-600 text-lg">Behavior-Based Targeting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">AI analyzes spend patterns & demographics</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Show offers to your ideal customers</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Seamless checkout integration</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">Track ROI with detailed analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Advayu */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Why Brands Choose Advayu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to reach customers at the perfect moment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard 
              icon={<Zap className="h-8 w-8" />}
              title="No App Install Required"
              description="Reach customers directly within their existing UPI apps without any friction"
            />
            <FeatureCard 
              icon={<Target className="h-8 w-8" />}
              title="1-Tap Redemption"
              description="Frictionless experience drives 3x higher conversion rates than traditional ads"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8" />}
              title="Pay-Per-Action Pricing"
              description="Only pay when customers actually engage with your offers - no wasted spend"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8" />}
              title="Precise Targeting"
              description="Geo and behavior-based targeting ensures maximum relevance and ROI"
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8" />}
              title="Brand Safe Environment"
              description="Your offers appear in trusted financial apps with high user intent"
            />
            <FeatureCard 
              icon={<Globe className="h-8 w-8" />}
              title="Massive Reach"
              description="Access 50M+ active UPI users across India's top payment platforms"
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Who It's For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for any business looking to improve customer acquisition
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Offline Brands</CardTitle>
                <CardDescription className="text-gray-600 text-lg">Perfect for businesses with physical locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Restaurants & Cafes</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Retail Stores</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Service Businesses</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Entertainment Venues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-10 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-12 w-12 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">D2C Brands</CardTitle>
                <CardDescription className="text-gray-600 text-lg">Ideal for online businesses and e-commerce</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">E-commerce Platforms</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">SaaS Companies</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Digital Services</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">Subscription Businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Partners */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">Distribution Partners</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Fintech and UPI app providers can seamlessly integrate Advayu's offer platform to create 
                new revenue streams without disrupting user experience.
              </p>
            </div>
            <Card className="p-12 border-0 shadow-lg bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Easy Integration</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Simple API integration with comprehensive documentation and dedicated support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900">Revenue Sharing</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Competitive revenue splits with transparent reporting and real-time analytics</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900">User Experience</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">Native feel that enhances rather than disrupts your app experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">What Our Partners Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses using Advayu
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard 
              quote="Advayu helped us achieve 3x higher foot traffic compared to traditional digital ads. The geo-targeting is incredibly precise and the ROI speaks for itself."
              author="Priya Sharma"
              role="CMO, Mumbai Eats"
            />
            <TestimonialCard 
              quote="The pay-per-action model completely changed our marketing ROI. We only pay when customers actually engage with our offers. It's a game-changer for growth teams."
              author="Rajesh Kumar"
              role="Growth Lead, TechFlow"
            />
            <TestimonialCard 
              quote="Integration was seamless and our users love the relevant offers. It's become our highest-performing revenue stream with minimal development effort."
              author="Anita Desai"
              role="Product Head, PayEasy"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">About Us</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Advayu was born from frustration with ineffective ad spend and poor targeting. Our founding team, 
                comprising former executives from leading fintech and advertising companies, recognized that the 
                point of payment represents the highest intent moment for customers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">Expert Team</h4>
                <p className="text-gray-600 text-lg">15+ years combined experience in fintech and advertising</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">Proven Results</h4>
                <p className="text-gray-600 text-lg">300% average improvement in campaign performance</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">Trusted Platform</h4>
                <p className="text-gray-600 text-lg">Secure, compliant, and built for enterprise scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Transform Your Customer Acquisition?</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join 500+ brands already reaching customers at the perfect moment. 
              Start your Advayu campaign today and see the difference contextual offers can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 text-lg h-14">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 px-8 py-4 text-lg h-14">
                Launch a Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">Get Started Today</h2>
              <p className="text-xl text-gray-600">
                Tell us about your brand and we'll create a custom campaign strategy for you.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
