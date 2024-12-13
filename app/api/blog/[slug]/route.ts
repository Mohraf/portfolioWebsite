// src/app/api/posts/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock data - replace with actual database fetching
const mockPosts = [
  {
    id: '1',
    title: 'Introduction to Next.js 15',
    content: `
## Getting Started with Next.js 15

Next.js 15 brings exciting new features to the React ecosystem. In this post, we'll explore:

- Server Components
- Enhanced Performance
- New Routing Capabilities

### Server Components

Server Components allow you to write React components that render on the server, providing improved performance and SEO.

### Performance Improvements

Next.js 15 introduces significant performance optimizations, including:
- Faster compilation
- Reduced bundle sizes
- Improved caching mechanisms

**Stay tuned for more in-depth exploration!**
    `,
    image: '/ecom.jpg',
    status: 'published',
    createdAt: new Date().toISOString(),
    slug: 'introduction-to-nextjs-15',
    author: 'Tech Blogger',
    tags: ['Next.js', 'React', 'Web Development']
  },
  // Add more mock posts
];

export async function GET(
  request: NextRequest, 
  context: { params: { slug: string } }
) {
  try {
    // TODO: Replace with actual database query
    // Example with Prisma:
    // const post = await prisma.post.findUnique({
    //   where: { slug: params.slug }
    // });

    const post = mockPosts.find(p => p.id === context.params.slug);

    if (!post) {
      return NextResponse.json(
        { message: "Blog post not found" }, 
        { status: 404 }
      );
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { message: "Failed to fetch blog post" }, 
      { status: 500 }
    );
  }
}