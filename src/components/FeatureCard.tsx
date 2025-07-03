import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 hover:scale-105 transform hover:shadow-2xl group">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-300 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="text-xl lg:text-2xl font-black mb-4 text-white tracking-tight">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed font-light">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
