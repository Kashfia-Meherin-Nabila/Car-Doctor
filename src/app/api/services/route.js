import clientPromise from "@/lib/db";

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db("admin").command({ ping: 1 });

    return Response.json({
      success: true,
      message: "✅ Database connection successful!",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "❌ Database connection failed!",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
