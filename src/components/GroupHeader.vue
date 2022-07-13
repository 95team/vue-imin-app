<template>
  <header>
    <LogoComponent />
    <UserImage />
    <div class="group">
      <div class="wrap">
        <div
          v-if="isShowingTitle"
          class="title"
          :title="title"
          @click="isShowingTitle = !isShowingTitle"
        >
          {{ title }}
        </div> 
        <input
          v-else
          type="text"
          @keyup.enter="changeTitle"
          :value="title"
        />
        <div class="divider"></div>
        <div
          v-if="isShowingDescription"
          class="description"
          :title="description"
          @click="isShowingDescription = !isShowingDescription"
        >
          {{ description }}
        </div>
        <input
          v-else
          type="text"
          @keyup.enter="changeDescription"
          :value="description"
        />
      </div>
      <div
        class="party"
        @click="toParty"
      >
        파티추가
        <img
          src="@/assets/add.png"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from '@/components/LogoComponent'
import UserImage from '@/components/UserImage'

export default {
  components: {
    LogoComponent,
    UserImage
  },
  data() {
    return {
      isShowingTitle: true,
      isShowingDescription: true
    }
  },
  computed: {
    title() {
      return this.$store.state.group.title
    },
    description() {
      return this.$store.state.group.description
    }
  },
  methods: {
    toParty() {
      this.$router.push('/party')
    },
    changeTitle(event) {
      this.isShowingTitle = !this.isShowingTitle
      this.$store.dispatch('group/change', {
        title: event.target.value
      })
    },
    changeDescription(event) {
      this.isShowingDescription = !this.isShowingDescription
      this.$store.dispatch('group/change', {
        description: event.target.value
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 195px;
  position: relative;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  border-bottom: 2px solid #f3f3f3;
  .logo {
    position: absolute;
    top: 19px;
    left: 20px;
  }
  .user-image {
    position: absolute;
    top: 22px;
    right: 20px;
  }
  .group {
    width: 100%;
    position: relative;
    top: 77px;
    padding: 0 20px;
    box-sizing: border-box;
    .wrap {
      width: 192px;
      .title {
      font-family: "Hahmlet", sans-serif;
      font-size: 32px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 48px;
      }
      input {
        width: 100%;
        font-family: "Hahmlet", sans-serif;
        font-size: 32px;
        padding: 0;
        border: 1px solid #373737;
        border-radius: 4px;
        color: #373737;
        &:last-child {
          font-family: "Spoqa Han Sans Neo", sans-serif;
          font-size: 16px;
          line-height: 1.2;
          margin-top: 14px;
        }
      }
      .divider {
        width: 196px;
        height: 8px;
        background-color: #ff5042;
        border-radius: 4px;
        position: absolute;
        left: 16px;
      }
      .description {
        margin-top: 14px;
        font-family: "Spoqa Han Sans Neo", sans-serif;
        height: 41px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
      }
    }
    .party {
      display: flex;
      width: 105px;
      height: 32px;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #373737;
      border-radius: 16px;
      padding: 8px 13px;
      box-sizing: border-box;
      position: absolute;
      top: 36px;
      right: 20px;
      cursor: pointer;
      img {
        width: 12px;
        height: 12px;
        
      }
    }
  }
}
</style>