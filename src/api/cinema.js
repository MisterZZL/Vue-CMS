import axios from '../axios/index'

// 获取城市列表
export const cinema = (id) => {
    return axios.request({
        url: "/api/cinemaList?cityId="+id,
        method: "get"
    });
}