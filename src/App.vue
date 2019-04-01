<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.removeLoading();
  },
  methods: {
    removeLoading() {
      document.body.removeChild(document.getElementById('Loading'));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
