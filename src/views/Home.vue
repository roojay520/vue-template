
<template>
  <section class="wrap">
    <el-button type="primary" @click="test()">{{$t('message.test')}}</el-button>
    <p>{{ $t('message.hello') }}</p>
  </section>
</template>

<script>

export default {
  data() {
    return {
      date: [],
    };
  },
  methods: {
    test() {
      const arr = ['a', ['b', 'c'], 'd'];
      console.log(arr.flat(Infinity));
      this.$confirm(this.$t('message.changeLang'), this.$t('message.tips'), {
        type: 'warning',
      }).then(() => {
        this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh-CN' : 'en';
        this.$message({
          type: 'success',
          message: this.$t('message.hello'),
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t('message.hello'),
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: $clr-bg;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
