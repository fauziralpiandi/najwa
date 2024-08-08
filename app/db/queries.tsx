'use server';

import { sql } from './postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getBlogViews(): Promise<number> {
  if (!process.env.POSTGRES_URL) {
    throw new Error('Postgres URL is not defined');
  }

  noStore();
  try {
    const views = await sql`
      SELECT count
      FROM views
    `;

    return views.reduce((acc, curr) => acc + Number(curr.count), 0);
  } catch (error) {
    console.error('Error fetching blog views:', error);
    throw new Error('Failed to fetch blog views');
  }
}

export async function getViewsCount(): Promise<
  { slug: string; count: number }[]
> {
  if (!process.env.POSTGRES_URL) {
    throw new Error('Postgres URL is not defined');
  }

  noStore();
  try {
    return await sql`
      SELECT slug, count
      FROM views
    `;
  } catch (error) {
    console.error('Error fetching views count:', error);
    throw new Error('Failed to fetch views count');
  }
}
