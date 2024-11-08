import { Container } from '@/components/Container'
import {
  Expandable,
  ExpandableButton,
  ExpandableItems,
} from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  '监督学习：回归': {
    机器学习综述及示例: 1,
    线性回归实现与应用: 2,
    北京市住房价格预测: 3,
    多项式回归实现与应用: 4,
    比特币价格预测及绘图: 5,
    '岭回归和 LASSO 回归实现': 6,
    使用矩阵计算岭回归系数: 7,
    回归模型评价与检验: 8,
    回归方法综合应用练习: 9,
  },
  '监督学习：分类': {
    逻辑回归实现与应用: 10,
    梯度下降法实现与应用: 11,
    'K 近邻算法实现与应用': 12,
    'K 近邻回归算法实现与应用': 13,
    朴素贝叶斯实现及应用: 14,
    高斯分布函数实现及绘图: 15,
    分类模型评价方法: 16,
    支持向量机实现与应用: 17,
    支持向量机实现人像分类: 18,
    决策树实现与应用: 19,
    决策树模型参数优化及选择: 20,
    装袋和提升集成学习方法: 21,
    异质集成投票方法应用: 22,
    使用交叉验证快速选择模型: 23,
  },
  '无监督学习：聚类': {
    划分聚类方法实现与应用: 24,
    '使用 K-Means 完成图像压缩': 25,
    层次聚类方法实现与应用: 26,
    主成分分析原理及应用: 27,
    层次聚类应用及聚类树绘制: 28,
    密度聚类方法实现与应用: 29,
    密度聚类标记异常共享单车: 30,
    谱聚类及其他聚类方法应用: 31,
    常用聚类算法对比评估: 32,
  },
  '无监督学习：关联规则': {
    'Apriori 关联规则学习方法': 33,
    购物数据关联规则分析: 34,
    时间序列数据分析处理: 35,
    股票时间序列数据处理: 36,
    时间序列数据建模分析: 37,
    农业生产指数建模分析: 38,
  },
  '机器学习工程：模型部署和推理': {
    自动化机器学习综述: 39,
    自动化机器学习实践应用: 40,
    'AutoML 完成手写字符分类': 41,
    机器学习模型推理与部署: 42,
    蘑菇分类模型部署和推理: 43,
    机器学习模型动态增量训练: 44,
    在线学习及云端模型部署: 45,
  },
  '深度学习原理：人工神经网络': {
    深度学习综述和示例: 46,
    感知机和人工神经网络: 47,
    手写字符识别神经网络: 48,
  },
  '深度学习框架：TensorFlow & PyTorch': {
    'TensorFlow 基础概念语法': 49,
    'TensorFlow 加州房价预测': 50,
    'TensorFlow 构建神经网络': 51,
    'TensorFlow 汽车评估分类': 52,
    'TensorFlow 高阶 API 使用': 53,
    'TensorFlow 时尚物品分类': 54,
    'PyTorch 基础概念语法': 55,
    'PyTorch 构建神经网络': 56,
    'PyTorch 实现线性回归': 57,
  },
  '深度学习应用：计算机视觉': {
    卷积神经网络原理: 58,
    卷积神经网络构建: 59,
    '构建 LeNet-5 Estimator': 60,
    图像分类原理与实践: 61,
    迁移学习完成动物分类: 62,
    生成对抗网络原理及构建: 63,
    'DCGAN 动漫人物图像生成': 64,
    自动编码器原理及构建: 65,
    卷积自动编码器图像去噪: 66,
    目标检测原理与实践: 67,
    'YOLO 图像目标检测应用': 68,
  },
  '深度学习应用：自然语言处理': {
    循环神经网络原理: 69,
    循环神经网络构建: 70,
    'LSTM 预测股票价格': 71,
    文本分类原理与实践: 72,
    深度学习完成假新闻分类: 73,
    自然语言处理框架拓展: 74,
    'Google BERT 预训练技术': 75,
    神经机器翻译和对话系统: 76,
  },
  '深度学习工程：模型部署和推理': {
    自动化深度学习综述: 77,
    自动化深度学习实践: 78,
    仙人掌航拍照片分类识别: 79,
    深度学习模型推理和部署: 80,
    构建图像分类推理服务: 81,
    深度学习云端服务实践: 82,
    云服务识别增值税发票: 83,
  },
  强化学习基础: {
    强化学习介绍与示例: 84,
    'Q-Learning 强化学习方法实现': 85,
    '实现 Sarsa 学习算法走出迷宫': 86,
  },
  '附录：机器学习数学基础': {
    'Python 线性代数基础': 87,
    'Python 微积分基础': 88,
    'Python 概率论和统计学基础': 89,
  },
  '附录：机器学习常用工具': {
    'Jupyter Notebook 简明指南': 90,
    'NumPy 数值计算基础': 91,
    'Pandas 数据处理基础': 92,
    'Matplotlib 二维图像绘制方法': 93,
    'Matplotlib 三维图形绘制方法': 94,
    'Seaborn 数据可视化基础': 95,
    'SciPy 科学计算基础': 96,
  },
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          目录
        </SectionHeading>
        <p className="smiley-sans mt-8 text-4xl font-bold tracking-tight text-slate-900">
          Get a look at all of the content covered in the book. Everything you
          need to know is inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          “Everything Starts as a Square” is comprised of 240 tightly edited,
          highly visual pages designed to teach you everything you need to know
          about icon design with no unnecessary filler.
        </p>
        <Expandable>
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <ExpandableItems>
              {Object.entries(tableOfContents).map(([title, pages]) => (
                <li key={title}>
                  <h3 className="smiley-sans text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <ol
                    role="list"
                    className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                  >
                    {Object.entries(pages).map(([title, pageNumber]) => (
                      <li
                        key={title}
                        className="flex justify-between py-3"
                        aria-label={`${title} on page ${pageNumber}`}
                      >
                        <span
                          className="font-medium text-slate-900"
                          aria-hidden="true"
                        >
                          {title}
                        </span>
                        <span
                          className="font-mono text-slate-400"
                          aria-hidden="true"
                        >
                          {pageNumber}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ExpandableItems>
          </ol>
          <ExpandableButton>See more</ExpandableButton>
        </Expandable>
      </Container>
    </section>
  )
}
