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
              alt="Ảnh đại diện"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nguyễn Văn A
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lập trình viên Full Stack với niềm đam mê tạo ra các ứng dụng web đẹp và chức năng
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">Xem dự án</Link>
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
        <h2 className="text-3xl font-bold mb-6">Về tôi</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Tôi là một lập trình viên full stack với hơn 5 năm kinh nghiệm xây dựng ứng dụng web.
            Tôi chuyên về React, Node.js và các công nghệ web hiện đại. Niềm đam mê của tôi là tạo ra
            các giao diện thân thiện với người dùng và viết mã nguồn sạch, dễ bảo trì.
          </p>
          <p>
            Khi không code, bạn có thể tìm thấy tôi đang đóng góp cho các dự án mã nguồn mở, viết
            các bài blog kỹ thuật và học hỏi các công nghệ mới.
          </p>
        </div>
      </section>
    </div>
  );
}