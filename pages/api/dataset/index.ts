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
          name: 'hello',
          terms: true,
          selectors: {
            createMany: {
              data: [...selectorsArray]
            }
          }
        }
      });

      return res.status(201).json({ message: 'Created' });
    } catch (err: any) {
      console.log(err.message);
      res.status(err.status).json({ error: err });
    }
  }
  if (req.method === 'GET') {
    res.status(200).json({ message: 'success' });
  }
}
