<template>
  <div>{{ msg }}</div>
  <div>
    {{ stored }}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true })
  msg!: string

  private get stored() {
    return this.$store.state.notes.title
  }
}
</script>
