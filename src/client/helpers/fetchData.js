import { data } from '../../data/hikes'
const DATA = data() || {}

export const myFetch = (type) => {
  return new Promise((resolve, reject) => {
    const allFeeds = DATA[type] || []

    setTimeout(() => resolve(allFeeds), 1000)
  })
}

export const myFetchId = (type, id) => {
  return new Promise((resolve, reject) => {
    const allFeeds = DATA[type] || []

    const currentHike = allFeeds.find(hike => hike.id === id)

    setTimeout(() => resolve(currentHike), 1000)
  })
}