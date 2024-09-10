import connectMongoDB from "@/lib/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

//Post a new list in the database...
export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
  }
}

//Get all the items from database...
export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();
    return new NextResponse(JSON.stringify(topics), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching users" + error, {
      status: 500,
    });
  }
}

//Delete an item from database...
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "successfully deleted..." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
