"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      // [디자인 포인트]
      // w-10 h-10: 버튼 크기
      // rounded-full: 완전한 원형
      // border: 테두리 추가
      // bg-transparent: 배경 투명
      // border-gray-300 dark:border-gray-600: 테두리 색상 (라이트: 연회색 / 다크: 진회색)
      // text-gray-500 dark:text-gray-400: 아이콘 색상
      // flex ... justify-center: 아이콘 정중앙 배치
      className="w-10 h-10 flex items-center justify-center rounded-full border bg-transparent border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:border-blue-500 dark:hover:border-white transition-all duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        // 다크모드일 때: 해 아이콘 (사진과 동일한 스타일)
        <HiOutlineSun className="w-5 h-5" />
      ) : (
        // 라이트모드일 때: 달 아이콘
        <HiOutlineMoon className="w-5 h-5" />
      )}
    </button>
  );
}