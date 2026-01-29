import Link from 'next/link';

// 임시 뉴스 데이터
const newsData = [
  {
    id: 1,
    category: 'EVENT',
    date: '2026.01.25',
    title: "BLUEPRINT 1st Fan Meeting [HELLO, SKETCH] 개최 안내",
    summary: "블루프린트와 팬덤 스케치가 처음 만나는 설레는 시간! 2월 6일, 꿈같은 하루에 여러분을 초대합니다.",
  },
  {
    id: 2,
    category: 'DEBUT',
    date: '2026.01.18',
    title: "BLUEPRINT 데뷔 앨범 [ZERO: The First Print] 발매",
    summary: "MK엔터테인먼트의 첫 보이그룹 BLUEPRINT가 미니 1집으로 전격 데뷔합니다. 타이틀곡 'ZERO' 뮤직비디오 공개.",
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      {/* 1. 타이틀 섹션 */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter uppercase transition-colors">
          News
        </h1>
        {/* 포인트 컬러: 파랑 <-> 빨강 */}
        <div className="w-16 h-1.5 bg-blue-600 dark:bg-red-600 mx-auto mt-6 rounded-full transition-colors"></div>
      </div>

      {/* 2. 뉴스 리스트 */}
      <div className="max-w-4xl mx-auto grid gap-6">
        {newsData.map((item) => (
          <Link 
            key={item.id} 
            href="#" // 나중에 상세 페이지가 생기면 연결
            className="group block bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-xl hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              {/* 카테고리 뱃지 */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-blue-600 dark:bg-white/10 dark:text-red-500 mb-2 md:mb-0 transition-colors">
                {item.category}
              </span>
              {/* 날짜 */}
              <span className="text-sm text-gray-400 font-medium">
                {item.date}
              </span>
            </div>

            {/* 제목 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-red-500 transition-colors mb-3">
              {item.title}
            </h3>

            {/* 요약 내용 */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.summary}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
}