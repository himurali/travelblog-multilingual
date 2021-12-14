import { format } from "date-fns";
import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "@/components/container";
import Header from "@/components/header";
import Layout from "@/components/layout";
import MoreStories from "@/components/more-stories";
import PostBody from "@/components/post-body";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import { request } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";
import LanguageBar from "@/components/language-bar";

export async function getStaticPaths({ locales }) {
    const data = await request({ query: `{ allCategories { slug } }` });

    const pathsArray = [];
    data.allCategories?.map((category) => {
        locales?.map((language) => {
            pathsArray.push({ params: { category: category.slug }, locale: language });
        });
    });

    return {
        paths: pathsArray,
        fallback: false,
    };
}

export async function getStaticProps({ params, preview = false, locale }) {
    const formattedLocale = locale.split("-")[0];

    const graphqlRequest = {
        query: `
        query PostBySlug($slug: String) {
          site: _site {
            favicon: faviconMetaTags {
              ...metaTagsFragment
            }
          }
          category(locale: ${formattedLocale}, filter: {slug: {eq: $slug}}) {
            name
            slug
            description
            _firstPublishedAt
          }
        }
  
        ${metaTagsFragment}
      `,
        preview,
        variables: {
            slug: params.slug,
        },
    };

    return {
        props: {
            subscription: preview
                ? {
                    ...graphqlRequest,
                    initialData: await request(graphqlRequest),
                    token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
                }
                : {
                    enabled: false,
                    initialData: await request(graphqlRequest),
                },
        },
    };
}

export default function Category({ subscription, preview }) {
    console.log(subscription)
    const {
        data: { site, category },
      } = useQuerySubscription(subscription);
    return (
        <>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        </>
    )
}