import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'
import axios from 'axios'

import { Note } from '@/typings'

class NotesState {
  notes: Note[] = []
}

class NotesGetters extends Getters<NotesState> {
  get notes(): Note[] {
    return this.state.notes
  }
}

class NotesMutations extends Mutations<NotesState> {
  changeNotes(notes: Note[]) {
    this.state.notes = notes
  }
}

class NotesActions extends Actions<NotesState, NotesGetters, NotesMutations, NotesActions> {
  async loadNotes() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    this.commit('changeNotes', data)
  }
}

export default new Module({
  state: NotesState,
  getters: NotesGetters,
  mutations: NotesMutations,
  actions: NotesActions,
})
