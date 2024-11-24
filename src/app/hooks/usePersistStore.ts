import { useEffect, useState } from "react";

// hydration error 를 막기위한 custom hook
// 업데이트를 하는 부분이나, persist 를 사용하지 않는 코드는 기존방법대로 사용하고,
// persist 를 사용하는 상태값을 가져오는 부분에서만 usePersistStore 를 사용하면 됨!
const usePersistStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default usePersistStore;
