"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const financialData = {
  revenue: [
    { year: '2024', Q1: 50, Q2: 75, Q3: 120, Q4: 180 },
    { year: '2025', Q1: 200, Q2: 250, Q3: 300, Q4: 380 },
    { year: '2026', Q1: 400, Q2: 480, Q3: 550, Q4: 650 }
  ],
  metrics: [
    {
      title: "Break-even Point",
      value: "Q4 2024",
      description: "Expected to achieve operational break-even"
    },
    {
      title: "Projected ROI",
      value: "3.2x",
      description: "Expected return in 3 years"
    },
    {
      title: "Market Share",
      value: "12%",
      description: "Projected market penetration by 2026"
    }
  ]
};

export default function Financials() {
  return (
    <section id="financials" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Financial Projections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed analysis of our growth trajectory and financial milestones
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Revenue Forecast (in Lakhs ₹)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={financialData.revenue}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Q1" stroke="var(--chart-1)" />
                    <Line type="monotone" dataKey="Q2" stroke="var(--chart-2)" />
                    <Line type="monotone" dataKey="Q3" stroke="var(--chart-3)" />
                    <Line type="monotone" dataKey="Q4" stroke="var(--chart-4)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financialData.metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{metric.title}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}