import { db } from "../db";

export async function GET(request: Request) {
    return new Response("Hello", { status: 200 })
}

export async function POST(request: Request) {
    const { slug, title, category } = await request.json();

    try {
        const existingPost = await db.blog.findUnique(
            {
                where: { slug: slug },
            }
        );

        if (existingPost) {
            await db.blog.update(
                {
                    where: { slug: slug },
                    data: {
                        view_count: { increment: 1 }
                    }
                }
            )
        } else {
            await db.blog.create(
                {
                    data: {
                        slug: slug,
                        title: title,
                        category: category,
                    }
                }
            )
        }
    } catch (error) {
        console.log("Error while updating view count: ", error)
        return new Response("Failed to update the blog", { status: 500 })
    }
    return new Response("Successfully posted to DB", { status: 200 });
}