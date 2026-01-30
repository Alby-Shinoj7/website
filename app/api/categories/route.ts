import { NextResponse } from 'next/server';
import { categories } from '@/data/catalog';

export async function GET() {
  return NextResponse.json({ data: categories });
}
