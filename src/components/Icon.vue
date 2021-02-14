<template>
  <div class="icon" :class="[`icon--${name}`, `icon--normal`, 'has-align-fix']" v-html="icons[name]" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import icons from './icons.json'

@Component
export default class Icon extends Vue {
  @Prop({ type: String, required: true })
  name!: string

  private readonly icons = icons
}
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 0.3rem;
  top: -0.05rem;
  fill: currentColor;

  // &.has-align-fix {
  // 	top: -.1rem;
  // }

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d='M0 0h24v24H0z'] {
    display: none;
  }
}
</style>
