export default function Footer() {
  return (
    // [수정 포인트]
    // 1. bg-gray-50 dark:bg-[#1E1F22]: 라이트모드는 아주 연한 회색, 다크모드는 본문과 같은 색
    // 2. border-t border-gray-200 dark:border-white/10: 위쪽 테두리도 색상에 맞춰 변경
    // 3. transition-colors: 부드럽게 색이 바뀌도록 애니메이션 추가
    <footer className="w-full py-12 px-6 mt-auto border-t bg-gray-50 border-gray-200 dark:bg-[#121212] dark:border-white/10 transition-colors duration-300">
      
      <div className="container mx-auto text-center">
        {/* 회사 이름 */}
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 tracking-widest uppercase transition-colors">
          MK Entertainment
        </h2>

        {/* 주소 및 정보 */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 transition-colors">
          
        </p>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 transition-colors">
          
        </p>

        {/* 저작권 문구 */}
        <p className="text-xs text-gray-500 dark:text-gray-600 transition-colors">
          © {new Date().getFullYear()} MK Entertainment. All Rights Reserved.
        </p>
      </div>
      
    </footer>
  );
}