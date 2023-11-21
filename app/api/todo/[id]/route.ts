import db from "../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, res: NextResponse) {
  const id = req.nextUrl.pathname.split("/").pop();

  const response = await db
    .collection("todo")
    .doc(id as string)
    .delete();

  console.log("This is the res", response);
  return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest) {
  const body = await req.body;
  let passedValue = await new Response(body).text();
  let valueToJson = JSON.parse(passedValue);
  const id = req.nextUrl.pathname.split("/").pop();
  const response = await db
    .collection("todo")
    .doc(id as string)
    .update({
      ...valueToJson,
      updated: new Date().toISOString(),
    });
  if (response) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
