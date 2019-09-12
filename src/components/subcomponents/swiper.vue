<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunBoList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props: {
    lunBoList: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.swipe {
  height: 100%;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>
