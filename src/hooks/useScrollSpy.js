import { useEffect, useRef, useState } from 'react';

const sectionMap = {
  About: 'about',
  'Key benefits': 'key-benefits',
  'Real-life impact': 'real-life-impact',
  'Your questions answered': 'your-questions-answered',
};

export default function useScrollSpy() {
  const [active, setActive] = useState('About');
  const observer = useRef(null);

  useEffect(() => {
    const ids = Object.values(sectionMap);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = Object.keys(sectionMap).find(
              (k) => sectionMap[k] === entry.target.id
            );
            if (key) setActive(key);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.current.observe(el));

    return () => observer.current.disconnect();
  }, []);

  return active;
}
