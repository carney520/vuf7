<!-- note: don't use display value -->
<template lang="jade">
  input(type="text", :readonly="readonly", v-model="inputValue")
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Picker',
    props: {
      value: {},
      inputValue: {},
      // format input value
      formatValue: Function,
      // inline mode
      inline: [String, HTMLElement],
      // set "readonly" attribute on specified input
      readonly: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      //  scroll to input when picker opened
      scrollToInput: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      //  force popover
      popover: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },
      // Additional CSS class name to be set on picker modal
      cssClass: String,
      //  enables picker modal toolbar
      toolbar: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },
      toolbarCloseText: String,
      //  Enable 3D roatet Effect
      rotateEffect: {
        type: Boolean,
        coerce: coerceBoolean
      },
      //  render data
      cols: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        opened: false
      }
    },

    computed: {
      multiple () {
        return this.cols.length > 1
      }
    },

    methods: {
      setValues (value, duration) {
        value = typeof value === 'string' ? [value] : value
        this._picker.setValues(value, duration)
      },
      forceUpdate () {
        this._picker.updateValue()
      },
      open () {
        this._picker.open()
      },
      close () {
        this._picker.close()
      },
      getCols () {
        return this._picker.cols
      },
      getDisplayValue () {
        return this._picker.displayValue
      },

      _initializePicker () {
        let p = this._picker
        p.initialize = () => {
          p._temp = this.$$('<div>')
          p.layout()
          p._temp.append(this.$$(p.pickerHTML))
          // initialize cols
          p._temp.find('.picker-items-col').each(function () {
            let updateItems = true
            if ((!p.initialized && p.params.value) || (p.initialized && p.value)) updateItems = false
            p.initPickerCol(this, updateItems)
          })
          if (!p.initialized) {
            if (p.value) p.setValue(p.value, 0)
            else if (p.params.value) {
              p.setValue(p.params.value, 0)
            }
          } else {
            if (p.value) p.setValue(p.value, 0)
          }

          p.initialized = true
        }

        p.initialize()
      }
    },

    ready () {
      let options = {
        input: this.$el,
        inputReadOnly: this.readonly,
        formatValue: this.formatValue,
        scrollToInput: this.scrollToInput,
        onlyOnPopover: this.popover,
        cssClass: this.cssClass,
        toolbar: this.toolbar,
        toolbarCloseText: this.toolbarCloseText || this.$copywriting('doneText'),
        rotateEffect: this.rotateEffect,
        value: Array.isArray(this.value) ? this.value : [this.value],
        cols: this.cols
      }

      if (this.inline) {
        options.container = this.inline
      }

      options.onChange = (picker, values, displayValues) => {
        this.value = this.multiple ? values : values[0]
      }

      options.onOpen = (picker) => {
        this.opened = true
        this.$emit('open', picker)
      }

      options.onClose = (picker) => {
        this.opened = false
        this.$emit('close', picker)
      }

      this.$nextTick(() => {
        this._picker = this.$picker(options)
        this._initializePicker()
        
        if (this._picker._temp) {
          let p = this._picker
          p._temp.find('.picker-items-col').each(function () {
            p.destroyPickerCol(this)
          })
          p._temp = null
        }
      })
    },

    beforeDestroy () {
      this._picker.destroy()
    }
  }
</script>