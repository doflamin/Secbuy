<template>
 <el-row>
  <el-button @click="jump(2)">{{msg}}</el-button>
</el-row>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '跳回主页'
    }
  },
  methods:{
    jump(params){
      this.$router.push('/');
    }
  }
}
</script>

