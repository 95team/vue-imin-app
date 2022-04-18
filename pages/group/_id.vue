<template>
  <div>
    <MainHeader />
    <MainContent />
  </div>
</template>

<script>
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

export default {
  name: 'MainPage',
  validate({ params }) {
    return uuidValidate(params.id) && uuidVersion(params.id) === 4;
  },
};
</script>

<style>
body {
  color: #373737;
}
</style>
