"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const investmentTiers = [
  {
    name: "Seed",
    amount: "₹10L",
    equity: "2%",
    benefits: [
      "Quarterly investor updates",
      "Early access to new features",
      "Priority support channel",
      "Annual stakeholder meeting"
    ]
  },
  {
    name: "Growth",
    amount: "₹25L",
    equity: "4%",
    benefits: [
      "Monthly investor updates",
      "Product roadmap input",
      "Dedicated support manager",
      "Advisory board seat",
      "Quarterly business reviews"
    ]
  },
  {
    name: "Strategic",
    amount: "₹50L",
    equity: "8%",
    benefits: [
      "Weekly investor updates",
      "Strategic partnership opportunities",
      "Board member position",
      "Direct founder access",
      "Custom integration support",
      "Co-branding rights"
    ]
  }
];

export default function Investment() {
  return (
    <section id="investment" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Investment Options</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join us in transforming India's digital landscape with flexible investment tiers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {investmentTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="relative h-full">
                <CardHeader>
                  <Badge className="w-fit mb-4">{tier.name}</Badge>
                  <CardTitle className="flex items-end gap-2">
                    <span className="text-3xl font-bold">{tier.amount}</span>
                    <span className="text-muted-foreground">/ {tier.equity} equity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}