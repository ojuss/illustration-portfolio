"use client";

import { motion } from "framer-motion";
import { Award, Brain, Palette, Microscope, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Scientific Accuracy",
    description: "Meticulous attention to detail ensuring accurate representation of scientific concepts"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Artistic Excellence",
    description: "Combining technical precision with artistic beauty to create compelling illustrations"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Recognition",
    description: "Featured in leading scientific journals and educational publications"
  }
];

const experiences = [
  {
    year: "2020-Present",
    title: "Scientific Illustrator",
    company: "Freelance",
    description: "Creating detailed illustrations for research papers and educational materials"
  },
  {
    year: "2018-2020",
    title: "Medical Illustrator",
    company: "BioMed Publications",
    description: "Specialized in anatomical and cellular illustrations"
  },
  {
    year: "2016-2018",
    title: "Scientific Visualization",
    company: "Research Institute",
    description: "Developed visual content for scientific research"
  }
];

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/20" />
      
      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            With over 8 years of experience in scientific illustration, I bridge the gap between complex scientific concepts and visual understanding. My work has been featured in leading scientific journals and educational materials worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070"
                alt="Scientific Illustrator at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <p className="text-muted-foreground">Master's in Scientific Illustration</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Experience</h3>
                  <p className="text-muted-foreground">8+ Years Professional Experience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Specialization</h3>
                  <p className="text-muted-foreground">Molecular & Cellular Biology Illustration</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Professional Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur p-6 rounded-xl border border-border/50"
              >
                <div className="text-primary/80 font-mono mb-2">{experience.year}</div>
                <h4 className="text-lg font-semibold mb-1">{experience.title}</h4>
                <div className="text-primary/80 text-sm mb-2">{experience.company}</div>
                <p className="text-muted-foreground text-sm">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}