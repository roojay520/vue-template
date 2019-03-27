<template>
  <section :id="id" :style="{width, height }"></section>
</template>

<script>
import echarts from '../libs/echarts';

export default {
  name: 'v-chart',
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    height: {
      type: String,
      default: '400px',
    },
    width: {
      type: String,
      default: '600px',
    },
  },
  // 钩子函数
  mounted() {
    this.draw();
  },
  methods: {
    async draw() {
      // 初始化echarts实例
      const echart = await echarts();
      const vchart = echart.init(document.getElementById(this.id));
      // 防止越界，重绘canvas
      window.onresize = vchart.resize;
      vchart.setOption(this.options);// 设置option
    },
  },

};
</script>

<style lang="scss" scoped>

</style>
