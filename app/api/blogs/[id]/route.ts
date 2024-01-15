import prisma from "@/prisma"
import { connectToDb, generateSuccessMessage, generateErrorMessage } from "@/lib/helpers"

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id

        await connectToDb()

        const blog = await prisma.blog.findFirst({
            where: { id: id },
        })
        return generateSuccessMessage({ blog }, 200)
    } catch (error) {
        return generateErrorMessage({ error }, 500)
    } finally {
        await prisma.$disconnect()
    }
}
export const PUT = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id
        const { title, description } = await req.json()

        if (!title || !description) {
            return generateErrorMessage({ reason: "Invalid Data" }, 422)
        }

        await connectToDb()

        const blog = await prisma.blog.update({
            where: { id: id },
            data: {
                title,
                description
            }
        })
        return generateSuccessMessage({ blog }, 200)
    } catch (error) {
        return generateErrorMessage({ error }, 500)
    } finally {
        await prisma.$disconnect()
    }
}

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        const id = params.id

        await connectToDb()

        const blog = await prisma.blog.delete({
            where: { id: id },
        })
        return generateSuccessMessage({ blog }, 200)
    } catch (error) {
        return generateErrorMessage({ error }, 500)
    } finally {
        await prisma.$disconnect()
    }
}