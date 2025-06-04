
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, X } from "lucide-react";

interface SubmitReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitReviewModal = ({ isOpen, onClose }: SubmitReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [revieweeAddress, setRevieweeAddress] = useState("");
  const [comment, setComment] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    // In a real implementation, this would interact with the smart contract
    console.log("Submitting review:", {
      rating,
      revieweeAddress,
      comment,
      tags
    });
    
    // Reset form
    setRating(0);
    setRevieweeAddress("");
    setComment("");
    setTags([]);
    setNewTag("");
    onClose();
  };

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const isActive = index < (hoveredRating || rating);
      return (
        <Star
          key={index}
          className={`h-8 w-8 cursor-pointer transition-colors duration-150 ${
            isActive ? "text-yellow-400 fill-current" : "text-gray-300 hover:text-yellow-200"
          }`}
          onMouseEnter={() => setHoveredRating(index + 1)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(index + 1)}
        />
      );
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full">
              <Star className="h-5 w-5 text-white" />
            </div>
            <span>Submit Review</span>
          </DialogTitle>
          <DialogDescription>
            Leave an immutable review on the blockchain. This review will be permanently associated with your wallet address.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <Label htmlFor="address">Reviewee Wallet Address</Label>
            <Input
              id="address"
              placeholder="0x..."
              value={revieweeAddress}
              onChange={(e) => setRevieweeAddress(e.target.value)}
              className="font-mono"
            />
          </div>

          <div>
            <Label>Rating</Label>
            <div className="flex items-center space-x-2 mt-2">
              {renderStars()}
              <span className="ml-2 text-sm text-slate-600">
                {rating > 0 ? `${rating}/5` : "Select rating"}
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="comment">Review Comment</Label>
            <Textarea
              id="comment"
              placeholder="Share your experience working with this person or project..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
          </div>

          <div>
            <Label>Tags (Optional)</Label>
            <div className="flex space-x-2 mt-2">
              <Input
                placeholder="Add tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
              />
              <Button type="button" onClick={handleAddTag} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                    <span>{tag}</span>
                    <X
                      className="h-3 w-3 cursor-pointer hover:text-red-500"
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <Button onClick={onClose} variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit} 
              disabled={!rating || !revieweeAddress || !comment}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              Submit Review
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
