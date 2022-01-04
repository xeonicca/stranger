import randomChinese from '@/utils/ChineseLoremIpsum'
import chance from 'chance'

export async function fetchActiveQuestions(total = 20) {
  return new Array(20).map((v) => {
    let id = chance.hash({ length: 8 })
    return {
      id,
      question: randomChinese(chance.integer({ min: 8, max: 20 })),
      content: randomChinese(chance.integer({ min: 20, max: 90 })),
    }
  })
}


