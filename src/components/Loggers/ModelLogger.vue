
<script>
import BaseLogger from '../BaseLogger.vue'
export default {
    components: {
        BaseLogger,
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    mounted() {
        if (this.data.dumpers) {
            this.data.dumpers.forEach(element => {
                window.eval(`Sfdump('${element.dumpData.id}')`);
            });
        }
    },
}
</script>


<template>
    <BaseLogger :data="data">
        <template #header>
            <div class="card_header_title">{{data.class_name}}</div>
        </template>
        <template #body>
            <div v-for="(dump,index) in data.dumpers" :key="index">
                <span class="card_header_title">{{$filters.capitalize(dump.type)}}</span>
                <div class="card_dump" v-html="dump.dumpData.dump" />
            </div>
        </template>
    </BaseLogger>
</template>

<style>
</style>
