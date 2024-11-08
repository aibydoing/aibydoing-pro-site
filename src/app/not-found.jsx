import Link from 'next/link'

import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'

export default function NotFound() {
  return (
    <div className="relative flex flex-auto items-center">
      <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <Container className="flex flex-col items-center py-16 text-center sm:py-20 lg:py-32">
        <p className="rounded-full px-4 py-1 text-base font-medium tracking-tight text-slate-900 ring-1 ring-inset ring-slate-900">
          404
        </p>
        <h1 className="smiley-sans mt-6 text-5xl font-extrabold text-slate-900 sm:text-6xl">
          页面不存在
        </h1>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          你访问的页面不存在，可能已经被删除或者被转移。
        </p>
        <Link
          href="/"
          className="mt-6 text-base font-medium text-lime-600 hover:text-lime-800"
        >
          返回主页 <span aria-hidden="true">&rarr;</span>
        </Link>
      </Container>
    </div>
  )
}
