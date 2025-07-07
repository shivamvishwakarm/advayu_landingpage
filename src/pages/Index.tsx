import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Play,
  Star,
  Sparkles,
  CircuitBoard,
  Database,
  Cpu,
  Wifi,
  Cloud,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";
import DemoButton from "@/components/DemoButton";
import Advayu_logo from "@/components/Advayu_logo";
import Navbar from "@/components/Navbar";

const floatingIcons = [
  { icon: Star, delay: "0s", duration: "20s", x: "10%", y: "20%" },
  { icon: Sparkles, delay: "2s", duration: "25s", x: "80%", y: "15%" },
  { icon: CircuitBoard, delay: "4s", duration: "30s", x: "15%", y: "70%" },
  { icon: Database, delay: "6s", duration: "22s", x: "85%", y: "60%" },
  { icon: Cpu, delay: "8s", duration: "28s", x: "30%", y: "40%" },
  { icon: Wifi, delay: "1s", duration: "24s", x: "70%", y: "80%" },
  { icon: Cloud, delay: "3s", duration: "26s", x: "90%", y: "35%" },
  { icon: Smartphone, delay: "5s", duration: "23s", x: "5%", y: "50%" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden">
      {/* <div className="fixed inset-0 pointer-events-none z-0">
   
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}></div>


        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-950/10 to-purple-950/20"></div>

       
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}></div>
        </div>
      </div> */}

      {/* Animated Background Icons */}
      {/* <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        {floatingIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <IconComponent
              key={index}
              className="absolute w-8 h-8 text-blue-400 animate-pulse"
              style={{
                left: item.x,
                top: item.y,
                animationDelay: item.delay,
                animationDuration: item.duration,
                transform: `translateY(0px)`,
                animation: `pulse ${item.duration} ease-in-out infinite ${item.delay}, float ${item.duration} ease-in-out infinite ${item.delay}`,
              }}
            />
          );
        })}
      </div> */}

      {/* Navigation Bar */}
      <nav className="border-b border-gray-800/50 bg-black backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* <div className="text-2xl font-black text-white tracking-tight transform hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Advayu
            </div> */}

            <Navbar />
            {/* <Advayu_logo /> */}
            {/* <Logo /> */}
            {/* <div className="hidden md:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 transform relative group">
                How it Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#features"
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 transform relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#testimonials"
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-105 transform relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button
                variant="outline"
                className="border-gray-700/50 bg-gray-800/50 text-white transition-all duration-300 hover:scale-105 transform backdrop-blur-sm">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 transition-all duration-300 hover:scale-105 transform hover:shadow-xl relative overflow-hidden group">
                <span className="relative ">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative bg-black h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-6 w-full h-[70vh] opacity-50 z-0 border-red-400 ">
          <source src="/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10  ">
          <div className="container mx-auto px-6 ">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 border border-blue-800/30 rounded-full text-blue-300 text-sm font-medium mb-4  backdrop-blur-sm transform -translate-y-16 bg-blue-200/20">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3 animate-pulse" />
                Advayu X POP
                <img src="/image.png" alt="POP" className="w-4 h-4 mx-2" />
                is Now Live
              </div>
              {/* <h1
                    className="text-5xl lg:text-8xl font-black mb-8 leading-tight tracking-tight animate-fade-in"
                    style={{ animationDelay: "0.2s" }}>
                    List Your Offers Inside{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x relative">
                      UPI Apps
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-lg -"></div>
                    </span>
                  </h1> */}

              <h1
                className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight animate-fade-in"
                style={{ animationDelay: "0.2s" }}>
                Put your brand where India pays. <br />
                <span className="bg-blue-500 bg-clip-text text-transparent animate-gradient-x relative">
                  Inside UPI apps.
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in"
                style={{ animationDelay: "0.4s" }}>
                Reach customers right at the point of payment with geo- and
                behavior-targeted rewards that drive{" "}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text font-semibold">
                  instant action
                </span>
                .
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
                style={{ animationDelay: "0.6s" }}>
                {/* <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg h-14 border-0 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl relative overflow-hidden group">
                <span className="relative  flex items-center">
                  Book a Demo{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button> */}

                <DemoButton />
                {/* <Button
                size="lg"
                variant="outline"
                className="border-gray-600/50 bg-gray-800/50 text-white px-8 py-4 text-lg h-14 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button> */}
              </div>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in "
                style={{ animationDelay: "0.8s" }}>
                <div className="text-center transform hover:scale-110 transition-all duration-300 group">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    10M+
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Monthly Users
                  </div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300 group">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    300%
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Avg ROI Boost
                  </div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300 group">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    1-Tap
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Redemption
                  </div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300 group">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-2 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    200+
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    Active Brands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Advayu */}
      <section className="py-24 bg-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What is Advayu?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 font-light">
              Advayu is an intelligent offer discovery layer that integrates
              seamlessly into UPI apps. We deliver geo-targeted and
              behavior-based offers to customers exactly when they're ready to
              pay, creating the{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-semibold">
                perfect moment
              </span>{" "}
              for conversion.
            </p>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-lg lg:text-xl text-gray-300 italic font-light relative ">
                "No app downloads, no friction – just{" "}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text font-semibold">
                  instant value
                </span>{" "}
                for both brands and customers."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-br from-gray-900/50 to-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Two powerful targeting methods to reach your ideal customers
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform duration-300">
                  <Target className="h-10 w-10 text-blue-400" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">
                  Offline Stores
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg font-medium">
                  Geo-Targeted Reach
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Customer opens UPI app near your store
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Advayu shows your targeted offer
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      1-tap redemption drives immediate footfall
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Pay only for successful conversions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-purple-400" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">
                  D2C/Online Brands
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg font-medium">
                  Behavior-Based Targeting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      AI analyzes spend patterns & demographics
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Show offers to your ideal customers
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Seamless checkout integration
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">
                      Track ROI with detailed analytics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Advayu */}
      <section id="features" className="py-24 bg-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Why Brands Choose Advayu
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Everything you need to reach customers at the perfect moment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FeatureCard
              icon={<Zap className="h-8 w-8  " />}
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
              icon={<Globe className="h-8 w-8 " />}
              title="Massive Reach"
              description="Access 50M+ active UPI users across India's top payment platforms"
            />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-gradient-to-br from-gray-900/50 to-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Who It's For
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
              Perfect for any business looking to improve customer acquisition
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="p-10 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-12 w-12 text-blue-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  Offline Brands
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Perfect for businesses with physical locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      Restaurants & Cafes
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Retail Stores</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      Service Businesses
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      Entertainment Venues
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-10 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-12 w-12 text-purple-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  D2C Brands
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  Ideal for online businesses and e-commerce
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      E-commerce Platforms
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      SaaS Companies
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      Digital Services
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">
                      Subscription Businesses
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Distribution Partners */}
      <section className="py-24 bg-black relative ">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tight">
                Distribution Partners
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                Fintech and UPI app providers can seamlessly integrate Advayu's
                offer platform to create new revenue streams without disrupting
                user experience.
              </p>
            </div>
            <Card className="p-12 border border-gray-800 bg-black backdrop-blur-sm">
              <CardContent className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white">
                    Easy Integration
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Simple API integration with comprehensive documentation and
                    dedicated support
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white">
                    Revenue Sharing
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Competitive revenue splits with transparent reporting and
                    real-time analytics
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-white">
                    User Experience
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Native feel that enhances rather than disrupts your app
                    experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-gray-900/50 to-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              What Our Partners Say
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
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
      <section className="py-24 bg-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tight">
                About Us
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
                Advayu was born from frustration with ineffective ad spend and
                poor targeting. Our founding team, comprising former executives
                from leading fintech and advertising companies, recognized that
                the point of payment represents the highest intent moment for
                customers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-white">
                  Expert Team
                </h4>
                <p className="text-gray-300 text-lg">
                  15+ years combined experience in fintech and advertising
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-purple-400" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-white">
                  Proven Results
                </h4>
                <p className="text-gray-300 text-lg">
                  300% average improvement in campaign performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-green-400" />
                </div>
                <h4 className="font-bold text-xl mb-4 text-white">
                  Trusted Platform
                </h4>
                <p className="text-gray-300 text-lg">
                  Secure, compliant, and built for enterprise scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900/50 to-gray-950/50 relative  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 text-center relative ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Ready to Transform Your Customer Acquisition?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Join{" "}
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text font-semibold">
                200+ brands
              </span>{" "}
              already reaching customers at the perfect moment. Start your
              Advayu campaign today and see the difference contextual offers can
              make.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 text-lg h-14 border-0 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl relative overflow-hidden group">
                <span className="relative  flex items-center">
                  Book a Demo{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600/50 bg-gray-800/50 text-white px-8 py-4 text-lg h-14 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm group">
                Launch a Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-gray-900/50 to-gray-950/50 relative ">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 text-white tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Get Started Today
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Tell us about your brand and we'll create a{" "}
                <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text font-semibold">
                  custom campaign strategy
                </span>{" "}
                for you.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .icon {
  background: linear-gradient(135deg, #ff6ec4, #7873f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
      `}</style>
    </div>
  );
};

export default Index;
