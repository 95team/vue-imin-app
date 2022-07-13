<template>
  <div class="container">
    <h1>Welcome to i'm IN</h1>
    <router-link
      v-if="id"
      :to="`/group/${id}`"
    >
      링크 이동
    </router-link>
    <div
      v-if="id"
      @click="copyLink"
    >
      링크 복사
    </div>
    <div
      v-else
      @click="createId"
    >
      링크 생성
    </div>
  </div>
</template>

<script>
import { v4 } from 'uuid'

export default {
  data() {
    return {
      id: ''
    }
  },
  methods: {
    createId() {
      this.id = v4();
      this.$store.dispatch('home/createId', {
        id: this.id
      })
    },
    async copyLink() {
      await this.$store.dispatch('home/copyLink')
      alert('링크가 복사되었습니다.')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  > * {
    display: block;
    margin: 15px auto;
    font-family: "Spoqa Han Sans Neo", sans-serif;
  }
  h1 {
    font-family: "Hahmlet", sans-serif;
    font-size: 30px;
    line-height: 1.3;
  }
  a,
  div {
    color: #373737;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid #373737;
    border-radius: 4px;
    padding: 5px;
  }
}
</style>