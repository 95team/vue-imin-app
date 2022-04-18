<template>
  <section class="signin">
    <div class="inner">
      <b-form @submit.prevent="onSubmit">
        <b-form-input
          class="input-area"
          v-model="user.name"
          placeholder="닉네임을 입력해주세요. (2글자 이상)"
        ></b-form-input>
        <b-button type="submit" class="add" block>입장</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'IndexPage',
  data() {
    return {
      user: {
        name: '',
        groupNumber: uuidv4(),
      },
      database: {
        name: '',
        groupNumber: '',
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.user.name.length < 2) return alert('2글자 이상 입력해주세요!');
      if (this.user.name === this.database.name) {
        this.$router.push({ name: 'group-id', params: { id: this.database.groupNumber } });
      } else {
        this.$router.push({ name: 'group-id', params: { id: this.user.groupNumber } });
      }
    },
  },
};
</script>

<style scoped>
.signin {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.inner {
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;
  color: #373737;
  position: relative;
}
.input-area {
  background-color: #f3f3f3;
  border: 0;
}
.add {
  margin-top: 32px;
  padding: 10px 0;
  background-color: #ff5042;
  border: 0;
  font-weight: 700;
  font-size: 32px;
}
</style>
