<template>
  <div class='fulpanel'>
    <div v-for="tool in tools" class="toolpanel">
      <div>{{tool.name}}</div>
      <component :is="tool.name"></component>
    </div>
  </div>
</template>

<script>
  import clock from '@/components/toolbox/clock.vue'
  export default {
    name: 'toolbox',
    components: {
      'clock': clock
    },
    data () {
      return {
        tools: [
          {
            name: 'clock'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.toolpanel{
  float:left;
  margin:20px;
  width:300px;
  height:300px;
  border:2px solid #2c3e50;
  border-radius:5px;
  box-shadow: 5px 5px 5px #2c3e50;
}

</style>
