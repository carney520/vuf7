<template lang="jade">
  a.f7-notice-bar
    template(v-if="type")
      f7-icon.f7-notice-bar-icon(name="ios-close-circle", v-if="type === 'error'")
      f7-icon.f7-notice-bar-icon(name="ios-alert", v-if="type === 'warn'")
      f7-icon.f7-notice-bar-icon(name="ios-checkmark-circle", v-if="type === 'success'")
      f7-icon.f7-notice-bar-icon(name="ios-infomation-circle", v-if="type === 'info'")
    .f7-notice-bar-content
      slot
    f7-icon.f7-notice-bar-action(name="ios-arrow-forward", v-if="link")
    f7-icon.f7-notice-bar-action(name="ios-close", v-if="closable")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'
  export default {
    name: 'NoticeBar',
    props: {
      closable: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      link: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      type: {
        type: String,
        validator (value) {
          return ['success', 'error', 'info', 'warn'].indexOf(value) !== -1
        }
      }
    }
  }
</script>

<style lang="scss">
.f7-notice-bar {
  display: flex;
  align-items: center;
  background-color: #fffada;
  height: 2em;
  overflow: hidden;
  color: #f86e21;
  font-size: .9em;
  line-height: 2em;
}

.f7-notice-bar-content {
  flex: 1;
  width: auto;
  margin: auto .6em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.f7-notice-bar-icon,
.f7-notice-bar-action {
  width: 1.4em !important;
  height: 1.4em !important;
}
.f7-notice-bar-icon {
  margin-left: .6em;
  &.f7-notice-bar-content {
    margin-left: .1em;
  }
}

.f7-notice-bar-action {
  margin-right: .6em;
}
</style>