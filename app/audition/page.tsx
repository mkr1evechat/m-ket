export default function AuditionPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* 1. 타이틀 섹션 */}
      <div className="text-center mb-32">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase transition-colors">
          Audition
        </h1>
        {/* 포인트 컬러: 파랑 <-> 빨강 */}
        <div className="w-16 h-1.5 bg-blue-600 dark:bg-red-600 mx-auto mt-6 rounded-full transition-colors"></div>
      </div>

      {/* 2. 빈 상태 메시지 (Empty State) */}
      <div className="text-center max-w-lg mx-auto py-10 opacity-70">
        <div className="text-6xl mb-6 grayscale opacity-50">🎤</div>
        
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 transition-colors">
          진행 중인 오디션이 없습니다.
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed transition-colors">
          현재 예정된 오디션 일정이 없습니다.<br />
          추후 공지사항을 확인해 주세요.
        </p>
      </div>

    </div>
  );
}