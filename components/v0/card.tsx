"use client"

import { Plus, Play, Eye } from "lucide-react"
import MediaDisplay from "./media-display"
import { Post } from "@/types/work"
import { getBackgroundClassName, getBackgroundStyle } from "@/lib/color-utils"

interface CardProps {
  post: Post
  onClick: () => void
  isRelated?: boolean
}

export default function Card({ post, onClick, isRelated = false }: CardProps) {
  const getHeroMedia = () => {
    if (post.heroVideo) {
      return { type: "video" as const, url: post.heroVideo }
    }
    return { type: "image" as const, url: post.heroImage }
  }

  const heroMedia = getHeroMedia()

  // Generate seed (you can use post.id, post.slug, or post.title — whatever is stable and unique)
  const seed = post.id + post.title;

  // Get validated class and style based on backgroundColor or fallback seed
  const backgroundClassName = getBackgroundClassName(post.backgroundColor, seed);
  const backgroundStyle = getBackgroundStyle(post.backgroundColor, seed);

  if (post.cardType === "newsletter") {
    return (
      <div
        className={`mp-card relative cursor-pointer rounded-2xl flex-shrink-0 sm:w-[325px] w-[300px] h-[475px] text-black dark:text-white ${backgroundClassName} border border-gray-200 dark:border-gray-700`}
        style={backgroundStyle}
      >
        <div className="h-full flex flex-col justify-between p-3.5">
          <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-ellipsis overflow-hidden line-clamp-4 max-h-[140px] pr-1">
            {post.title}
          </h2>
          <form className="space-y-4">
            <div className="relative flex items-center">
              <input
                className="w-full text-lg placeholder:text-black dark:placeholder:text-white bg-white dark:bg-gray-900 pr-14 pb-3.5 pt-4 pl-3.5 border border-solid border-black dark:border-white rounded-full"
                placeholder="YOUR EMAIL"
                name="email"
                type="email"
              />
              <button
                className="absolute right-3.5 flex items-center justify-center w-9 h-9"
                type="submit"
                title="Submit"
              >
                <div className="flex items-center justify-center w-9 h-9">
                  <Play className="w-6 h-6" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (post.cardType === "social") {
    return (
      <div
        className={`mp-card relative rounded-2xl cursor-pointer flex-shrink-0 sm:w-[325px] w-[300px] h-[475px] text-black ${isRelated ? "bg-transparent border border-black" : backgroundClassName
          } cursor-pointer`}
        style={isRelated ? {} : backgroundStyle}
        onClick={onClick}
      >
        <div className="flex p-3.5 h-full flex-col gap-y-3.5">
          <div className="relative rounded-xl overflow-hidden z-0 w-full h-[397px]">
            <MediaDisplay
              src={heroMedia.url}
              alt={post.title}
              type={heroMedia.type}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, 325px"
              autoPlay={heroMedia.type === "video"}
              muted={true}
              loop={true}
              onClick={onClick}
            />
          </div>
          <div className="flex flex-col justify-between overflow-hidden">
            <footer className="flex justify-between">
              <button className="text-lg uppercase text-ellipsis overflow-hidden self-center line-clamp-1">
                {post.socialHandle}
              </button>
              <button className="flex items-center justify-center w-9 h-9" type="button">
                <div className="flex items-center justify-center w-9 h-9 border border-current border-solid rounded-full">
                  <Play className="w-5 h-5" />
                </div>
              </button>
            </footer>
          </div>
        </div>
      </div>
    )
  }

  // Large cards - horizontal layout on desktop (xl), vertical on tablet/mobile
  if (post.size === "large" && !isRelated) {
    return (
      <div
        className={`mp-card relative cursor-pointer rounded-2xl flex-shrink-0 sm:w-[325px] w-[300px] xl:max-w-[670px] xl:w-full h-[475px] text-black ${backgroundClassName} cursor-pointer`}
        style={backgroundStyle}
        onClick={onClick}
      >
        {/* Desktop layout - horizontal */}
        <div className="hidden xl:flex p-3.5 h-full gap-x-3.5">
          {(post.heroImage || post.heroVideo) && (
            <div className="relative rounded-xl overflow-hidden z-0 h-full w-[308px]">
              <MediaDisplay
                src={heroMedia.url}
                alt={post.title}
                type={heroMedia.type}
                className="w-full h-full"
                sizes="308px"
                autoPlay={heroMedia.type === "video"}
                muted={true}
                loop={true}
                onClick={onClick}
              />
            </div>
          )}
          <div className="flex-1 flex flex-col justify-between">
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-ellipsis overflow-hidden line-clamp-4 max-h-[140px]">
              {post.title}
            </h2>
            <footer className="flex justify-between">
              <div className="flex gap-1 flex-wrap justify-start w-full">
                {post.tags.map((tag, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${backgroundClassName} text-black border-black border border-solid rounded-full px-3 h-9 transition-colors flex justify-center items-center whitespace-nowrap hover:rounded-lg duration-300`}
                    style={backgroundStyle}
                  >
                    <p className="text-xs font-medium uppercase line-clamp-1">{tag}</p>
                  </button>
                ))}
              </div>
              <button className="flex items-center justify-center w-9 h-9" type="button">
                <div className="flex items-center justify-center w-9 h-9 border border-current border-solid rounded-full">
                  <Eye className="w-6 h-6" />
                </div>
              </button>
            </footer>
          </div>
        </div>

        {/* Tablet/Mobile layout - vertical */}
        <div className="flex xl:hidden h-full p-3.5 flex-col-reverse gap-y-3.5">
          <footer className="flex justify-between">
            <div className="flex gap-1 flex-wrap justify-start w-full">
              {post.tags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className={`${backgroundClassName} text-black border-black border border-solid rounded-full px-3 h-9 transition-colors flex justify-center items-center whitespace-nowrap hover:rounded-lg duration-300`}
                  style={backgroundStyle}
                >
                  <p className="text-xs font-medium uppercase line-clamp-1">{tag}</p>
                </button>
              ))}
            </div>
            <button className="flex items-center justify-center w-9 h-9" type="button">
              <div className="flex items-center justify-center w-9 h-9 border border-current border-solid rounded-full">
                <Eye className="w-6 h-6" />
              </div>
            </button>
          </footer>

          {(post.heroImage || post.heroVideo) && (
            <div className="relative overflow-hidden rounded-xl z-0 h-[210px] w-full">
              <MediaDisplay
                src={heroMedia.url}
                alt={post.title}
                type={heroMedia.type}
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, 325px"
                autoPlay={heroMedia.type === "video"}
                muted={true}
                loop={true}
                onClick={onClick}
              />
            </div>
          )}

          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-ellipsis overflow-hidden line-clamp-3 max-h-[140px]">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-lg uppercase text-ellipsis overflow-hidden mt-2 line-clamp-2">{post.excerpt}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Regular post card with different layout for related posts
  if (isRelated) {
    return (
      <div
        className={`mp-card relative cursor-pointer rounded-2xl flex-shrink-0 sm:w-[325px] w-[300px] h-[475px] text-black bg-transparent border border-black cursor-pointer`}
        onClick={onClick}
      >
        <div className="flex h-full p-3.5 flex-col-reverse gap-y-3.5">
          <footer className="flex justify-between">
            <div className="flex gap-1 flex-wrap justify-start w-full">
              {post.tags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  className="bg-transparent text-black border-black border border-solid rounded-full px-3 h-9 transition-colors flex justify-center items-center whitespace-nowrap hover:rounded-lg duration-300"
                >
                  <p className="text-xs font-medium uppercase line-clamp-1">{tag}</p>
                </button>
              ))}
            </div>
            <button className="flex items-center justify-center w-9 h-9" type="button">
              <div className="flex items-center justify-center w-9 h-9 border border-current border-solid rounded-full">
                <Eye className="w-6 h-6" />
              </div>
            </button>
          </footer>

          {(post.heroImage || post.heroVideo) && (
            <div className="relative rounded-xl overflow-hidden z-0 h-[210px] w-full">
              <MediaDisplay
                src={heroMedia.url}
                alt={post.title}
                type={heroMedia.type}
                className="w-full h-full"
                sizes="(max-width: 768px) 100vw, 325px"
                autoPlay={heroMedia.type === "video"}
                muted={true}
                loop={true}
                onClick={onClick}
              />
            </div>
          )}

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-ellipsis overflow-hidden line-clamp-4 max-h-[140px]">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-lg uppercase text-ellipsis overflow-hidden mt-2 line-clamp-2">{post.excerpt}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Small cards - vertical layout (flex-col-reverse)
  return (
    <div
      className={`mp-card relative cursor-pointer rounded-2xl flex-shrink-0 sm:w-[325px] w-[300px] h-[475px] text-black ${backgroundClassName} cursor-pointer`}
      style={backgroundStyle}
      onClick={onClick}
    >
      <div className="flex h-full p-3.5 flex-col-reverse gap-y-3.5">
        <footer className="flex justify-between">
          <div className="flex gap-1 flex-wrap justify-start w-full">
            {post.tags.map((tag, index) => (
              <button
                key={index}
                type="button"
                className={`${backgroundClassName} text-black border-black border border-solid rounded-full px-3 h-9 transition-colors flex justify-center items-center whitespace-nowrap hover:rounded-lg duration-300`}
                style={backgroundStyle}
              >
                <p className="text-xs font-medium uppercase line-clamp-1">{tag}</p>
              </button>
            ))}
          </div>
          <button className="flex items-center justify-center w-9 h-9" type="button">
            <div className="flex items-center justify-center w-9 h-9 border border-current border-solid rounded-full">
              <Eye className="w-6 h-6" />
            </div>
          </button>
        </footer>

        {(post.heroImage || post.heroVideo) && (
          <div className="relative overflow-hidden rounded-xl z-0 h-[210px] w-full">
            <MediaDisplay
              src={heroMedia.url}
              alt={post.title}
              type={heroMedia.type}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, 325px"
              autoPlay={heroMedia.type === "video"}
              muted={true}
              loop={true}
              onClick={onClick}
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-ellipsis overflow-hidden line-clamp-3 max-h-[140px]">
              {post.title}
            </h2>
            {post.excerpt && (
              <p className="text-lg uppercase text-ellipsis overflow-hidden mt-2 line-clamp-2">{post.excerpt}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
