<template>
    <Face 
    ></Face>
</template>

<script lang="ts">
import Face from './Face.vue';
import {
    Component,
    Vue,
} from 'vue-property-decorator';

@Component({
    components: { Face },
})
export default class extends Vue {
    created() {
    }
};
</script>

<style lang="sass">

</style>
