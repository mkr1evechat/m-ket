"use client";

import { useState } from 'react';
import Image from 'next/image';
import { HiX } from "react-icons/hi";

const members = [
  {
    id: 'haru',
    name: '남하루',
    engName: 'NAM HARU',
    role: 'LEAD VOCAL',
    birth: '2008. 03. 14',
    height: '179cm',
    mbti: 'ENFP',
    image: '/images/bp_haru.png',
    desc: '부드러운 음색과 안정적인 라이브가 특징인 보컬.',
    quote: '"너의 하루를 내 노래로 채워줄게."',
    chatUrl: 'https://www.eve-chat.com/works/9587378d-309d-4822-bbe1-77f3a81060e6'
  },
  {
    id: 'sihun',
    name: '유시훈',
    engName: 'YU SIHUN',
    role: 'LEADER / MAIN DANCER',
    birth: '2008. 11. 20',
    height: '182cm',
    mbti: 'ISTJ',
    image: '/images/bp_sihun.png',
    desc: '팀의 든든한 리더이자 퍼포먼스의 중심.',
    quote: '"우리의 청사진은 이제 시작이야."',
    chatUrl: 'https://www.eve-chat.com'
  },
  {
    id: 'yunwoo',
    name: '지윤우',
    engName: 'JI YUNWOO',
    role: 'SUB VOCAL',
    birth: '2008. 05. 05',
    height: '178cm',
    mbti: 'ESFP',
    image: '/images/bp_yunwoo.png',
    desc: '팀의 활력소이자 해피바이러스 막내.',
    quote: '"웃으면 복이 와요! 나처럼!"',
    chatUrl: 'https://www.eve-chat.com'
  },
  {
    id: 'jaeha',
    name: '서재하',
    engName: 'SEO JAEHA',
    role: 'VISUAL / SUB RAPPER',
    birth: '2007. 09. 12',
    height: '184cm',
    mbti: 'INTP',
    image: '/images/bp_jaeha.png',
    desc: '시선을 사로잡는 비주얼과 반전 매력의 소유자.',
    quote: '"잘생겼다는 말보다 재밌다는 말이 더 좋아."',
    chatUrl: 'https://www.eve-chat.com'
  },
  {
    id: 'juhyeok',
    name: '강주혁',
    engName: 'KANG JUHYEOK',
    role: 'MAIN RAPPER',
    birth: '2007. 12. 25',
    height: '183cm',
    mbti: 'ENTJ',
    image: '/images/bp_juhyeok.png',
    desc: '카리스마 넘치는 랩과 묵직한 존재감.',
    quote: '"말보다는 행동으로 보여줄게."',
    chatUrl: 'https://www.eve-chat.com'
  }
];

