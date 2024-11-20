import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
	const projects = await prisma.project.findMany({
		orderBy: [
			{
				id: 'asc',
			},
		],
	});

	return NextResponse.json({
		projects,
	});
};
