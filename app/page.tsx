import Link from 'next/link';

export default function HomePage() {
  return (
    // min-h-[80vh]를 주어 화면 중앙에 오도록 설정
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      
      {/* 
         1. 메인 타이틀
         - text-gray-900: 라이트모드에선 진한 검정
         - dark:text-white: 다크모드에선 흰색
      */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white uppercase drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-300">
        MK ENTERTAINMENT
      </h1>
      
      {/* 
         2. 서브 텍스트
         - text-gray-600: 라이트모드에선 회색
         - dark:text-gray-400: 다크모드에선 밝은 회색
      */}
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-light transition-colors duration-300">
        IDK
      </p>

      {/* 
         3. 버튼
         - bg-blue-600: 라이트모드 파란색
         - dark:bg-red-600: 다크모드 빨간색
         - hover 효과도 각각 파랑/빨강 계열로 적용
      */}
      <Link 
        href="/artists" 
        className="mt-10 px-8 py-3 font-bold rounded-full text-white transition-all shadow-lg 
        bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30 
        dark:bg-red-600 dark:hover:bg-red-700 dark:hover:shadow-red-900/50"
      >
        View Artists
      </Link>
    </div>
  );
}