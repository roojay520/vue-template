<template>
  <section :id="id" :ref="id" :style="{width, height }" v-on="$listeners" v-if="autoDraw"></section>
</template>

<script>
import echarts from '../libs/echarts';

export default {
  name: 'v-chart',
  data() {
    return {
      vchart: null,
    };
  },
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
    autoDraw: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    autoDraw: {
      handler(newStatus) {
        newStatus ? this.draw() : this.destroy();
      },
      immediate: true,
    },
  },
  methods: {
    async draw() {
      // 初始化echarts实例
      const echart = await echarts();
      const vchart = echart.init(this.$refs[this.id]);
      this.vchart = vchart;
      // 防止越界，重绘canvas
      window.onresize = vchart.resize;
      // 设置option
      vchart.setOption(this.options);
    },
    destroy() {
      if (this.vchart) {
        this.vchart.dispose();
        this.vchart = null;
      }
    },
  },
  beforeDestroy() {
    this.destroy();
  },
};
</script>

<style lang="scss" scoped>

</style>
