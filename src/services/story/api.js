import randomChinese from '@/utils/ChineseLoremIpsum'
import chance from 'chance'

export async function fetchStories(total = 20) {
  return new Array(20).map((v) => {
    let id = chance.hash({ length: 8 })
    return {
      id,
      author: randomChinese(chance.integer({ min: 5, max: 10 })),
      content: randomChinese(chance.integer({ min: 10, max: 20 })),
    }
  })
}
