"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Digital Transformation for India's Next Billion
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Empowering tier-4 cities with cutting-edge digital infrastructure and services
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Investment Progress</span>
              <span>₹3.2Cr / ₹5Cr</span>
            </div>
            <Progress value={64} className="h-2" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Invest Now
            </Button>
            <Button size="lg" variant="outline">
              Download Pitch Deck
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
