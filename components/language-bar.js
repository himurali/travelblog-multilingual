import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LanguageBar() {
  let router = useRouter();
  const [languageMapper, setLanguageMapper] = useState([]);
  const currentPath = useRouter().asPath;

  const languagesTranslate = {
    pt: 'Português',
    es: 'Español',
    en: 'English',
    it: 'Italiano'
  }

  let paths = [];
  useEffect(() => {
    let changeLg = router.components
    let pathName = router.pathname
    let pathsSplit = pathName.replace(/\[|\]/gm, '').split('/'); // replace [] and separate
    let moreThenOne = pathsSplit.length > 2 ? true : false;

    let type = pathsSplit[pathsSplit.length - 1]; // get last element
    type = type !== '' ? type : 'blog';

    let initialData = [changeLg]
      .map(c => c[router.route])[0]
      ?.props
      ?.pageProps.subscription.initialData;

    let currentSlugs = initialData[type]
      ?._allSlugLocales;
      
    let firstLevelSlugs = moreThenOne
      ? initialData[type][pathsSplit[1]]?._allSlugLocales
      : false;


    if (type !== 'blog') {
      currentSlugs
        .map(slug => {
          let firstPath = '';
          firstPath = moreThenOne ? firstLevelSlugs.filter(f => f.locale === slug.locale)?.[0]?.value + '/' : '';
          paths.push({ locale: slug.locale, path: '/' + slug.locale + '/' + firstPath + slug.value })
        })
    }
    setLanguageMapper(paths)
  }, []);

  // setLanguageMapper(paths)
  

  let languagesHtml = () => {
    if (languageMapper.length > 0) {
      return languageMapper.map(path => {
        return (
          <Link href={path.path} locale={path.locale} key={path.locale}>
            <a className="underline hover:text-success duration-200 transition-colors p-1">
              {languagesTranslate[path.locale]}
            </a>
          </Link>
        )
      })
    } else {
      return router.locales.map(locale => {
        return (
          <Link href={`/${locale}`} locale={locale} key={locale}>
            <a className="underline hover:text-success duration-200 transition-colors p-1">
              {languagesTranslate[locale]}
            </a>
          </Link>
        )
      })
    }

  }
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-end mr-0 mt-0 mb-0 md:mb-0">

      {
        languagesHtml()
      }

      {/* <Link href={currentPath} locale="en">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          English
        </a>
      </Link>
      <Link href={currentPath} locale="it">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          Italian
        </a>
      </Link>
      <Link href={currentPath} locale="pt">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          Portuguese
        </a>
      </Link>
      <Link href={currentPath} locale="es">
        <a className="underline hover:text-success duration-200 transition-colors p-1">
          Spanish
        </a>
      </Link> */}
    </section>
  );
}
