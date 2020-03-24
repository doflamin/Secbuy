<template>
  <!-- <el-button @click="jump()">{{msg}}</el-button> -->
  <div :style="styles.navheader">
    <div :style="styles.returnIconContainer">
     <img :src="Return" :style="styles.returnIcon">
    </div>

    <div :style="styles.headerTitle">
    {{title}}
    </div>

    <div :style="styles.shareIconContainer">
      <img :src="Share" :style="styles.shareIcon">
    </div>
  </div>
</template>

<script>

import styles from './style';
import Return from '../../assets/return.png';
import Share from '../../assets/share.png';

export default {
  name: 'navheader',
  data () {
    return {
      msg: 'navheader',
      imgUrl:'',
      styles,
      Return,
      Share,
    }
  },
  props:["title"],
  methods:{
    jump(){
      // this.$router.push('/Search');
      console.log(this.title)
    }
  },
  mounted(){
    // this.$axios.get(
    //   'localhost:8080/test/get'
    // ).then((res)=>{
    //   console.log(1111)
    // }).catch((err)=>{
    //   console.log(2222)
    // })
  }
}
</script>

