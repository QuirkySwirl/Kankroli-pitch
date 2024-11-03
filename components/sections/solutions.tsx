"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppWindow, CreditCard, Smartphone } from "lucide-react";

const solutions = [
  {
    id: "business-apps",
    icon: AppWindow,
    title: "Business Apps",
    revenue: "₹2.5Cr",
    timeline: "Q2 2024",
    features: [
      "Digital inventory management",
      "Cloud-based accounting",
      "Business analytics dashboard",
      "Multi-location support"
    ]
  },
  {
    id: "digital-services",
    icon: Smartphone,
    title: "Digital Services",
    revenue: "₹4.8Cr",
    timeline: "Q3 2024",
    features: [
      "Digital document services",
      "Government service integration",
      "Educational resources",
      "Healthcare connectivity"
    ]
  },
  {
    id: "transaction-platform",
    icon: CreditCard,
    title: "Transaction Platform",
    revenue: "₹7.2Cr",
    timeline: "Q4 2024",
    features: [
      "UPI integration",
      "B2B payments",
      "Invoice financing",
      "Digital lending"
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital transformation solutions designed for India's tier-4 cities
          </p>
        </motion.div>

        <Tabs defaultValue="business-apps" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            {solutions.map((solution) => (
              <TabsTrigger key={solution.id} value={solution.id}>
                {solution.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <solution.icon className="h-8 w-8 text-blue-600" />
                      <div>
                        <CardTitle>{solution.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-2">Projected Revenue</h4>
                        <p className="text-2xl font-bold text-blue-600">{solution.revenue}</p>
                        <p className="text-sm text-muted-foreground">Timeline: {solution.timeline}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}