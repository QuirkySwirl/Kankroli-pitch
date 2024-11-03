"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Saket Sharma",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/drsprx7wk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730618556/Saket-modified_wkwzbi.png",
    bio: "Veteran Entrepreneur running several successful & profitable ventures",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Dr. Vritti  Sharma",
    role: "Chief Edutech Officer",
    image: "https://res.cloudinary.com/drsprx7wk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730618556/IMG_1500-EDIT-EDIT-modified_jiws3z.png",
    bio: "PhD, MPhil in imparting education, specializing in Educational Technology. ",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Kartik Iyer",
    role: "Chief Technology Officer",
    image: "https://res.cloudinary.com/drsprx7wk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730618594/Untitled_design_kidbpq.png",
    bio: "23+ years experience in scaling enterprise solutions for large multinational corporations across the globe.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Could be You!",
    role: "How will you contribute?",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "What skills & expeqrience do you bring to the table? We are open to new talent and ideas for innovative solutions",
    linkedin: "#",
    twitter: "#"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Led by industry veterans with proven track records in technology and business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a href={member.linkedin} className="text-muted-foreground hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.twitter} className="text-muted-foreground hover:text-blue-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
