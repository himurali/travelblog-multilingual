import Avatar from "../components/avatar";
import Date from "../components/date";
import Category from "../components/category";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  _firstPublishedAt,
  excerpt,
  author,
  slug,
  category,
  date,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <Category
        name={category.name}
        description={category.description}
        // showDescription={true}
        slug={category.slug}
      />
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} slug={author.slug} />
    </div>
  );
}
