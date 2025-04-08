import { useEffect, useState } from 'react';

export const SafeCounter = ({ end, ...props }) => {
  const [isClient, setIsClient] = useState(false);
  const [CountUp, setCountUp] = useState(null);
  useEffect(() => {
    setIsClient(true);
    import('react-countup')
      .then((mod) => setCountUp(() => mod.default))
      .catch((err) => console.error("Không thể tải CountUp:", err));
  }, []);
  if (!isClient || !CountUp) return <>{end.toLocaleString()}</>;
  return <CountUp start={0} end={end} {...props} />;
};
