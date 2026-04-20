"use client";

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <button
      onClick={switchLocale}
      className="cursor-pointer text-sm font-mono font-bold text-gray-600 dark:text-gray-300 hover:text-neon-cyan border border-gray-400 dark:border-white/10 dark:hover:border-neon-cyan rounded-md px-3 py-1.5 transition-all duration-300 dark:bg-tech-slate/50 flex items-center gap-2"
    >
      <span className="text-neon-green dark:text-neon-green opacity-70">{"<"}</span> 
      {locale === 'en' ? 'ES' : 'EN'} 
      <span className="text-neon-green dark:text-neon-green opacity-70">{">"}</span>
    </button>
  );
}
