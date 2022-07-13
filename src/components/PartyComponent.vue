<template>
  <div class="container">
    <div class="date">
      {{ party.date }}
    </div>
    <div class="wrap">
      <div class="party">
        <div class="title">
          {{ party.title }}
        </div>
        <div class="user">
          <img
            :src="party.user"
            alt=""
          />
        </div>
        <div class="description">
          {{ party.description }}
        </div>
      </div>
      <div class="more">
        <div class="detail">
          <img
            src="@/assets/more.png"
            alt="더보기"
          />
        </div>
        <div class="btn">
          IN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    party: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  padding: 0 24px 0 32px;
  .date {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: 80px;
    font-size: 14px;
    border-right: 2px solid #f3f3f3;
    padding: 12px 21px 0 0;
    line-height: 1.4;
    box-sizing: border-box;
  }
  .wrap {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    padding: 12px 24px 12px 20px;
    .party {
      width: 195px;
      > * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .title {
        font-family: "Hahmlet", sans-serif;
        font-size: 14px;
        line-height: 1.4;
      }
      .user {
        margin: 10px 0;
        box-sizing: border-box;
        display: flex;
        
        > * {
          margin-right: 4px;
        }
        >:last-child {
          margin-right: 0;
        }
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: block;
        }
      }
      .description {
        font-size: 12px;
      }
    }
    .more {
      .detail {
        display: flex;
        align-items: center;
        margin: 12px 0 16px;
        width: 16px;
        height: 16px;
        img {
          width: 100%;
        }
      }
      .btn {
        font-family: "Hahmlet", sans-serif;
        font-size: 12px;
      }
    }
  }
}
</style>