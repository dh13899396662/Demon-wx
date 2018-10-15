//index.js
//获取应用实例
import * as api from '../../api/index.js'
import * as xx from '../../common/wx.js' 

Page({
    data: {
        userInfo: {},
        skipUrl: '',
        systemType: {}
    },
    userInfoHandler(e) {
        wx.showLoading({
            title: '获取微信授权中',
            mask: true
        })
        this.setData({
            userInfo: e.detail.userInfo
        })
        if (!this.data.userInfo) {
            wx.showToast({
                title: '您拒绝了授权请求请重新获取',
                icon: 'none',
            })
        } else {
            this._login()
        }
    },
    _login() {
        let that = this
        wx.login({
            success(res) {
                if (res.code) {
                    let obj = {}
                    obj.code = res.code
                    obj.nickname = that.data.userInfo.nickName
                    obj.headimgurl = that.data.userInfo.avatarUrl
                    obj.gender = that.data.userInfo.gender
                    xx.setCookie('replyHeadimg', that.data.userInfo.avatarUrl)
                    xx.setCookie('replyNickname', that.data.userInfo.nickName)
                    that._getToken(obj)
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        });
    },
    _getToken(obj) {
        const datas = {
            code: obj.code,
            mpid: 10087,
            nickName: obj.nickname,
            headimgurl: obj.headimgurl
        }
        console.log(obj)
        api.getToken(datas).then(res => {
            console.log(res)
            if (!res.data.code) {
                xx.hide()
                xx.setCookie('token', res.data.data.token)
                xx.barTo('/pages/guide/guide')
            } else {
                xx.toast2(res.data.msg)
            }
        })
    }
})