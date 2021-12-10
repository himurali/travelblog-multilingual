import Link from "next/link";

export default function Avatar({ name, picture, slug }) {
  return (
    <div className="flex items-center">
      <Link as={`/author/${slug}`} href="/author/[slug]">
        <img
          src={picture.url}
          className="w-12 h-12 rounded-full mr-4 hover:cursor-pointer"
          alt={name}
        />
      </Link>
      <div className="text-xl font-bold">
        <Link as={`/author/${slug}`} href="/author/[slug]">
          <a className="hover:underline">{name}</a>
        </Link>
      </div>
    </div>
  );
}
