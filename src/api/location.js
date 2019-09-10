import axios from '../axios/index'

// 获取城市列表
export const location = () => {
    return axios.request({
        url: "/api/getLocation",
        method: "get"
    });
}