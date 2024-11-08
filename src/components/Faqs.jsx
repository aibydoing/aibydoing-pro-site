import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Jupyter Notebook 是什么？',
      answer:
        'Jupyter Notebook 是 AI 领域最流行的交互式编程环境。本课程内容的原始载体是 Jupyter Notebook 文档，你可以通过打开作者编写好的 Jupyter Notebook 文档边学边练。',
    },
    {
      question: 'Github Classroom 是什么？',
      answer:
        'Github Classroom 是 Github 提供的一个在线教学工具。本课程的 Jupyter Notebook 文档是通过 Github Classroom 分发，便于进行版本管理和后续更新。',
    },
    {
      question: '我可以和别人共享 Jupyter Notebook 文档吗？',
      answer:
        '额，我不希望你这么做，但我无法阻止你。请尊重知识产权，不进行二次分发和传播。如果你有朋友想要学习，请推荐他们购买。',
    },
  ],
  [
    {
      question: 'Jupyter Notebook 文档可以用于商业用途吗？',
      answer:
        '不可以。如果你有商业用途的需求，请联系作者购买商业授权。目前仅供购买者个人学习使用。',
    },
    {
      question: '购买后如何开始学习，我不知道如何使用 Jupyter Notebook？',
      answer:
        '我会提供一份简单的使用说明，帮助你快速上手。包括安装 Jupyter Notebook、如何打开 Jupyter Notebook 文档、如何运行代码等。',
    },
    {
      question: '自学版和导学版有什么区别？我应该购买哪个版本？',
      answer:
        '导学版可以和作者一对一进行交流，作者会尽量利用业余时间进行解答。自学版只提供 Jupyter Notebook 文档，不提供额外的服务。',
    },
  ],
  [
    {
      question: '导学版的服务时间是多久？提问次数有限制吗？',
      answer:
        '目前没有设定时间和次数限制，但请尊重我的时间。我有家庭、有工作、有爱好。我会尽量帮助你学习，但是不会像老师一样全天在线解答问题，但是你的留言我应该都会回复。对于很多基础的问题，我可能会给到你解决问题的方法，而不是直接给出答案。学习是你自己的事情，我只是一个引导者。',
    },
    {
      question: '我可以使用哪些支付方式？',
      answer:
        '中国大陆地区可以使用支付宝或微信，其他地区可以使用 Paypal 给作者付款。无法通过上述方式付款请联系 huhuhang@gmail.com',
    },
    {
      question: 'Pro 会员计划支持退款吗？',
      answer: '不支持，请考虑后再支付。',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="smiley-sans text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            常见问题
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="smiley-sans text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="smiley-sans mt-4 text-sm text-slate-700">
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
