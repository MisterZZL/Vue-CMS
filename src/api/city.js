import axios from '../axios/index'

// 获取城市列表
export const city = () => {
    return axios.request({
        url: "/api/cityList",
        method: "get"
    });
}