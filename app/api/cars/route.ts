// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import multer from "multer";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdirSync, existsSync } from "fs";
import { connectDB } from "@/lib/mongodb"; // adjust path if needed
import Car from "@/models/Car";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });
// const upload = multer({ storage: multer.memoryStorage() });
console.log("upload folder", upload);
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET() {
  try {
    await connectDB();
    const cars = await Car.find();
    return NextResponse.json(cars);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name")?.toString() || "";
  const model = formData.get("model")?.toString() || "";
  const year = formData.get("year")?.toString() || "";
  const price = formData.get("price")?.toString() || "";
  const files = formData.getAll("images") as File[];

  const uploadsDir = path.join(process.cwd(), "public/uploads");
  if (!existsSync(uploadsDir)) mkdirSync(uploadsDir, { recursive: true });

  const imagePaths: string[] = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(uploadsDir, filename);
    await writeFile(filepath, buffer);
    imagePaths.push(`/uploads/${filename}`);
  }

  await connectDB();

  const newCar = new Car({ name, model, year, price, images: imagePaths });
  await newCar.save();
  // Here you'd save the product to MongoDB using your model
  console.log({ name, model, year, price, images: imagePaths });

  return NextResponse.json({ success: true, Car: newCar });
}
