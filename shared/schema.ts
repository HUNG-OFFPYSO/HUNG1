import { pgTable, text, serial, date, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  tags: text("tags").array().notNull(),
  link: text("link"),
  github: text("github"),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  publishDate: date("publish_date").notNull(),
  tags: text("tags").array().notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  created: date("created").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, created: true });

export type Project = typeof projects.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
