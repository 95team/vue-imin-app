<template>
  <router-link
    :to="`/group/${id}`"
    class="logo"
  >
    i'm IN
  </router-link>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$store.state.home.id;
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  font-family: "Hahmlet", sans-serif;
  font-size: 24px;
  color: #373737;
}
</style>