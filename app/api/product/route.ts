import connectToDatabase from "@/lib/connection";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, description, quantity, price } = await request.json();
  await connectToDatabase();
  await Product.create({ name, description, quantity, price });

  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}
