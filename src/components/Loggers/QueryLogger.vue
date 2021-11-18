
<script>
import BaseLogger from '../BaseLogger.vue'
import { format } from 'sql-formatter';
export default {
    components: {
        BaseLogger
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            queryFormatted: ''
        }
    },
    mounted() {
        this.queryFormatted = format(this.data.query, { language: 'mysql' });
    },
}
</script>


<template>
    <BaseLogger :data="data">
        <template #header>
            <div class="card_header_title">Query Executed</div>
        </template>
        <template #body>
            <div class="card_query">
                <pre>{{ queryFormatted }}</pre>
            </div>
        </template>
        <template #footer>
            <span>{{data.time}}μs on ({{ data.connectionName }})</span>
        </template>
    </BaseLogger>
</template>

<style>
</style>
