<template>
  <svg class="icon" aria-hidden="true" :style="{fill: fill}" v-on="$listeners">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import '@/assets/iconfont/iconfont';
import '@/assets/iconfont/iconfont.css';

export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    iconName() {
      return `#${this.iconClass}`;
    },
  },
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
