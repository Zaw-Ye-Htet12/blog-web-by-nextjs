'use server'
import { db } from '@/app/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const FormSchema = z.object(
    {
        id: z.number(),
        email: z.string().min(1, { message: 'Email is required' }),
        is_subscribed: z.boolean()
    }
)

const createSubscriberFormSchema = FormSchema.omit({ id: true, is_subscribed: true })

export type State = {
    errors?: {
        email?: string[],
    },
    message?: string | null
}

export const createSubscriber = async (prevState: State, formData: FormData) => {
    const validatedField = createSubscriberFormSchema.safeParse(
        { email: formData.get('email') }
    )

    if (!validatedField.success) {
        return {
            errors: validatedField.error.flatten().fieldErrors,
            message: "Email is required"
        }
    }

    const { email } = validatedField.data;

    try {
        await db.subscriber.create({
            data: {
                email: email
            }
        })
        revalidatePath("/")
        return { message: "Thanks for subscribing." }
    } catch (error) {
        if (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    return {
                        message: "Email already Exist in the DB",
                    };
                }
            }
        }
        return {message: "Database Error: Failed to create subscriber.", }
    }
}