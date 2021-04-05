import axios from 'axios'

const getUserInfo = (uid, password) => {
  return axios.post('/endpoint-for-get-user-info', {
    params: {
      'uid': uid,
      'password': password
    }
  })
}

const isFinished = uid => {
  return axios.post('/endpoint-for-is-finished', {
    params: {
      'uid': uid
    }
  })
}

export default {
  async login (uid, password) {
    try {
      const getUserInfoPromise = await getUserInfo(uid, password)//백에 id, password를 보내는듯??
      const isFinishedPromise = await isFinished(uid) // Promise.all의 예시를 위해 집어넣음
      const [userInfoResponse, isFinishedResponse] = await Promise.all([getUserInfoPromise, isFinishedPromise])
      console.log(userInfoResponse, isFinishedResponse)
      if (userInfoResponse.data.length === 0) return 'noAuth' // 로그인 결과에 따른 분기 처리를 해준다
      return userInfoResponse
    } catch (err) {
      console.error(err)
    }
  }
}