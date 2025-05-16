import connectToDatabase from "@/lib/connection";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    console.log(username);
    console.log(email);
    console.log(password);
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User registered" });
  } catch (error) {
    return NextResponse.json({ message: "user not registered" });
  }
}
