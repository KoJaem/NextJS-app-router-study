// lib/fetch.ts
export async function fetchData1(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("Post 1 loaded"), 2000)
  );
}

export async function fetchData2(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("Post 2 loaded"), 4000)
  );
}

export async function fetchData3(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("Post 3 loaded"), 6000)
  );
}
