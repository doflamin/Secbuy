<template>
 
  <!-- <el-button @click="jump()">{{msg}}</el-button> -->
  <div>
    {{title}}
  </div>

</template>

<script>


export default {
  name: 'navheader',
  data () {
    return {
      msg: 'navheader'
    }
  },
  props:["title"],
  methods:{
    jump(){
      // this.$router.push('/test');
      console.log(this.title)
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

