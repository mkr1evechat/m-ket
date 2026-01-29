"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  // attribute="class": html 태그에 class="dark"를 붙여서 작동하게 함
  // defaultTheme="dark": 기본값은 다크모드
  // enableSystem: 시스템 설정(윈도우/맥 다크모드)을 따라갈지 여부
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}