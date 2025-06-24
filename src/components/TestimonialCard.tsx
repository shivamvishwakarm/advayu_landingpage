
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ quote, author, role }: TestimonialCardProps) => {
  return (
    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex-1">
          <Quote className="h-8 w-8 text-blue-600 mb-4" />
          <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
            "{quote}"
          </blockquote>
        </div>
        <div className="border-t pt-4">
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-gray-600 text-sm">{role}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
