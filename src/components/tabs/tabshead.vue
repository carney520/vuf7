<template lang="jade">
  .f7-tabshead
    slot
    .f7-tabshead-ink-bar(:style="barStyle", :class="barClasses")
</template>

<script>
  import {coerceNumber} from '../../helpers/coerces'
  export default {
    name: 'Tabshead',
    props: {
      index: {
        type: Number,
        coerce: coerceNumber,
        default: -1
      }
    },
    data () {
      return {
        length: this.$children.length,
        ready: false,
        direction: 'forward'
      }
    },
    computed: {
      barStyle () {
        return {
          left: `${this.index * (100 / this.length)}%`,
          right: `${(this.length - this.index - 1) * (100 / this.length)}%`,
          transition: !this.ready ? 'none' : null
        }
      },
      barClasses () {
        return [
          this.direction === 'forward' ? 'f7-tabshead-ink-bar-t-fw' : 'f7-tabshead-ink-bar-t-bw'
        ]
      }
    },
    watch: {
      index (val, old) {
        old > -1 && this.$children[old] && (this.$children[old].selected = false)
        val > -1 && this.$children[val] && (this.$children[val].selected = true)
        this.direction = val > old ? 'forward' : 'backward'
      }
    },
    methods: {
      updateIndex () {
        if (!this.$children) return
        this.length = this.$children.length
        let children = this.$children
        for (let i = 0, l = children.length; i < l; i++) {
          children[i].index = i
          if (children[i].selected) {
            this.index = i
          }
        }
      }
    },
    ready () {
      this.updateIndex()
      this.ready = true
    }
  }
</script>

<style lang="scss">
$tabshead-height: 2.5em;

.f7-tabshead {
  display: flex;
  background: #fff;
  height: $tabshead-height;
  position: relative;
}

.f7-tabshead-item {
  display: block;
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  line-height: $tabshead-height;
  font-size: 1.04em;
  text-align: center;
  color: #000; 
  &.selected {
    color: currentColor;
  }
}

.f7-tabshead-ink-bar {
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: currentColor;

  $trans-func: cubic-bezier(.35, 0, .25, 1);
  $trans-duration: .3s;

  &-t-fw {
    transition: right $trans-duration $trans-func, left $trans-duration $trans-func $trans-duration * .3;
  }
  &-t-bw {
    transition: left $trans-duration $trans-func, right $trans-duration $trans-func $trans-duration * .3;
  }
}
</style>