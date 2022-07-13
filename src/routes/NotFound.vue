<template>
  <div class="not-found">
    <LogoComponent />
    <div class="status">
      404
    </div>
    <div class="message">
      Page not Found!
    </div>
  </div>
</template>

<script>
import LogoComponent from '@/components/LogoComponent'

export default {
  components: {
    LogoComponent
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
  font-family: "", sans-serif;
  padding: 80px 20px;
  line-height: 1.2;
  .logo {
    display: block;
    margin-bottom: 50px;
    font-size: 50px;
  }
  .status {
    font-size: 160px
  }
  .message {
    font-size: 50px;
  }
}
</style>