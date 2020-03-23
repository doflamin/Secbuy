<template>
 <el-row>
  <NavHeader title='ttt' />
</el-row>
</template>

<script>
import NavHeader from '../components/navheader.vue'
export default {
  name: 'HelloWorld',
  components:{NavHeader},
  data () {
    return {
      msg: '跳转到测试页面'
    }
  },
  methods:{
   
  }
}
</script>

