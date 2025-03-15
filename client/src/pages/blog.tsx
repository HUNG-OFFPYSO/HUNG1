import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { format } from "date-fns";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  if (isLoading) {
    return <div>Đang tải bài viết...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Chia sẻ kiến thức, hướng dẫn và góc nhìn về lập trình web
        </p>
      </div>

      <div className="grid gap-6">
        {posts?.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <time className="text-sm text-muted-foreground">
                    {format(new Date(post.publishDate), "dd/MM/yyyy")}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <CardDescription className="prose prose-sm max-w-none">
                  {post.content}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}