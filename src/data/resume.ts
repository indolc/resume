// ─────────────────────────────────────────────────────────────
// 이력서 콘텐츠. 본인 정보로 교체할 때는 이 파일만 수정하면 됩니다.
// 컴포넌트/스타일은 건드릴 필요 없습니다.
// ─────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack?: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  href?: string;
  stack: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface Resume {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  socials: SocialLink[];
  about: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
}

export const resume: Resume = {
  name: '박현우',
  title: 'Frontend Engineer',
  tagline: '사용자 경험과 성능을 함께 고민하는 프론트엔드 엔지니어입니다.',
  location: 'Seoul, South Korea',
  email: 'hello@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/indolc' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/example' },
    { label: 'Blog', href: 'https://example.com' },
  ],
  about:
    '5년 차 프론트엔드 엔지니어로, 복잡한 요구사항을 단순하고 견고한 인터페이스로 풀어내는 일을 좋아합니다. ' +
    '디자인 시스템 구축과 렌더링 성능 최적화, 그리고 개발 생산성을 높이는 도구·CI 파이프라인에 관심이 많습니다. ' +
    '제품 팀과 긴밀하게 협업하며 측정 가능한 임팩트를 만드는 것을 지향합니다.',
  experience: [
    {
      company: 'Acme Corp',
      role: 'Senior Frontend Engineer',
      period: '2023.03 — 현재',
      location: 'Seoul',
      summary: '핵심 대시보드 제품의 프론트엔드 아키텍처와 디자인 시스템을 주도.',
      highlights: [
        '디자인 시스템(컴포넌트 80+) 구축으로 신규 화면 개발 리드타임 40% 단축',
        '코드 스플리팅·이미지 최적화로 LCP 4.1s → 1.6s 개선',
        '주니어 3명 멘토링 및 프론트엔드 코드 리뷰 문화 정착',
      ],
      stack: ['React', 'TypeScript', 'Next.js', 'TanStack Query'],
    },
    {
      company: 'Startup Inc',
      role: 'Frontend Engineer',
      period: '2021.01 — 2023.02',
      location: 'Seoul',
      summary: '초기 멤버로 합류하여 0→1 제품의 웹 클라이언트 전반을 담당.',
      highlights: [
        'MVP 웹앱을 6주 만에 출시하고 첫 1만 사용자 확보에 기여',
        'E2E 테스트 도입으로 배포 후 회귀 버그 70% 감소',
        'GitHub Actions 기반 CI/CD 파이프라인 설계 및 도입',
      ],
      stack: ['React', 'Vite', 'Tailwind CSS', 'Playwright'],
    },
  ],
  projects: [
    {
      name: 'Resume Site',
      description:
        'Astro와 Tailwind로 만든 정적 이력서 사이트. GitHub Actions로 자동 배포되며 Lighthouse 100점을 목표로 했습니다.',
      href: 'https://indolc.github.io/resume',
      stack: ['Astro', 'Tailwind CSS', 'GitHub Actions'],
    },
    {
      name: 'Realtime Dashboard',
      description:
        'WebSocket 기반 실시간 데이터 시각화 대시보드. 가상 스크롤과 메모이제이션으로 대량 데이터를 부드럽게 렌더링.',
      stack: ['React', 'D3', 'WebSocket'],
    },
    {
      name: 'Component Library',
      description:
        '접근성을 고려한 오픈소스 헤드리스 UI 컴포넌트 모음. Storybook 문서화와 시각 회귀 테스트 포함.',
      stack: ['TypeScript', 'Radix UI', 'Storybook'],
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'Astro', 'Vue'],
    },
    {
      category: 'Styling',
      items: ['Tailwind CSS', 'CSS Modules', 'Emotion'],
    },
    {
      category: 'Tooling',
      items: ['Vite', 'Vitest', 'Playwright', 'GitHub Actions', 'Storybook'],
    },
  ],
  education: [
    {
      school: 'Example University',
      degree: '컴퓨터공학 학사',
      period: '2014 — 2020',
    },
  ],
};
