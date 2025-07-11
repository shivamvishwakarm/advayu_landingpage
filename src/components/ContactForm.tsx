import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LAMDA_URL } from "@/constant";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    website: "",
    emailAddress: "",
    targetType: "",
    postType: "",
    city: "",
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await fetch(`${LAMDA_URL}/v1/brands/contact-us`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json", // important for JSON body
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Server response:", result);

      toast({
        title: "Form Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form data here
      setFormData({
        name: "",
        brandName: "",
        website: "",
        emailAddress: "",
        targetType: "",
        postType: "",
        city: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
      });
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Card className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300 font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand" className="text-gray-300 font-medium">
                Brand/Company *
              </Label>
              <Input
                id="brandName"
                type="text"
                placeholder="Your brand name"
                value={formData.brandName}
                onChange={(e) => handleInputChange("brandName", e.target.value)}
                required
                className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="website" className="text-gray-300 font-medium">
                Website
              </Label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300 font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="emailAddress"
                placeholder="your@email.com"
                value={formData.emailAddress}
                onChange={(e) =>
                  handleInputChange("emailAddress", e.target.value)
                }
                required
                className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetType" className="text-gray-300 font-medium">
              Target Type *
            </Label>
            <Select
              value={formData.targetType}
              onValueChange={(value) => handleInputChange("targetType", value)}>
              <SelectTrigger className="border-gray-700 bg-gray-800/50 text-white focus:border-blue-500 focus:ring-blue-500">
                <SelectValue placeholder="Select your target type" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border border-gray-700 text-white">
                <SelectItem value="offline">
                  Offline Store (Geo-targeted)
                </SelectItem>
                <SelectItem value="d2c">
                  D2C/Online Brand (Behavior-based)
                </SelectItem>
                <SelectItem value="both">Both Offline and Online</SelectItem>
                <SelectItem value="distribution">
                  Distribution Partner (Fintech/UPI App)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="postType" className="text-gray-300 font-medium">
              POS/Platform Used
            </Label>
            <Input
              id="postType"
              type="text"
              placeholder="e.g., Shopify, Razorpay POS, Square, etc."
              value={formData.postType}
              onChange={(e) => handleInputChange("postType", e.target.value)}
              className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="cityDemographics"
              className="text-gray-300 font-medium">
              City/Target Demographics
            </Label>
            <Input
              id="cityDemographics"
              type="text"
              placeholder="e.g., Mumbai, Delhi, 25-35 age group, etc."
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg border-0"
            size="lg">
            Submit & Get Started
          </Button>

          <p className="text-sm text-gray-400 text-center">
            By submitting this form, you agree to our terms and privacy policy.
            We'll contact you within 24 hours to discuss your campaign.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
