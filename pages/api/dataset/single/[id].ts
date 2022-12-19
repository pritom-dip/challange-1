import prisma from '@lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { id } = req.query;
    const dataset = await prisma.dataset.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        Selectedselectors: true
      }
    });
    if (!dataset) return res.status(400).json({ message: 'Dataset not found' });
    return res.status(200).json(dataset);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
