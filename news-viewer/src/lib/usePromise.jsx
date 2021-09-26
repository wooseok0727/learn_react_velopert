import { useState, useEffect } from 'react';

// 컴포넌트에서 API 호출처럼 Promise를 사용해야하는 경우
// 더욱 간결하게 코드를 작성할 수 있도록 해주는
// usePromise 커스텀 Hook 만들기

export default function usePromise(promiseCreator, deps) {
  // 대기 중/완료/실패에에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
