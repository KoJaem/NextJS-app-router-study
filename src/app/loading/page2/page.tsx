import Link from "next/link";
import React from "react";

export default function Page2() {
  return (
    <div>
      <p>Loading Page2</p>
      <Link href={"/loading/page1"}>Page1 링크</Link>
    </div>
  );
}
