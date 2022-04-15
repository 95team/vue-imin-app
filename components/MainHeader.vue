<template>
  <header>
    <div class="inner">
      <a href="/" class="logo">
        <img src="/imin_logo.svg" alt="i'm IN" />
      </a>
      <div class="user-image">
        <img src="~/assets/images/user_image.png" alt="USER" />
      </div>
      <div class="group">
        <div class="title">그룹1</div>
        <div class="divider"></div>
        <div class="description">그룹 기타 설명</div>
        <nuxt-link to="/party" class="add-party">파티 추가</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.inner {
  width: 360px;
  height: 180px;
  margin: 0 auto;
  position: relative;
}
.logo {
  position: absolute;
  top: 17px;
  left: 20px;
}
.user-image {
  position: absolute;
  top: 20px;
  right: 20px;
}
.group {
  width: 100%;
  position: absolute;
  top: 95px;
  padding: 0 20px;
}
.group .title {
  font-weight: 700;
  font-size: 32px;
}
.group .divider {
  width: 165px;
  height: 8px;
  background-color: #ff5042;
}
.group .add-party {
  position: absolute;
  top: 38px;
  right: 20px;
  padding: 4px 26px;
  border: 1px solid #373737;
  border-radius: 14px;
  font-size: 14px;
  transition: 0.1s;
}
.group .add-party:hover {
  background-color: #373737;
  color: #fff;
}
</style>
