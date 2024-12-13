import { connectToDatabase } from '@/lib/mongodb';
import { Menu } from './model';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  const menus = await Menu.find();
  return NextResponse.json(menus);
}

export async function POST(request: Request) {
  await connectToDatabase();
  const { name, description } = await request.json();
  const newMenu = await Menu.create({ name, description });
  return NextResponse.json(newMenu);
}