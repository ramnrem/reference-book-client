import Vue from 'vue'
import * as Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import notes from './modules/notes'

Vue.use(Vuex)

const rootModule = new Module({
  modules: {
    notes,
  },
})

export default createStore(rootModule, {
  strict: process.env.NODE_ENV !== 'production',
})
