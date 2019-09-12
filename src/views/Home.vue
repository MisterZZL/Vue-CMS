<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <div class="swipe-container">
      <Swipe :lunBoList="lunBoList"></Swipe>
    </div>
    <!-- 六宫格 -->
    <div class="six-container">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/newslist">
            <img src="../assets/menu1.png" alt />
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/photolist">
            <img src="../assets/menu2.png" alt />
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="/home/goodslist">
            <img src="../assets/menu3.png" alt />
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="#">
            <img src="../assets/menu4.png" alt />
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="#">
            <img src="../assets/menu5.png" alt />
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link to="#">
            <img src="../assets/menu6.png" alt />
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swipe from "../components/subcomponents/swiper";

import { homeSwipeList } from "../api/home-swipe";

import { Toast } from "mint-ui";
export default {
  name: "home",
  data() {
    return {
      lunBoList: []
    };
  },
  methods: {
    //获取轮播图列表函数
    getHomeSwipeList() {
      homeSwipeList().then(res => {
        if (res.status === 0) {
          this.lunBoList = res.message;
        } else {
          Toast("轮播图获取失败");
        }
      });
    }
  },
  created() {
    this.getHomeSwipeList();
  },
  components: {
    Swipe
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  .swipe-container {
    height: 200px;
  }
  .six-container {
  .mui-grid-view.mui-grid-9 {
    background-color: #ffffff;
    .mui-table-view-cell {
      border: 0;
    }
  }

  img {
    height: 60px;
  }
}
}

</style>
