import axios from 'axios'

export default {
  async fetch (options) {
    const {
      url,
      method,
      withCredentials,
      data,
      params,
      headers,
      timeout = 20000
    } = options

    const response = await axios({
      url,
      method,
      withCredentials,
      data,
      params,
      headers,
      timeout
    })

    return response
  }
}
