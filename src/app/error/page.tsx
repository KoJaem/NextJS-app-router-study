async function fetchData() {
  // 데이터 페칭 시 의도적으로 에러를 발생시키는 코드
  const random = Math.random(); // * error.tsx 의 reset() 함수를 사용하더라도 fetchData 의 환경 자체를 초기화하지 않기때문에 계속해서 동일한 오류가 발생함.
  if (random > 0.5) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data. Please try again later.");
    }
    return response.json();
  } else {
    return {};
  }
}

export default async function Page() {
  const data = await fetchData();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the Main Page</h1>
      <p className="mt-4 text-lg">Fetched Data:</p>
      <pre className="bg-gray-100 p-4 mt-2 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
