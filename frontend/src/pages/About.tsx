import { Sparkles, Target, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Navbar />

      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              About AI Furniture Recommender
            </h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing furniture discovery through artificial intelligence
            </p>
          </div>

          <div className="space-y-8">
            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We're on a mission to transform the way people discover and choose furniture. 
                      By leveraging cutting-edge AI technology, including computer vision and natural 
                      language processing, we make furniture shopping intuitive, personalized, and enjoyable. 
                      No more endless scrolling—just intelligent recommendations tailored to your taste.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">AI-Powered Technology</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our platform uses advanced machine learning models to understand your preferences 
                      and provide personalized recommendations. The conversational AI interface allows 
                      you to describe what you're looking for naturally, and our system generates 
                      creative product descriptions that help you make informed decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50 border-border animate-fade-in delay-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Data-Driven Insights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond recommendations, we provide comprehensive analytics that help you 
                      understand furniture trends, pricing patterns, and market insights. Our 
                      visualization tools make complex data accessible and actionable, whether 
                      you're a shopper looking for the best deals or a business analyzing the market.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center pt-8 animate-fade-in delay-400">
              <p className="text-lg text-muted-foreground">
                Built with React, powered by AI, designed for the future.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
