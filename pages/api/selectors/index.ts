// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const options = [
  { value: 'Manufacturing', label: 'Manufacturing' },
  { value: 'Construction materials', label: 'Construction materials' },
  { value: 'Electronics and Optics', label: 'Electronics and Optics' },
  { value: 'Food and Beverage', label: 'Food and Beverage' },
  {
    value: 'Bakery & confectionery products',
    label: 'Bakery & confectionery products'
  },
  { value: 'Beverages', label: 'Beverages' },
  { value: 'Fish & fish products', label: 'Fish & fish products' },
  { value: 'Meat & meat products', label: 'Meat & meat products' }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    try {
      const data = await prisma.selector.createMany({
        data: [...options]
      });
      return res.status(201).send({
        success: true,
        message: 'created'
      });
    } catch (err) {
      return res.status(404).json({
        message: 'Something went wrong'
      });
    }
  } else if (req.method === 'GET') {
    try {
      const data = await prisma.selector.findMany();
      return res.status(201).send({
        success: true,
        data
      });
    } catch (err) {
      res.status(404).json({
        message: 'Something went wrong'
      });
    }
  }
}
