
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex-1">
          <Quote className="h-8 w-8 text-gray-500 mb-6 group-hover:text-blue-400 transition-colors duration-300" />
          <blockquote className="text-gray-300 leading-relaxed mb-8 text-lg font-light italic">
            "{quote}"
          </blockquote>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <div className="font-black text-white text-lg tracking-tight">{author}</div>
          <div className="text-gray-400 font-medium">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
