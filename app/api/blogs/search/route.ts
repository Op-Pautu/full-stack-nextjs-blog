import prisma from "@/prisma"
import { connectToDb, generateSuccessMessage, generateErrorMessage } from "@/lib/helpers"

export const GET = async (req: Request) => {
    const searchedTitle = new URL(req.url).searchParams.get('title')
    try {
        await connectToDb()

        const blogs = await prisma.blog.findMany({
            where: {
                title: {
                    contains: searchedTitle ?? ""
                }
            }
        })
        return generateSuccessMessage({ blogs }, 200)
    } catch (error) {
        return generateErrorMessage({ error }, 500)
    } finally {
        await prisma.$disconnect()
    }
}