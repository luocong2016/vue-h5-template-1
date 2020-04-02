<template>
  <div>
    <m-nav-bar></m-nav-bar>
    <m-button btnText="default"></m-button>
    <br />
    <m-button btnType="primary" btnText="primary"></m-button>
    <br/>
    <m-button btnType="info" btnText="info"></m-button>
    <br />
    <m-button btnType="danger" btnText="danger"></m-button>
    <br/>
    <m-button btnType="warning" btnText="warning"></m-button>
    <br/>

    <m-button btnType="info" btnBlock btnPlain  btnText="btnPlain"></m-button>
    <br/>
    
    <m-button btnType="primary" btnRound btnBlock  btnText="btnRound"></m-button>
    <br>
    <m-button btnType="primary" btnBlock  btnText="btnBlock"></m-button>
    <br>
    <m-button btnType="info" btnBlock btnDisabled  btnText="btnDisabled"></m-button>
    <br>
  
    <br>
    ...............
    <br>

  
  </div>
</template>

<script>
  import MNavBar from '@/basic/navBar'
  import MButton from '@/basic/button'
  export default {
    components: {
      MNavBar,
      MButton,
    }, 
    data() {
      return {
        btnDisabled: false,
        btnLoading: false,
      }
    },
    methods: {
      clickBtn () {
        this.btnLoading = true
        this.$startLoading()
        setTimeout(() => {
          this.$endLoading()
          this.btnLoading = false
        }, 2000);
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "~@/common/less/variable.less";

</style>
