<template>
  <div class="app" id="app">
    <div>{{ store.yaw }}</div>
    <div>{{ store.pitch }}</div>
    <div class="app-left">
        <Face />
    </div>
    <div class="app-right">
        <FaceMask />
    </div>
  </div>
</template>

<script lang="ts">
import Face from '@/Face.vue';
import FaceMask from '@/FaceMask.vue';
import store from '@/store';
import Store from '@/_Store';
import { Component, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';

@Observer
@Component({
  components: {
    Face,
    FaceMask,
  },
})
export default class App extends Vue {
    store: Store = store;
}
</script>

<style lang="sass">
.app
    display: flex
    width: 100vw
    height: 100vh

.app-left
    position: relative  
    width: 50%
    height: 100%
    overflow: hidden

.app-right
    position: relative  
    width: 50%
    height: 100%
    overflow: hidden

.face-box
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

.face-mask-box
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)

</style>
