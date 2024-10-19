import Image from "next/image";
import { useState, useEffect } from "react";

export function HeartSvg({ size = 50, color = '#d7443e' }: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={size} height={size} x="0" y="0" viewBox="0 0 391.837 391.837">
      {/* <defs>
        <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="pink" />
          <stop offset="100%" stopColor="#d7443e" />
        </linearGradient>
      </defs> */}
      <g>
        <path d="M285.257 35.528c58.743.286 106.294 47.836 106.58 106.58 0 107.624-195.918 214.204-195.918 214.204S0 248.165 0 142.108c0-58.862 47.717-106.58 106.58-106.58a105.534 105.534 0 0 1 89.339 48.065 106.578 106.578 0 0 1 89.338-48.065z"
          fill={color}
          // fill="url(#grad1)"
          data-original={color} opacity="1">
        </path>
      </g>
    </svg>
  );
}

export function HeartPNG() {
  return (<><Image src="/heart-icon.png" alt="Heart" width={50} height={50}/></>);
}

export function Heart({ heart, directionY = 'rise' }: any) {
  // State để kiểm tra trạng thái hiển thị của trái tim
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sau 5 giây, cập nhật state để ẩn trái tim
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, heart.animationDuration * 1000);  // 5000ms = 5s

    // Cleanup để xóa timeout khi component unmount
    return () => clearTimeout(timer);
  }, []);

  // Nếu isVisible là false, không render trái tim nữa
  if (!isVisible) return null;

  return (
    <>
      <div className={`absolute z-10 ` + (directionY == 'rise' ? 'heart-rise' : 'heart-fall')} style={{ opacity: heart.opacity, bottom: heart.bottom + '%', left: heart.left + '%', animationDuration: `${heart.animationDuration}s`, transition: `width 2s ease-out, height 2s ease-out` }}>
        <HeartPNG></HeartPNG>
      </div>
    </>
  );
}
