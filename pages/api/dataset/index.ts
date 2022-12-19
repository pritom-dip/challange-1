import prisma from '@lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    try {
      const { name, selectors, checkbox } = JSON.parse(req.body);

      if (!name || !selectors || selectors.length === 0 || !checkbox) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }

      const selectorsArray = selectors.map(({ value, label }: any) => {
        return {
          value,
          label
        };
      });

      const data = await prisma.dataset.create({
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

      return res.status(201).json({ message: 'Created', data: data });
    } catch (err: any) {
      res.status(500).json({ error: err });
    }
  }
  if (req.method === 'GET') {
    try {
      const data = await prisma.dataset.findMany();
      return res.status(200).json({ data });
    } catch (err) {
      return res
        .status(200)
        .json({ message: 'failed', err: JSON.stringify(err) });
    }
  }
}
