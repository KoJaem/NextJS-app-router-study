interface PostCardProps {
  title: string;
  fetchData: () => Promise<string>;
}

export default async function PostCard({ title, fetchData }: PostCardProps) {
  const data = await fetchData();

  return (
    <div className="mb-5 p-4 border border-gray-300 rounded shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{data}</p>
    </div>
  );
}
