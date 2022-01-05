import randomChinese from '@/utils/ChineseLoremIpsum'
import Chance from 'chance'

const chance = Chance()

export async function fetchStories(total = 20) {
  return Array.apply(null, Array(total)).map((v) => {
    let id = chance.hash({ length: 8 })
    return {
      id,
      author: randomChinese(chance.integer({ min: 5, max: 10 }), false),
      content: randomChinese(chance.integer({ min: 10, max: 20 })),
      createTime: chance.date({ string: true }),
    }
  })
}
