"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { ImageUpload } from "@/components/blog/ImageUpload";

interface BlogPost {
  title: string;
  content: string;
  image: string | null;
  status: "draft" | "published";
}

const NewBlogPost = () => {
  const [post, setPost] = useState<BlogPost>({
    title: "",
    content: "",
    image: null,
    status: "draft"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (imageUrl: string) => {
    console.log("Image uploaded:", imageUrl);
    setPost((prev) => ({ ...prev, image: imageUrl }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Saving post:", post);
      toast.success("Blog post saved successfully!");
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Failed to save blog post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-950 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 mb-2">
            New Post
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white">Create Blog Post</h1>
          <p className="text-gray-500">Share your thoughts with the world</p>
        </div>

        <Card className="p-6 space-y-6 bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                id="title"
                placeholder="Enter your blog post title"
                value={post.title}
                onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <ImageUpload onUpload={handleImageUpload} />
              {post.image && (
                <div className="relative mt-2 rounded-lg overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="content" className="text-sm font-medium text-gray-700">
                Content
              </label>
              <Textarea
                id="content"
                placeholder="Write your blog post content here..."
                value={post.content}
                onChange={(e) => setPost((prev) => ({ ...prev, content: e.target.value }))}
                className="min-h-[300px] transition-all duration-200 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div className="flex items-center justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setPost((prev) => ({ ...prev, status: "draft" }))}
                className="transition-all duration-200 hover:bg-gray-50"
              >
                Save as Draft
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200"
              >
                {isLoading ? "Publishing..." : "Publish Post"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewBlogPost;