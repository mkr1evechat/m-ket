import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* 1. 타이틀 섹션 */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase transition-colors">
          About Us
        </h1>
        {/* 포인트 컬러: 파랑 <-> 빨강 */}
        <div className="w-16 h-1.5 bg-blue-600 dark:bg-red-600 mx-auto mt-6 rounded-full transition-colors"></div>
      </div>

      {/* 2. 메인 콘텐츠 (슬로건 & 소개) */}
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* 슬로건 */}
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight transition-colors">
            "아티스트는 상품이 아닌,<br />
            <span className="text-blue-600 dark:text-red-600 transition-colors">고유한 우주</span>입니다."
          </h2>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
            MK 엔터테인먼트(M-KET)는 트렌드를 쫓기보다 스스로 트렌드를 만드는<br className="hidden md:block" />
            감각적인 크리에이티브 그룹입니다. 우리는 아티스트의 자율성을 존중하며,<br className="hidden md:block" />
            그들의 이야기가 세상에 울림을 줄 수 있도록 최상의 환경을 지원합니다.
          </p>
        </div>

        {/* 3. 회사 정보 요약 (박스 형태) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 비전 카드 */}
          <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-blue-600 dark:text-red-600 mb-4 transition-colors">OUR VISION</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Leading the Culture, Creating the Future.
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              단순한 엔터테인먼트를 넘어, 전 세계 팬들과 소통하며 새로운 문화를 만들어갑니다.
            </p>
          </div>

          {/* 연락처 카드 */}
          <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-blue-600 dark:text-red-600 mb-4 transition-colors">CONTACT</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li>
                <span className="font-bold mr-2">Address:</span> 
                서울 성수동 MK타워
              </li>
              <li>
                <span className="font-bold mr-2">Email:</span> 
                contact@m-ket.com
              </li>
              <li>
                <span className="font-bold mr-2">Tel:</span> 
                02-1234-5678
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}