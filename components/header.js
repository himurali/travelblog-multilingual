import Link from "next/link";
import { useRouter } from "next/router";
import i18n from "../lib/i18n";

export default function Header() {
  const { locale } = useRouter();
  const formattedLocale = locale.split("-")[0];
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          <Link href="/">
            <a className="hover:underline">DatoPress</a>
          </Link>
          .
        </h2>
        <h4 className="text-center md:text-left text-lg  md:pl-8">
          <Link href="/">
            <a className="hover:underline">{i18n.menu.home[formattedLocale]}</a>
          </Link>{" "}
          |{" "}
          <Link href={i18n.menu.about.slug[formattedLocale]}>
            <a className="hover:underline">
              {i18n.menu.about.label[formattedLocale]}
            </a>
          </Link>{" "}
          |{" "}
          <Link href={i18n.menu.contact.slug[formattedLocale]}>
            <a className="hover:underline">
              {i18n.menu.contact.label[formattedLocale]}
            </a>
          </Link>
        </h4>
      </section>
    </>
  );
}
