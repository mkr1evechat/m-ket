import Link from 'next/link';
import ThemeToggle from './ThemeToggle'; // 방금 만든 버튼 불러오기

export default function Header() {
  return (
    // 라이트모드: 흰색 배경 / 다크모드: 어두운 회색 배경
    <header className="sticky top-0 z-50 w-full py-5 px-6 flex justify-between items-center bg-white/90 dark:bg-[#121212]/95 border-b border-gray-200 dark:border-white/10 backdrop-blur-md transition-colors duration-300">
      
      {/* 로고 영역 */}
      <Link href="/" className="flex flex-col leading-none group">
        {/* 라이트: 파랑 / 다크: 빨강 */}
        <span className="text-2xl font-black text-blue-600 dark:text-red-600 tracking-tighter transition-colors">
          M-KET
        </span>
        <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] mt-1 group-hover:text-black dark:group-hover:text-white transition-colors">
          MK ENTERTAINMENT
        </span>
      </Link>

      {/* 오른쪽 영역 (메뉴 + 토글버튼) */}
      <div className="flex items-center space-x-6">
        <nav className="flex items-center space-x-6 text-sm font-bold tracking-wider uppercase hidden md:flex">
          <Link href="/about" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/artists" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            ARTISTS
          </Link>
          <Link href="/news" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            NEWS
          </Link>
          <Link href="/audition" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            AUDITION
          </Link>
        </nav>

        {/* 다크모드 토글 버튼 */}
        <ThemeToggle />
      </div>
    </header>
  );
}