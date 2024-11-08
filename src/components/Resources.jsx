import Image from 'next/image'

import { Container } from '@/components/Container'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import videoPlayerImage from '@/images/resources/video-player.svg'
import wechatImage from '@/images/resources/wechat.svg'
import githubImage from '@/images/resources/github.svg'

const resources = [
  {
    title: 'GitHub Classroom',
    description:
      'Jupyter Notebook 文档通过 GitHub Classroom 分发，方便后续不定期更新。',
    image: function GithubImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={githubImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: '实操练习',
    description:
      '通过 Jupyter Notebook 实操练习，实践出真知，让你学懂、吃透人工智能。',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: '作者交流',
    description:
      '助学版可以添加作者私人微信进行交流，作者会利用业余时间答疑解惑。',
    image: function WechatImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={wechatImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
                <resource.image />
              </div>
              <div>
                <h3 className="smiley-sans text-base font-medium tracking-tight text-slate-900">
                  {resource.title}
                </h3>
                <p className="smiley-sans mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
