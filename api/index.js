import { request } from '../utils/request'

// 获取token
export const getToken = data => request(`/wechat/core/getToken?code=${data.code}&mpid=${data.mpid}&nickName=${data.nickName}&headimgurl=${data.headimgurl}`, 'get', {}, false)
// 根据城市id查询站点
export const citySite = data => request(`/wechat/siteHome/site?cityId=${data.cityId}`, 'get', {}, true)
// 通过经纬度定位城市id
export const releaseContent = data => request(`/wechat/peopleMessage/`, 'post', data, true)
// 留言(回复)-寻物
export const releaseContent2 = data => request(`/wechat/goodsMessage/`, 'post', data, true)
