import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
// Adjust this path if needed

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Create a new order document in Sanity
    const order = await client.create({
      _type: "order",
      customer: body.customer,
      cart: body.cart,
      totalPrice: body.totalPrice,
      status: "pending", // Default order status
    });

    return NextResponse.json({ success: true, order }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
  }
}
