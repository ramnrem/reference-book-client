<template>
  <div class="main">
    <p>{{ text }}</p>
    <hello-world :msg="'some text'" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
@Options({
  components: {
    HelloWorld,
  },
})
export default class Main extends Vue {
  private text: string = 'hello world!'
}
</script>
