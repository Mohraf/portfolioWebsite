"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string | null;
  status: "draft" | "published";
  createdAt: string;
  slug: string;
}

const Index = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-950 p-6 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl mb-4">Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-950 p-6">
      <div className="max-w-5xl mx-auto text-center space-y-20">
        <div className="space-y-2">
          <div className="inline-block px-3 py-1 bg-gray-600 rounded-full text-sm text-gray-100 mb-2">
            Welcome to F1sherman&apos;s Tech Blog
          </div>
          <h1 className="text-4xl font-semibold text-white tracking-tight">Code, Coffee, and Creativity: Navigating the Tech Universe</h1>
          <p className="text-gray-600">Here are our latest stories</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading 
            ? Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-gray-800 p-4 space-y-4">
                <Skeleton className="w-full h-48 bg-gray-700 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4 bg-gray-700" />
                  <Skeleton className="h-4 w-full bg-gray-700" />
                  <Skeleton className="h-4 w-2/3 bg-gray-700" />
                </div>
              </Card>
            ))
            : posts.length === 0 
              ? (
                <div className="col-span-full text-center text-gray-400">
                  <p>No blog posts found</p>
                </div>
              )
              : posts.map((post) => (
                <Card 
                  key={post.id} 
                  className="bg-white/10 backdrop-blur-sm border border-gray-800 overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {post.image && (
                    <div className="relative w-full aspect-video">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-white line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs text-white/60">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm" className="rounded-full text-grey-500 border-gray-700 hover:bg-gray-800 hover:text-white">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Index;