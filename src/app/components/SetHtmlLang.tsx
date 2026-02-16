"use client";

import {useLocale} from 'next-intl';
import {useEffect} from 'react';

export default function SetHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
