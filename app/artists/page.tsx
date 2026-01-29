import Image from 'next/image';
import Link from 'next/link';

const allArtists = [
  { id: 1, name: 'BLUEPRINT', slug: 'BLUEPRINT', group: 'Boy Group', imageUrl: '/images/bp_banner_v2.png' },
];

export default function ArtistsPage() {
  return (
    // [수정] 배경색 삭제 (layout에서 자동 처리)
    <div className="min-h-screen pt-32 pb-20 px-4">
      
      <div className="text-center mb-16">
        {/* [수정] text-black dark:text-white */}
        <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white tracking-tighter uppercase transition-colors">
          Artists
        </h1>
        {/* [수정] bg-blue-600 dark:bg-red-600 (파랑 <-> 빨강) */}
        <div className="w-16 h-1.5 bg-blue-600 dark:bg-red-600 mx-auto mt-6 rounded-full transition-colors"></div>
      </div>

      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {allArtists.map((artist) => (
          <Link 
            key={artist.id} 
            href={`/artists/${artist.slug}`} 
            // [수정] 테두리 색상: 라이트모드(회색) / 다크모드(투명흰색)
            className="group relative block w-full aspect-[1280/200] rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-blue-600 dark:hover:border-red-600 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className="absolute inset-0">
               <Image
                src={artist.imageUrl}
                alt={artist.name}
                fill
                quality={100}
                className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* [수정] 그라데이션: 라이트모드일 땐 흰색 그라데이션 / 다크모드일 땐 검은색 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent z-10 transition-colors duration-300"></div>

            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-12">
              {/* [수정] 포인트 컬러: 파랑 <-> 빨강 */}
              <span className="text-blue-600 dark:text-red-500 font-bold tracking-widest text-[10px] md:text-sm mb-1 uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {artist.group}
              </span>
              
              {/* [수정] 텍스트: 검정 <-> 흰색 */}
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white italic tracking-tighter uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all drop-shadow-sm dark:drop-shadow-lg">
                {artist.name}
              </h2>
            </div>

            {/* [수정] 화살표 색상 */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <span className="text-black dark:text-white text-2xl md:text-4xl font-light">→</span>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}