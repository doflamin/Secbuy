<template>
 <el-row>
  <el-button @click="jump(2)">{{msg}}</el-button>
</el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '跳转到测试页面'
    }
  },
  methods:{
    jump(params){
      this.$router.push('/test');
    }
  }
}
</script>

