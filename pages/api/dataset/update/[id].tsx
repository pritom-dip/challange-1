import prisma from '@lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const { id } = req.query;
    const { name, selectors, checkbox } = JSON.parse(req.body);

    if (!name || !selectors || selectors.length === 0 || !checkbox) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const dataset = await prisma.dataset.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        Selectedselectors: true
      }
    });

    if (!dataset) return res.status(400).json({ message: 'Dataset not found' });

    const selectorsArray = selectors.map(({ value, label }: any) => {
      return {
        value,
        label
      };
    });

    const deleted = await prisma.selectedselectors.deleteMany({
      where: {
        datasetId: Number(id)
      }
    });

    const data = await prisma.dataset.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        terms: checkbox,
        Selectedselectors: {
          createMany: {
            data: [...selectorsArray]
          }
        }
      }
    });

    return res.status(201).json({
      message: 'Dataset updated successfully'
    });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
