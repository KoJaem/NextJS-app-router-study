import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata // layout.tsx 에 메타데이터가 설정되어있으면 그 값을 가져옴 (parent.title, ...)
): Promise<Metadata> {
  const { id } = params;

  // API 호출로 데이터 가져오기
  const product = await fetch(`http://localhost:3000/api/product/${id}`).then(
    res => res.json()
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image, ...previousImages],
    },
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}
