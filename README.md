# Resume

Astro 5 + Tailwind CSS v4로 만든 정적 이력서 사이트. GitHub Actions로 `main` 브랜치에 push할 때마다 GitHub Pages에 자동 배포됩니다.

🔗 **https://indolc.github.io/resume**

## 기술 스택

- [Astro 5](https://astro.build/) — 정적 사이트 생성 (기본 JS 0KB)
- [Tailwind CSS v4](https://tailwindcss.com/) — 유틸리티 기반 스타일링
- TypeScript
- GitHub Actions — CI/CD

## 내 정보로 바꾸기

`src/data/resume.ts` 한 파일만 수정하면 됩니다. 이름·경력·프로젝트·스킬·학력이 모두 이 파일에 구조화돼 있고, 컴포넌트/스타일은 건드릴 필요가 없습니다.

테마 색상이나 폰트를 바꾸려면 `src/styles/global.css`의 `@theme` 토큰을 수정하세요.

## 로컬 개발

```bash
npm install      # 의존성 설치
npm run dev      # 개발 서버 (http://localhost:4321/resume)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run check    # 타입 체크
```

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드 후 GitHub Pages에 배포합니다.

저장소 설정에서 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해야 합니다.
