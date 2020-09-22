<template>
  <div id="app">
    <Face />
    <FaceMask />
  </div>
</template>

<script lang="ts">
import Face from '@/Face.vue';
import FaceMask from '@/FaceMask.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Face,
    FaceMask,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
</style>
