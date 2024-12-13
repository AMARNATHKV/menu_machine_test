import { connectToDatabase } from '@/lib/mongodb';
import { Item } from './model';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const menuId = searchParams.get('menuId');

  await connectToDatabase();
  const items = await Item.find({ menuId });
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const { menuId, name, description, price } = await request.json();

  await connectToDatabase();
  const newItem = await Item.create({ menuId, name, description, price });
  return NextResponse.json(newItem);
}