import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function LanguageBar() {
  let router = useRouter();
  const [languageMapper, setLanguageMapper] = useState([]);
  const currentPath = useRouter().asPath;

  // let paths = [];
  // useEffect(() => {
  //   let changeLg = router.components
  //   let pathName = router.pathname
  //   let pathsSplit = pathName.replace(/\[|\]/gm, '').split('/'); // replace [] and separate
  //   let moreThenOne = pathsSplit.length > 1 ? true : false;
  //   let lastPath = pathsSplit[pathsSplit.length - 1]; // get last element

  //   let type = pathsSplit[pathsSplit.length - 1]; // get last element
  //   type = type !== '' ? type : 'blog';
  //   // console.log(type)

  //   let initialData = [changeLg]
  //     .map(c => c[router.route])[0]
  //     ?.props
  //     ?.pageProps.subscription.initialData;

  //   let currentSlugs = initialData[type]
  //     ?._allSlugLocales;
  //   console.log(currentSlugs)
  //   let firstLevelSlugs = moreThenOne
  //     ? initialData[type][pathsSplit[1]]?._allSlugLocales
  //     : false;


  //   if (type !== 'blog') {
  //     currentSlugs
  //       .map(slug => {
  //         let firstPath = '';
  //         firstPath = moreThenOne ? firstLevelSlugs.filter(f => f.locale === slug.locale)?.[0]?.value + '/' : '';
  //         paths.push({ locale: slug.locale, path: '/' + slug.locale + '/' + firstPath + slug.value })
  //         console.log(slug)
  //       })
  //   }
  //   // console.log(firstLevelSlugs.filter(f => f.locale === 'en')?.[0].value)
    
  //   // console.log(currentSlugs)
  //   setLanguageMapper(paths)
  // }, []);

  // // setLanguageMapper(paths)
  // console.log(languageMapper)
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-end mr-0 mt-0 mb-0 md:mb-0">

      {/* {
        languageMapper.length > 0 &&
        paths.map(path => {
          return (
            <Link href={currentPath} locale="en">
              <a className="underline hover:text-success duration-200 transition-colors p-1">
                {path.locale}
              </a>
            </Link>
          )
        })
      } */}

      <Link href={currentPath} locale="en">
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
      </Link>
    </section>
  );
}
