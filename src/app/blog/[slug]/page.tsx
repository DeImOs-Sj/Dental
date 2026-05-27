import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS, getBlogPost } from "@/lib/data";

const SITE_URL = "https://www.vighnahartadentalclinic.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDesc,
      publishedTime: post.date,
      authors: ["Dr. Saurabh Jadhav"],
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDesc,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Dr. Saurabh Jadhav",
      worksFor: { "@type": "Dentist", name: "Vighnaharta Dental Clinic" },
    },
    publisher: {
      "@type": "Organization",
      name: "Vighnaharta Dental Clinic",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/Vighnaharta Dental Logo - B.svg` },
    },
    url: `${SITE_URL}/blog/${slug}`,
    image: `${SITE_URL}/og-image.jpg`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <main className="pt-16">
        <div className="bg-[#F4F6F8] border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0F2D6B]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0F2D6B]">Blog</Link>
            <span>/</span>
            <span className="text-[#111827] font-medium">{post.title}</span>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#0F2D6B]/10 text-[#0F2D6B] text-xs font-semibold px-3 py-1 rounded-full">{post.tag}</span>
            <span className="text-gray-400 text-sm">{post.readTime} read</span>
            <span className="text-gray-300">·</span>
            <time className="text-gray-400 text-sm" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#111827] mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-[#0077B6] text-sm font-medium mb-10">
            By Dr. Saurabh Jadhav · Vighnaharta Dental Clinic, Wagholi
          </p>

          <div className="bg-[#0F2D6B]/5 border border-[#0F2D6B]/20 rounded-2xl p-6 mb-10">
            <p className="text-[#111827] font-semibold mb-1">This article is coming soon.</p>
            <p className="text-gray-500 text-sm">
              We are writing detailed, evidence-based content for this topic. In the meantime, call us for personalised advice.
            </p>
            <a
              href="tel:+918007978328"
              className="inline-flex mt-4 items-center gap-2 bg-[#0F2D6B] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#0a2050] transition-colors"
            >
              Call +91 80079 78328
            </a>
          </div>

          <Link href="/blog" className="text-[#0077B6] text-sm hover:underline">
            ← Back to all articles
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
