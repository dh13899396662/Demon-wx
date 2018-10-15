//app.js
App({
    onLaunch() {
        this._getToken()
    },
    _getToken() {
        let token = wx.getStorageSync('token')
        if (!token) {
            wx.reLaunch({
                url: '/pages/login/login'
            })
        }
    },
    globalData: {
        userInfo: null
    }
})