<script setup>
import { onMounted } from 'vue'
import SocketIO from '../socket/index.js'
import util from '../composition/logs.js'
import ModelLogger from './Loggers/ModelLogger.vue'
import QueryLogger from './Loggers/QueryLogger.vue'
import MeasureDumper from './Loggers/MeasureDumper.vue'
import MailLogger from './Loggers/MailLogger.vue'

const logs = util.logs

onMounted(() => {
  SocketIO.getSocket().on('log', (log) => {
    util.logs.value.push(log)
  })
})

</script>

<template>
  <div class="mt-20">
    <div :data="log" v-for="(log,index) in logs" :key="index">
      <ModelLogger v-if="log.type=='dump'" :data="log" />
      <QueryLogger v-if="log.type=='query'" :data="log" />
      <MeasureDumper v-if="log.type=='measure'" :data="log" />
      <MailLogger v-if="log.type=='mail'" :data="log" />
    </div>
  </div>
</template>
