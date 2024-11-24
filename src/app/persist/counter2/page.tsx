"use client";
import { useCountStore } from "@/app/persist/counter/_store";
import usePersistStore from "@/app/hooks/usePersistStore";
import Link from "next/link";
export default function Page() {
  // remark below if you don't want to use persist store
  // const { count, decrease, increase } = useCountStore((state) => state);

  const store = usePersistStore(useCountStore, state => state);

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1>
        Counter <span>{store?.count}</span>
      </h1>
      <div className="flex gap-2">
        <button
          onClick={store?.increase}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Increase
        </button>
        <button
          onClick={store?.decrease}
          className="border border-white p-1.5 font-medium rounded-md"
        >
          Decrease
        </button>
      </div>
      <Link href={"/persist/counter"}>counter page</Link>
    </main>
  );
}
