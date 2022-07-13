<template>
  <div class="container">
    <GroupHeader />
    <PartyComponent
      v-for="party in parties"
      :key="party"
      :party="party"
    />
  </div>
</template>

<script>
import GroupHeader from '@/components/GroupHeader'
import PartyComponent from '@/components/PartyComponent'

export default {
  components: {
    GroupHeader,
    PartyComponent
  },
  created() {
    this.$store.dispatch('home/createId', {
      id: this.$route.fullPath.substring(7)
    });
  },
  computed: {
    parties() {
      return this.$store.state.party.parties
    }
  }
}
</script>