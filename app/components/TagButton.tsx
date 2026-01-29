import React from 'react';

type TagButtonProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function TagButton({ text, isActive, onClick }: TagButtonProps) {
  // 기본 스타일: 
  // w-full: 꽉 차게
  // py-3: 세로 높이를 넉넉하게 (사진처럼 통통하게)
  // rounded-lg: 모서리를 둥글게 (핵심!)
  // font-bold: 글씨를 두껍게
  const baseStyle = "w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-200 mb-1";
  
  // 활성화(Active): 쨍한 빨간색 배경 + 흰색 글씨
  const activeStyle = "bg-red-600 text-white shadow-md";
  
  // 비활성화(Inactive): 
  // 평소엔 투명 배경 + 회색 글씨
  // hover 시: 덜 어두운 회색 배경(bg-gray-800) + 흰색 글씨 (3번 사진 효과)
  const inactiveStyle = "bg-transparent text-gray-400 hover:bg-gray-800 hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
    >
      {text}
    </button>
  );
}