export default function BlueprintPage() {
  const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

  return (
    <div className="min-h-screen pb-20">
      
      <div className="relative w-full h-[60vh]">
        <Image
          src="/images/bp_hs.png" 
          alt="BLUEPRINT"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white dark:via-[#1E1F22]/20 dark:to-[#1E1F22] transition-colors duration-300"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-center md:text-left">
          <span className="text-blue-600 dark:text-red-500 font-bold tracking-widest uppercase mb-2 block animate-fadeIn">
            Boy Group
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter drop-shadow-2xl">
            BLUEPRINT
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 uppercase border-l-4 border-blue-600 dark:border-red-600 pl-4 transition-colors">
              Biography
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line transition-colors">
              <span className="font-bold text-black dark:text-white">"청춘(Blue)의 흔적(Print)을 남긴다"</span>
              <br /><br />
              MK엔터테인먼트가 선보이는 첫 번째 보이그룹 <span className="text-black dark:text-white font-semibold">블루프린트(BLUEPRINT)</span>는 미완성이지만 무한한 가능성을 가진 10대들의 꿈과 설계를 상징합니다.
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-black/20 p-8 rounded-xl border border-gray-200 dark:border-white/5 h-fit backdrop-blur-sm transition-colors">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex justify-between border-b border-gray-300 dark:border-white/10 pb-2">
                <span className="font-bold text-gray-500">DEBUT</span>
                <span className="font-semibold text-black dark:text-white">2026.01.18</span>
              </li>
              <li className="flex justify-between border-b border-gray-300 dark:border-white/10 pb-2">
                <span className="font-bold text-gray-500">FANDOM</span>
                <span className="font-semibold text-black dark:text-white">SKETCH</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 uppercase flex items-center gap-3 transition-colors">
            Members <div className="w-12 h-1 bg-blue-600 dark:bg-red-600 rounded-full transition-colors"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {members.map((member) => (
              <button 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-white dark:bg-white/5 p-6 rounded-lg text-center hover:shadow-lg dark:hover:bg-white/10 transition-all border border-gray-200 dark:border-white/5 group shadow-sm block w-full"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 group-hover:ring-2 ring-blue-500 dark:ring-red-500 transition-all">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 uppercase flex items-center gap-3 transition-colors">
            Discography <div className="w-12 h-1 bg-blue-600 dark:bg-red-600 rounded-full transition-colors"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-white/5 group-hover:border-blue-500 dark:group-hover:border-red-500 transition-all shadow-sm">
                <Image
                  src="/images/bp_album_1.png" 
                  alt="ZERO: The First Print"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-100 dark:opacity-80 dark:group-hover:opacity-100"
                />
              </div>
              <h3 className="text-gray-900 dark:text-white font-bold truncate group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors">ZERO: The First Print</h3>
              <p className="text-gray-500 text-sm">1st Mini Album (2026)</p>
            </div>
          </div>
        </div>

      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setSelectedMember(null)}
          ></div>

          <div className="relative bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-xl w-full max-w-5xl h-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20 dark:border-white/10 animate-fadeInUp">
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
            >
              <HiX className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>

            <div className="w-full md:w-5/12 h-80 md:h-full relative overflow-hidden group">
              <Image 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#1A1A1A] dark:via-transparent dark:to-transparent opacity-100"></div>
            </div>

            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center relative">
              
              <div className="absolute inset-0 opacity-5 pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-blue-600 dark:text-red-500 tracking-[0.3em] uppercase mb-2 animate-fadeIn delay-100">
                  {selectedMember.role}
                </h3>
                <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 uppercase tracking-tighter mb-8 animate-fadeIn delay-200">
                  {selectedMember.engName}
                </h1>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 relative z-10 animate-fadeIn delay-300">
                
                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5">
                   <span className="block text-xs font-bold text-gray-400 mb-1">BIRTH</span>
                   <span className="text-lg font-bold text-gray-900 dark:text-white">{selectedMember.birth}</span>
                </div>

                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5">
                   <span className="block text-xs font-bold text-gray-400 mb-1">HEIGHT</span>
                   <span className="text-lg font-bold text-gray-900 dark:text-white">{selectedMember.height}</span>
                </div>

                <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-xl border border-gray-200 dark:border-white/5">
                   <span className="block text-xs font-bold text-gray-400 mb-1">MBTI</span>
                   <span className="text-lg font-bold text-gray-900 dark:text-white">{selectedMember.mbti}</span>
                </div>

              </div>

              <div className="relative z-10 bg-blue-50 dark:bg-red-900/10 p-6 rounded-xl border-l-4 border-blue-500 dark:border-red-500 animate-fadeIn delay-500">
                <p className="text-gray-700 dark:text-gray-200 font-medium italic text-lg">
                  {selectedMember.quote}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 not-italic">
                  - {selectedMember.desc}
                </p>
              </div>

              <div className="mt-8 relative z-10">
                 <a 
                    href={selectedMember.chatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-blue-600 dark:border-red-500 bg-transparent text-blue-600 dark:text-red-500 font-bold text-sm tracking-widest hover:bg-blue-50 dark:hover:bg-red-500/10 transition-all duration-300"
                 >
                    EveChat [무검열]
                    <span className="text-lg leading-none">↗</span>
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}