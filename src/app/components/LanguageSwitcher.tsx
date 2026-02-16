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
      className="cursor-pointer text-lg font-bold text-gray-600 dark:text-gray-300 hover:text-purple-950 dark:hover:text-purple-300 ml-8 border border-gray-400 dark:border-gray-500 rounded-md px-3 py-1"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
