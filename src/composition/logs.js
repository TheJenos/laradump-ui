import { ref } from 'vue'

const logs = ref([])
const editor = ref(window.editor || 'vscode')

export default { logs, editor }