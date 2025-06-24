
import { ArrowRight, CheckCircle, Users, Target, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              List Your Offers Inside <span className="text-yellow-300">UPI Apps</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Reach customers right at the point of payment with geo- and behavior-targeted offers that drive instant action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Launch a Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Advayu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">What is Advayu?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Advayu is an intelligent offer discovery layer that integrates seamlessly into UPI apps. 
              We deliver geo-targeted and behavior-based offers to customers exactly when they're ready to pay, 
              creating the perfect moment for conversion. No app downloads, no friction – just instant value 
              for both brands and customers.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Offline Stores</CardTitle>
                <CardDescription className="text-gray-600">Geo-Targeted Reach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Customer opens UPI app near your store</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Advayu shows your targeted offer</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">1-tap redemption drives immediate footfall</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Pay only for successful conversions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">D2C/Online Brands</CardTitle>
                <CardDescription className="text-gray-600">Behavior-Based Targeting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">AI analyzes spend patterns & demographics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Show offers to your ideal customers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Seamless checkout integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Track ROI with detailed analytics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Advayu */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">Why Brands Choose Advayu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Zap className="h-8 w-8" />}
              title="No App Install Required"
              description="Reach customers directly within their existing UPI apps"
            />
            <FeatureCard 
              icon={<Target className="h-8 w-8" />}
              title="1-Tap Redemption"
              description="Frictionless experience drives higher conversion rates"
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8" />}
              title="Pay-Per-Action Pricing"
              description="Only pay when customers actually engage with your offers"
            />
            <FeatureCard 
              icon={<Users className="h-8 w-8" />}
              title="Precise Targeting"
              description="Geo and behavior-based targeting ensures relevance"
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8" />}
              title="Brand Safe Environment"
              description="Your offers appear in trusted financial apps"
            />
            <FeatureCard 
              icon={<Globe className="h-8 w-8" />}
              title="Massive Reach"
              description="Access millions of active UPI users across India"
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">Who It's For</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Offline Brands</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center mb-6">Perfect for businesses with physical locations</p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Restaurants & Cafes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Retail Stores</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Service Businesses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Entertainment Venues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">D2C Brands</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center mb-6">Ideal for online businesses and e-commerce</p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">E-commerce Platforms</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">SaaS Companies</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Digital Services</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Subscription Businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">Distribution Partners</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Fintech and UPI app providers can seamlessly integrate Advayu's offer platform to create 
              new revenue streams without disrupting user experience. Our white-label solution enables 
              you to monetize your user base through relevant, contextual offers while maintaining 
              your brand identity.
            </p>
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">Easy Integration</h4>
                  <p className="text-gray-600">Simple API integration with comprehensive documentation and support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">Revenue Sharing</h4>
                  <p className="text-gray-600">Competitive revenue splits with transparent reporting and analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">User Experience</h4>
                  <p className="text-gray-600">Native feel that enhances rather than disrupts your app experience</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-gray-900">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              quote="Advayu helped us achieve 3x higher foot traffic compared to traditional digital ads. The geo-targeting is incredibly precise."
              author="Priya Sharma"
              role="CMO, Mumbai Eats"
            />
            <TestimonialCard 
              quote="The pay-per-action model completely changed our marketing ROI. We only pay when customers actually engage with our offers."
              author="Rajesh Kumar"
              role="Growth Lead, TechFlow"
            />
            <TestimonialCard 
              quote="Integration was seamless and our users love the relevant offers. It's become a significant revenue stream for our fintech app."
              author="Anita Desai"
              role="Product Head, PayEasy"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">About Us</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Advayu was born from frustration with ineffective ad spend and poor targeting. Our founding team, 
              comprising former executives from leading fintech and advertising companies, recognized that the 
              point of payment represents the highest intent moment for customers. We built Advayu to bridge 
              the gap between brands seeking effective customer acquisition and financial apps looking to 
              monetize their user base responsibly.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Expert Team</h4>
                <p className="text-gray-600">15+ years combined experience in fintech and advertising</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Proven Results</h4>
                <p className="text-gray-600">300% average improvement in campaign performance</p>
              </div>
              <div>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Trusted Platform</h4>
                <p className="text-gray-600">Secure, compliant, and built for enterprise scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Customer Acquisition?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join hundreds of brands already reaching customers at the perfect moment. 
            Start your Advayu campaign today and see the difference contextual offers can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Launch a Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900">Get Started Today</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Tell us about your brand and we'll create a custom campaign strategy for you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
