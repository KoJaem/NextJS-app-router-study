"use client";
import Link from 'next/link';
import { useCountStore } from "./_store";

export default function Page() {
  const { count, decrease, increase } = useCountStore(state => state);

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1>
        Counter <span>{count}</span>
      </h1>
      <div className="flex gap-2">
        <button
          onClick={increase}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Decrease
        </button>
      </div>
      {/* 페이지 이동했을때도 상태가 유지됨! */}
      <Link href={'/counter2'}
      >counter2 page</Link>
    </main>
  );
}
