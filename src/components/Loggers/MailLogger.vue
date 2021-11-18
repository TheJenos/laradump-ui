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
    data() {
        return {
            id: Math.random().toString(16).slice(2),
        }
    },
    mounted() {
        const frames = document.getElementsByTagName('iframe');
        const frame = frames[frames.length - 1];
        frame.contentWindow.document.open();
        frame.contentWindow.document.write(this.data.html);
        frame.style.height = frame.contentWindow.document.body.scrollHeight + "px"
        frame.contentWindow.document.close();
    },
}
</script>


<template>
    <BaseLogger :data="data">
        <template #header>
            <div v-if="data.mail_header" class="card_header_title">Mail Sent</div>
        </template>
        <template #body>
            <div class="card_query" v-if="data.mail_header">
                <span>
                    From : {{data.mail_header.from}}
                    <br> To : {{data.mail_header.to}}
                    <br>
                    <span v-if="data.mail_header.cc.length > 0">CC : {{data.mail_header.cc.join(', ')}}<br></span>
                    <span v-if="data.mail_header.bcc.length > 0">BCC : {{data.mail_header.bcc.join(', ')}} <br></span>
                    Subject :
                    <b>{{data.mail_header.subject}}</b>
                </span>
            </div>
            <div class="card_header_title mb-3">Mail Content ({{data.class_name}})</div>
            <iframe />
        </template>
    </BaseLogger>
</template>

<style>
</style>
