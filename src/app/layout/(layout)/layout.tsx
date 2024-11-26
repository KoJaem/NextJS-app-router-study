// layout 폴더에 넣으면 page1/page.tsx 에도 레이아웃이 적용됨
// layout/(layout) 폴더에 넣으면 page1/page.tsx 는 레이아웃이 적용되지 않음
import { ReactNode } from "react";

interface Params {
  children: ReactNode;
}

export default function layout({ children }: Params) {
  return (
    <div>
      <p>~layout~</p>
      {children}
    </div>
  );
}
