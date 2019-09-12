<template>
  <div class="shopcar-container">
    <!-- 商品列表项区域 -->

    <!-- 结算区域 -->
  </div>
</template>

<script>


export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {}
  },
  components: {}
};
</script>

<style lang="scss" scoped>
</style>
