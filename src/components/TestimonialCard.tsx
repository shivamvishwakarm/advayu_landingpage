
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex-1">
          <Quote className="h-8 w-8 text-gray-400 mb-6" />
          <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg">
            "{quote}"
          </blockquote>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="font-bold text-gray-900 text-lg">{author}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
