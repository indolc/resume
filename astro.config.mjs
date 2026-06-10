// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 프로젝트 페이지: https://indolc.github.io/resume
export default defineConfig({
  site: 'https://indolc.github.io',
  base: '/resume',
  vite: {
    // Astro 내장 Vite와 @tailwindcss/vite의 Vite 타입 버전 차이로 인한
    // 타입 충돌 회피용 캐스팅. 런타임 동작에는 영향 없음.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
