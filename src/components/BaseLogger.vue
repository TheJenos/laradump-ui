<script>
import utils from '../composition/logs.js';
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            time: new Date().toTimeString().split(' ')[0],
            editor: utils.editor
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="flex">
            <div class="flex flex-col px-5 w-full">
                <div class="card_header">
                    <slot name="header" />
                    <div class="card_time">{{time}}</div>
                </div>
                <slot name="body" />
                <div class="card_footer">
                    <slot name="footer" />
                    <a class="card_code" v-if="editor == 'vscode'" :href="`vscode://file/${data.call.file_path}:${data.call.line}`">{{data.call.file_name}}:{{data.call.line}}</a>
                    <a class="card_code" v-if="editor == 'php_storm'" :href="`phpstorm://open?url=file:/${data.call.file_path}&line=${data.call.line}`">{{data.call.file_name}}:{{data.call.line}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
