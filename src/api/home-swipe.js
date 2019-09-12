import axios from '../axios/index'

// 获取首页轮播列表
export const homeSwipeList = () => {
    return axios.request({
        url: "api/getlunbo",
        method: "get"
    });
}