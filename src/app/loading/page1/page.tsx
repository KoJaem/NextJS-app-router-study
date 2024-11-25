import Link from 'next/link';
import React from 'react'

export default function Page1() {
  return (
    <div>
      <p>Loading Page1</p>
      <Link href={'/loading/page2'}>Page2 링크</Link>
    </div>
  );
}
