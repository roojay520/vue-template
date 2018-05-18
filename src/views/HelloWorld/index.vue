<template>
  <div class="hello">
    <h1><svg-icon icon-class="user"></svg-icon> {{ msg }}</h1>
    <el-button type='primary'>test</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hello！',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
