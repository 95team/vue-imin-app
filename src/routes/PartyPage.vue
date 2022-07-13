<template>
  <div class="container">
    <router-link
      :to="`/group/${id}`"
      class="close"
    >
      <img
        src="@/assets/close.png"
        alt="이전페이지로 이동"
      />
    </router-link>
    <div class="party">
      파티추가
    </div>
    <div class="info">
      <label for="date">날짜</label>
      <input
        type="date"
        id="date"
        v-model="date"
      />
      <label for="title">파티 제목</label>
      <input
        type="text"
        id="title"
        v-model="title"
      />
      <label for="description">파티 설명</label>
      <input
        type="text"
        id="description"
        v-model="description"
      />
    </div>
    <div
      class="btn"
      @click="add"
    >
      추가
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      title: '',
      description: '',
      user: require('@/assets/logo.png')
    }
  },
  computed: {
    id() {
      return this.$store.state.home.id
    }
  },
  methods: {
    add() {
      this.$store.dispatch('party/addParty', {
        date: this.date,
        title: this.title,
        description: this.description,
        user: this.user
      }),
      this.$router.push(`/group/${this.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 27px 24px 0;
  box-sizing: border-box;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  .close {
    position: absolute;
    right: 39px;
  }
  .party {
    font-family: "Hahmlet", sans-serif;
    font-size: 32px;
    line-height: 1.5;
    margin: 68px 0 6px;
  }
  .info {
    label {
      display: block;
      margin: 24px 0 9px;
    }
    input {
      width: 100%;
      height: 42px;
      box-sizing: border-box;
      background-color: #f3f3f3;
      border: 0;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    margin-top: 53px;
    color: white;
    background-color: #ff5042;
    border-radius: 24px;
    cursor: pointer;
  }
}
</style>