import axios from '../axios/index'

// 正在热映
export const nowPlaying = (id) => {
    return axios.request({
        url: "/api/movieOnInfoList?cityId="+id,
        method: "get"
    });
}

// 即将上映
export const comingSoon = (id) => {
    return axios.request({
        url: "/api/movieComingList?cityId="+id,
        method: "get"
    });
}