import { 
  type Project, type InsertProject,
  type BlogPost, type InsertBlogPost,
  type Message, type InsertMessage
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Blog posts
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Messages
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private blogPosts: Map<number, BlogPost>;
  private messages: Map<number, Message>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.projects = new Map();
    this.blogPosts = new Map();
    this.messages = new Map();
    this.currentIds = { projects: 1, blogPosts: 1, messages: 1 };
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentIds.projects++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogPosts++;
    const newPost = { ...post, id };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const id = this.currentIds.messages++;
    const newMessage = { 
      ...message, 
      id,
      created: new Date()
    };
    this.messages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
