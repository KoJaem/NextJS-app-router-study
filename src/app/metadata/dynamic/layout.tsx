import { Metadata } from 'next/types';
import { ReactNode } from "react";

interface Params {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Title | layout",
  description: "metaData layout description...",
};

export default function layout({ children }: Params) {
  return (
    <div>
      <p>레이아웃!</p>
      {children}
    </div>
  );
}
