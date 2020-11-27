import axios from 'axios'

export default class HackerNewsApi{

    _apiBase = 'https://hacker-news.firebaseio.com/v0/'

    getPostsIds = async () => {
        try {
            const res = await axios.get(`${this._apiBase}newstories.json`)
            return res.data.slice(0, 100)
        } catch (error) {
            return error.data
        }
    }

    getPostById = async postId => {
        try {
            const res = await axios.get(`${this._apiBase}v0/item/${postId}.json`)
            return res.data
        } catch (error) {
            return error.data
        }
    }
}