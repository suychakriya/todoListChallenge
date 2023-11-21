import { Todo } from "../../types";
import db from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";

// Example in-memory storage
let todos: Todo[] = [];

export async function GET(req: NextRequest, res: NextResponse) {
  const collectionRef = db.collection("todo");
  const snapshot = await collectionRef.get();

  const allDocuments = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  console.log("These are the document", allDocuments);

  return NextResponse.json({ success: true, data: allDocuments });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.body;
  let passedValue = await new Response(body).text();
  let valueToJson = JSON.parse(passedValue);
  const { id } = await db.collection("todo").add({
    todo: valueToJson.todo,
    createdAt: valueToJson.createdAt,
    isCompleted: valueToJson.isCompleted,
    created: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
