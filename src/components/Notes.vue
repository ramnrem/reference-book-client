<template>
  <div class="notes-wrap">
    <button @click="loadNotes">load</button>

    <div v-if="notes.length">
      <div v-for="note in notes" :key="note.id">
        {{ note.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'

import { Note } from '@/typings'

@Component
export default class Notes extends Vue {
  @Action('notes/loadNotes')
  readonly loadNotes!: () => void

  @State(({ notes }) => notes.notes)
  readonly notes!: Note[]
}
</script>
