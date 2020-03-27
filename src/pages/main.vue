<template>
 <el-row>
  <NavHeader title='主标题' />
  <el-button type="primary" @click="add">点我加一</el-button>
  <div>初始值--->{{single}}</div>
  <div>计算得来的双倍值--->{{double}}</div>
</el-row>
</template>

<script>
import NavHeader from '../components/navheader/navheader.vue'
export default {
  name: 'HelloWorld',
  components:{NavHeader},
  data () {
    return {
      msg: '跳转到测试页面',
    }
  },
  methods:{
    add(){
      this.$store.commit('increment');
    }
  },
  computed:{
    single () {
      return this.$store.state.count
    },
    double () {
      return this.$store.getters.double
    }

  },

}
</script>

