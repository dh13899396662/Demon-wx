const config = {
  request: {
    baseURL: 'http://www.ciyun.com',
    header: 'application/json',
    Authorization: wx.getStorageSync('token'),
    invaidToken: '/pages/login/login'
  }
}
export default config