import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users, Zap, ArrowRight, Search, Plus } from "lucide-react";
import { ReviewCard } from "@/components/ReviewCard";
import { ProfileCard } from "@/components/ProfileCard";
import { SubmitReviewModal } from "@/components/SubmitReviewModal";

const Index = () => {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("recent");

  const mockReviews = [
    {
      id: "1",
      reviewerAddress: "0x742d...9f3a",
      revieweeAddress: "0x1234...abcd",
      rating: 5,
      comment: "Excellent work on the smart contract audit. Very thorough and professional communication throughout the project.",
      timestamp: "2024-06-03T10:30:00Z",
      tags: ["Smart Contracts", "Audit"],
      upvotes: 12,
      sentiment: "positive" as const
    },
    {
      id: "2",
      reviewerAddress: "0x8765...4321",
      revieweeAddress: "0x1234...abcd",
      rating: 4,
      comment: "Great DAO contributor. Always delivers on time and provides valuable insights during governance discussions.",
      timestamp: "2024-06-02T15:45:00Z",
      tags: ["DAO", "Governance"],
      upvotes: 8,
      sentiment: "positive" as const
    },
    {
      id: "3",
      reviewerAddress: "0x9abc...def0",
      revieweeAddress: "0x5678...9012",
      rating: 2,
      comment: "Project was delivered but communication was poor and several deadlines were missed.",
      timestamp: "2024-06-01T09:15:00Z",
      tags: ["Development", "Communication"],
      upvotes: 3,
      sentiment: "negative" as const
    }
  ];

  const topProfiles = [
    {
      address: "0xabcd...ef12",
      totalReviews: 31,
      averageRating: 4.9,
      tags: ["DAO", "Governance", "Community"]
    },
    {
      address: "0x1234...abcd",
      totalReviews: 23,
      averageRating: 4.8,
      tags: ["Smart Contracts", "Audit", "Security"]
    },
    {
      address: "0x5678...9012",
      totalReviews: 18,
      averageRating: 4.9,
      tags: ["Frontend", "DeFi", "UI/UX"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                TrustRate
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex">
                <Search className="h-4 w-4 mr-2" />
                Search Reviews
              </Button>
              <Button 
                onClick={() => setIsSubmitModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in">
            Decentralized
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}Reputation{" "}
            </span>
            for Web3
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build trust in the decentralized world with immutable, blockchain-verified reviews. 
            Every review is permanently linked to wallet addresses, ensuring transparency and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200"
            >
              Explore Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-slate-50">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Why TrustRate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Immutable Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All reviews are stored on-chain, making them permanent and tamper-proof. 
                  No central authority can delete or modify authentic feedback.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Wallet-Linked Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reviews are tied to wallet addresses, creating a persistent reputation 
                  that follows users across all Web3 platforms and DAOs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-cyan-50 to-teal-50">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-600 mb-4" />
                <CardTitle>DAO Compatible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Perfect for DAO contributors, DeFi protocols, and Web3 freelancers. 
                  Build reputation across the entire decentralized ecosystem.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              {activeTab === "recent" ? "Recent Reviews" : "Top Rated Reviews"}
            </h2>
            <div className="flex space-x-2">
              <Button
                variant={activeTab === "recent" ? "default" : "outline"}
                onClick={() => setActiveTab("recent")}
                className={activeTab === "recent" ? "bg-gradient-to-r from-blue-600 to-cyan-600" : ""}
              >
                Recent
              </Button>
              <Button
                variant={activeTab === "top" ? "default" : "outline"}
                onClick={() => setActiveTab("top")}
                className={activeTab === "top" ? "bg-gradient-to-r from-blue-600 to-cyan-600" : ""}
              >
                Top Rated
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            {mockReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Top Rated Profiles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topProfiles.map((profile) => (
              <ProfileCard key={profile.address} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <SubmitReviewModal 
        isOpen={isSubmitModalOpen} 
        onClose={() => setIsSubmitModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
