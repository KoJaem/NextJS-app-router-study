import PostCard from "@/components/PostCard";
import { fetchData1, fetchData2, fetchData3 } from "@/lib/fetch";
import { Suspense } from "react";

// * SSR 강제
// * (npm run start 환경에서 테스트하기 위해 설정함)
export const dynamic = "force-dynamic";

export default function StreamingPage() {
  return (
    <div>
      <h1>Streaming Multiple Data Sections</h1>
      <Suspense fallback={<p>Loading Data 1...</p>}>
        {/* 첫 번째 데이터 섹션 */}
        <PostCard title="Section 1" fetchData={fetchData1} />
      </Suspense>
      <Suspense fallback={<p>Loading Data 2...</p>}>
        {/* 두 번째 데이터 섹션 */}
        <PostCard title="Section 2" fetchData={fetchData2} />
      </Suspense>
      <Suspense fallback={<p>Loading Data 3...</p>}>
        {/* 세 번째 데이터 섹션 */}
        <PostCard title="Section 3" fetchData={fetchData3} />
      </Suspense>
    </div>
  );
}
