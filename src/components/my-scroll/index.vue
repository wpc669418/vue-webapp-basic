<template>
  <div ref="wrapper" class="wrapper" :style="'height:'+height+';'">
    <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    height: {
      type: String,
      default: '100vh'
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100%;
  overflow: hidden;
}
</style>
