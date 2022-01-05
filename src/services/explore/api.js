import randomChinese from '@/utils/ChineseLoremIpsum'
import Chance from 'chance'

const chance = Chance()

export async function fetchActiveQuestions(total = 30) {
  return Array.apply(null, Array(total)).map((v) => {
    let id = chance.hash({ length: 8 })
    return {
      id,
      question: randomChinese(chance.integer({ min: 8, max: 20 })),
      content: randomChinese(chance.integer({ min: 20, max: 90 })),
      storyCount: chance.integer({ min: 5, max: 30 })
    }
  })
}


