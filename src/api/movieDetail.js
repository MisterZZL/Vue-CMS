import axios from '../axios/index'

// 获取城市列表
export const movieDetail = (id) => {
    return axios.request({
        url: "/api/detailmovie?movieId=" + id,
        method: "get"
    });
}