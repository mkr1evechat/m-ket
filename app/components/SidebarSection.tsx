// app/components/SidebarSection.tsx
"use client";

import React, { useState } from 'react';

type SidebarSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean; // 처음에 열어둘지 말지 결정
};

export default function SidebarSection({ title, children, defaultOpen = true }: SidebarSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-8">
      {/* 헤더 부분 (클릭 가능) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center border-b border-gray-800 pb-2 mb-4 group"
      >
        <h2 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors">
          {title}
        </h2>
        {/* 화살표 아이콘 (열리면 위로, 닫히면 아래로 회전) */}
        <span className={`text-gray-500 text-xs transition-transform duration-200 ${isOpen ? '' : 'rotate-180'}`}>
          ▲
        </span>
      </button>

      {/* 내용 부분 (isOpen이 true일 때만 보임) */}
      {isOpen && (
        <div className="flex flex-col animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}