import { useRouter } from "next/router";
import i18n from "../lib/i18n";
import Link from "next/link";

export default function Intro() {
  const { locale } = useRouter();
  const formattedLocale = locale.split("-")[0];
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        DatoPress.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
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
  );
}
