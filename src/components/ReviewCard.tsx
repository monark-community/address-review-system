
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp, Clock, User } from "lucide-react";

interface Review {
  id: string;
  reviewerAddress: string;
  revieweeAddress: string;
  rating: number;
  comment: string;
  timestamp: string;
  tags: string[];
  upvotes: number;
  sentiment: "positive" | "negative" | "neutral";
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800 border-green-200";
      case "negative":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-2 rounded-full">
              <User className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm text-slate-600">
                  {review.reviewerAddress}
                </span>
                <span className="text-slate-400">→</span>
                <span className="font-mono text-sm text-slate-900 font-medium">
                  {review.revieweeAddress}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {review.rating}/5
                </span>
                <Badge className={getSentimentColor(review.sentiment)} variant="outline">
                  {review.sentiment}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            <Clock className="h-4 w-4" />
            <span>{formatDate(review.timestamp)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 mb-4 leading-relaxed">{review.comment}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {review.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:bg-blue-50">
            <ThumbsUp className="h-4 w-4" />
            <span>{review.upvotes}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
