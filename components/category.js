import Link from "next/link";

export default function Category({ name, description, showDescription, slug }) {
  return (
    <div className="flex flex-col mb-4">
      <div className="text-sm  bg-teal-200 inline-block px-4 py-1 rounded-full max-w-fit">
        <Link as={`/category/${slug}`} href="/category/[slug]">
          <a className="hover:underline">{name}</a>
        </Link>
      </div>
      {showDescription && (
        <div className="text-md font-sans">{description}</div>
      )}
    </div>
  );
}
