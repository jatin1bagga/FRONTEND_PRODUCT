import { ArrowRight, Sparkles, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-subtle"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-primary/10 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Powered by AI</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                AI Furniture
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Recommender
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Discover elegant furniture powered by artificial intelligence.
                Get personalized recommendations that match your style.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link to="/recommend">
                  <Button size="lg" className="gap-2 text-base px-8 shadow-lg hover:shadow-xl transition-all">
                    Start Exploring
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                    View Analytics
                    <BarChart3 className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-24 animate-fade-in delay-300">
              <div className="backdrop-blur-sm bg-card/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced AI models analyze your preferences to suggest perfect furniture matches
                </p>
              </div>

              <div className="backdrop-blur-sm bg-card/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations in seconds through our conversational interface
                </p>
              </div>

              <div className="backdrop-blur-sm bg-card/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Explore trends and insights about furniture products and pricing
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
