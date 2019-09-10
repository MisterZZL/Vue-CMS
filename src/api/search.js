import axios from '../axios/index'


// 获取城市列表
export const search = (keyword,cityId, cancelTokens) => {

    return axios.request({
        url: "/api/searchList?cityId="+cityId+"&kw=" + keyword,
        method: "get",
        cancelToken: cancelTokens.cancelToken
    });


}