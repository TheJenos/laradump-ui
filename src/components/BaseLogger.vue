<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="flex">
            <div class="flex flex-col mx-5 w-full">
                <div class="card_header">
                    <slot name="header" />
                </div>
                <slot name="body" />
                <div class="card_footer">
                    <slot name="footer" />
                    <a class="card_code" :href="`vscode://file/${data.call.file_path}:${data.call.line}`">{{data.call.file_name}}:{{data.call.line}}</a>
                </div>
            </div>
        </div>
    </div>
</template>
