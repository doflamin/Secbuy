<template>
 <el-row>
  <el-button @click="jump">{{msg}}</el-button>
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
    jump(){
      this.$router.push('/');
    }
  }
}
</script>

