"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, TrendingUp, Users, Map } from "lucide-react";

const stats = [
  {
    icon: IndianRupee,
    value: "₹1000+ Cr",
    label: "Total Addressable Market",
    description: "Growing digital services market in tier-4 cities"
  },
  {
    icon: TrendingUp,
    value: "67%",
    label: "YoY Growth",
    description: "Consistent market expansion and adoption"
  },
  {
    icon: Users,
    value: "1.15M",
    label: "Population Reach",
    description: "Direct access to underserved markets"
  },
  {
    icon: Map,
    value: "100+",
    label: "Expansion Cities",
    description: "Identified growth opportunities"
  }
];

export default function MarketStats() {
  return (
    <section id="market" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tapping into India's rapidly growing digital economy with focus on tier-4 cities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="font-medium mb-2">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}