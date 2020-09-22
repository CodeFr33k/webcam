<template>
    <FaceMask 
    ></FaceMask>
</template>

<script lang="ts">
import FaceMask from './FaceMask.vue';
import {
    Component,
    Vue,
} from 'vue-property-decorator';

@Component({
    components: { FaceMask },
})
export default class extends Vue {
    created() {
    }
};
</script>

