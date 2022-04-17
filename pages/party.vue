<template>
  <div class="inner">
    <b-form @submit="onSubmit">
      <div class="close">
        <b-icon icon="x" font-scale="2.5"></b-icon>
      </div>
      <div class="subject">파티추가</div>
      <div class="form-data">
        <b-form-group id="input-data" label="날짜" label-for="date">
          <b-form-datepicker id="date" class="input-area" v-model="form.date" placeholder=""></b-form-datepicker>
        </b-form-group>
        <b-form-group id="input-data" label="파티 제목" label-for="title">
          <b-form-input id="title" class="input-area" v-model="form.title" placeholder=""></b-form-input>
        </b-form-group>
        <b-form-group id="input-data" label="파티 설명" label-for="description">
          <b-form-input id="description" class="input-area" v-model="form.description" placeholder=""></b-form-input>
        </b-form-group>
      </div>

      <b-button type="submit" class="add" block>추가</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        date: '',
        title: '',
        description: '',
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.inner {
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;
  color: #373737;
  position: relative;
}
.close {
  position: absolute;
  top: 27px;
  right: 19px;
}
.subject {
  font-weight: 700;
  font-size: 32px;
  padding-top: 95px;
}
.form-data {
  width: 100%;
  margin-top: 30px;
}
#input-data {
  margin-bottom: 24px;
}
.input-area {
  background-color: #f3f3f3;
  border: 0;
}
.add {
  margin-top: 275px;
  padding: 10px 0;
  background-color: #ff5042;
  border: 0;
  font-weight: 700;
  font-size: 32px;
}
</style>
