import connectMongoDB from "@/lib/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//For update
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topi Updated..." }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

//Get single item
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
