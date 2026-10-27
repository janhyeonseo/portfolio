import { navItems } from "@/data/site";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      {/* 모바일: 1줄 이름+토글, 2줄 가로 스크롤 메뉴 / sm 이상: 한 줄 */}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-6 px-5">
        <a href="#top" className="flex h-14 items-center font-bold">
          {profile.name}
        </a>
        <nav aria-label="섹션 이동" className="order-last -mx-5 w-[calc(100%+2.5rem)] overflow-x-auto px-5 pb-3 sm:order-none sm:mx-0 sm:ml-auto sm:w-auto sm:p-0">
          <ul className="flex gap-5 whitespace-nowrap text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto sm:ml-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
