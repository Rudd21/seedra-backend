import { prisma } from "../../prisma/prismaClient.js"

export const getReports = async(req, res) => {
    const role = req.user.role;

    try {

        const reports = await prisma.report.findMany();
        res.status(200).json(reports)

    } catch {
        res.status(500).json({ message: "Помилка при получені списку скарг" })
    }
}