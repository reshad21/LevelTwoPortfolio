"use client";

import { useGetAllPost } from "@/hooks/getAllPost.hook";
import { IPost } from "@/types";
import { convert } from "html-to-text";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Blog() {
  const { mutate: getPosts, isSuccess, error, data } = useGetAllPost();

  // Fetch posts when the component mounts
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  // Function to truncate content to a specified word limit
  const truncateContent = (content: string, wordLimit: number) => {
    const plainText = convert(content, { wordwrap: false });
    const words = plainText.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : plainText;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-200 py-16 md:py-24 px-4 md:px-8 lg:px-12 rounded-3xl shadow-2xl mb-8 border border-slate-800/50 group">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 md:w-[400px] md:h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen transition-opacity duration-700 opacity-50 group-hover:opacity-70"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-lg md:text-2xl font-medium text-indigo-400 tracking-wide uppercase">
            Articles & Insights
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Latest Blogs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {error ? (
            <div className="col-span-full py-12 flex justify-center items-center bg-red-500/10 rounded-2xl border border-red-500/20">
              <p className="text-red-400 font-medium">
                Error fetching posts: {error.message}
              </p>
            </div>
          ) : isSuccess && data ? (
            data.data.map((post: IPost) => (
              <div
                key={post._id}
                className="group/card flex flex-col bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/60 shadow-xl relative overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:bg-slate-900/80 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] hover:-translate-y-2 ring-1 ring-white/5"
              >
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-900">
                  {post.postImage ? (
                    <Image
                      src={post.postImage}
                      alt={post.title}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover/card:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                      <span className="text-slate-500 text-2xl">📝</span>
                    </div>
                  )}
                  {/* Subtle gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow z-10 -mt-8">
                  <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-4">
                    <span className="bg-slate-950/80 px-3 py-1 rounded-md shadow-sm border border-slate-800/80">
                      By {post.author.name}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover/card:text-indigo-300 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {truncateContent(post?.content, 25)}
                  </p>

                  <Link
                    href={`/post/${post._id}`}
                    className="mt-auto block w-full text-center px-4 py-3.5 bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white text-sm font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ring-1 ring-slate-700 hover:ring-indigo-500 shadow-md transform active:scale-95"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 flex flex-col justify-center items-center rounded-3xl border border-slate-800/50 bg-slate-900/20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mb-4"></div>
              <p className="text-indigo-400 font-medium animate-pulse tracking-wide">
                Loading posts...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
