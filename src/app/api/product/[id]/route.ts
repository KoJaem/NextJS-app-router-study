import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // 2초 대기
  await new Promise(resolve => setTimeout(resolve, 2000));

  // 데이터 반환
  return NextResponse.json({
    id,
    title: `Product ${id}`,
    description: `Description for Product ${id}`,
    image: `/images/product-${id}.jpg`,
  });
}
