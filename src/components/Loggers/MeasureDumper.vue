
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
    methods: {
        microSecondsDuration(start, end) {
            return (Math.round((end - start) * 1000)) / 1000;
        },
        bytesToSize(bytes) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (bytes == 0) return '0 Byte';
            var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
        }
    },
}
</script>


<template>
    <BaseLogger :data="data">
        <template #header>
            <div class="card_header_title">Measure Executed ({{data.id}})</div>
        </template>
        <template #body>
            <div class="card_query">
                <span>
                    Duration : {{microSecondsDuration(data.start,data.end)}}μs
                    <br> Memory : {{bytesToSize(data.end_memory-data.start_memory)}}
                    <br> Peak Memory Usage : {{bytesToSize(data.peak_memory)}}
                </span>
            </div>
        </template>
    </BaseLogger>
</template>

<style>
</style>
