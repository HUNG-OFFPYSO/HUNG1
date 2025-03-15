import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/128"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View projects</Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            I'm a full stack developer with over 5 years of experience building web applications.
            I specialize in React, Node.js, and modern web technologies. My passion lies in creating
            user-friendly interfaces and writing clean, maintainable code.
          </p>
          <p>
            When I'm not coding, you can find me contributing to open source projects, writing
            technical blog posts, and learning new technologies.
          </p>
        </div>
      </section>
    </div>
  );
}
