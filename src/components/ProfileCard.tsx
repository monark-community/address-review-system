
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare, TrendingUp, ExternalLink } from "lucide-react";

interface Profile {
  address: string;
  totalReviews: number;
  averageRating: number;
  tags: string[];
}

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600 transition-all duration-200 transform hover:scale-105">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-mono text-sm text-slate-300 mb-2">{profile.address}</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(profile.averageRating)}
              </div>
              <span className="text-white font-medium">{profile.averageRating}</span>
              <span className="text-slate-400">•</span>
              <div className="flex items-center space-x-1 text-slate-400">
                <MessageSquare className="h-4 w-4" />
                <span>{profile.totalReviews} reviews</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
