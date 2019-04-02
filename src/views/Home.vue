
<template>
  <section class="wrap">
    <el-button icon="el-icon-my-trademark" type="primary" @click="test()">{{$t('message.test')}}</el-button>
    <div>{{ $t('message.hello') }}</div>
    <div>
      <span>svg icon: </span>
      <SvgIcon iconClass="el-icon-my-trademark" fill="red"></SvgIcon>
    </div>
    <div>
      <span>font-class icon: </span>
      <i class="el-icon-my-trademark" style="color: red;"></i>
    </div>
    <div>
      <p>{{ $d(Date.now(), 'long') }}</p>
    </div>
  </section>
</template>
<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  },
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
      })
        .then(() => {
          this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en';
          this.$message({
            type: 'success',
            message: this.$t('message.hello'),
          });
        })
        .catch(() => {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div{
    margin-top: 1em;
  }
}
</style>
