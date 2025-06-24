
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gray-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
