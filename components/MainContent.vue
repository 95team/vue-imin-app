<template>
  <div class="inner">
    <div class="date">3/26 화</div>
    <div class="party">
      <div class="title">파티1</div>
      <div class="user">
        <img src="~/assets/images/user_image.png" alt="USER" />
        <img src="~/assets/images/user_image.png" alt="USER" />
        <img src="~/assets/images/user_image.png" alt="USER" />
        <img src="~/assets/images/user_image.png" alt="USER" />
        <img src="~/assets/images/user_image.png" alt="USER" />
      </div>
      <div class="description">
        Fusce nunc egestas aliquet hendrerit tempor iaculis diam elit, accumsan. Ullamcorper imperdiet a, nulla nisl.
      </div>
      <div class="more">
        <b-icon icon="three-dots" font-scale="1.5"></b-icon>
      </div>
      <div class="detail">
        <b-icon icon="plus-circle" font-scale="1.5"></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
};
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
}
.inner {
  width: 360px;
  height: 113px;
  margin: 0 auto;
  display: flex;
}
.date {
  padding: 10px 22px 0px 32px;
  font-size: 14px;
  border-right: 2px solid #c4c4c4;
}
.party {
  width: 100%;
  position: relative;
  padding: 10px 24px 19px 27px;
}
.party .title {
  position: absolute;
  font-weight: 700;
  font-size: 14px;
}
.party .user {
  position: absolute;
  top: 43px;
}
.party .description {
  width: 175px;
  height: 18px;
  position: absolute;
  top: 86px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.party .more {
  position: absolute;
  right: 24px;
}
.party .detail {
  position: absolute;
  top: 43px;
  right: 24px;
}
</style>
