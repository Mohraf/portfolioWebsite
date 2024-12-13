import {
    NextRequest, 
    NextResponse
} from 'next/server';
import { z } from 'zod';

// Zod schema for blog post validation
const BlogPostSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).max(255),
    content: z.string().min(1, { message: "Content is required" }),
    image: z.string().url().nullable().optional(),
    status: z.enum(["draft", "published"]).default("draft")
});

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming JSON body
        const body = await request.json();

        // Validate the request body against the schema
        const validatedData = BlogPostSchema.parse(body);

        // TODO: Replace with your actual database insertion logic
        // This is a placeholder for your database interaction
        const newPost = {
            ...validatedData,
            createdAt: new Date(),
            updatedAt: new Date(),
            slug: validatedData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
        };

        // TODO: Actually save to database
        // For example, if using Prisma:
        // const savedPost = await prisma.post.create({ data: newPost });

        return NextResponse.json(
            {
                message: `Blog post ${validatedData.status === 'published' ? 'published' : 'saved as draft'} successfully`,
                post: newPost
            },
            { status: 201 }
        );
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Validation Error",
                    errors: error.errors
                },
                { status: 400 }
            );
        }

        // Handle other unexpected errors
        console.error('Blog post creation error:', error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

// TODO: Replace with your actual database fetching logic
const mockPosts = [
    {
        id: '1',
        title: 'Introduction to Next.js 15',
        content: 'Exploring the new features and improvements in Next.js 15...',
        image: '/ecom.jpg',
        status: 'published',
        createdAt: new Date().toISOString(),
        slug: 'introduction-to-nextjs-15'
    },
    // Add more mock posts as needed
];

export async function GET() {
    try {
        // TODO: Replace with actual database query
        // Example with Prisma:
        // const posts = await prisma.post.findMany({
        //   where: { status: 'published' },
        //   orderBy: { createdAt: 'desc' }
        // });

        // Filter out draft posts
        const publishedPosts = mockPosts.filter(post => post.status === 'published');

        return NextResponse.json(
            {
                posts: publishedPosts,
                total: publishedPosts.length
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json(
            { message: "Failed to fetch blog posts" },
            { status: 500 }
        );
    }
}