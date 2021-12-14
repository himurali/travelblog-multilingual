import Link from "next/link";

export default function Header() {
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
          <Link href="https://nextjs.org/">
            <a className="underline hover:text-success duration-200 transition-colors">
              NextJS
            </a>
          </Link>
        </h4>
      </section>
    </>
  );
}
