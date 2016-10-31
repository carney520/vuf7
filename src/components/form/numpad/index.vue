<template lang="jade">
  input(v-el:input, type="text", readonly, v-model="value", :disabled="disabled")
</template>

<script>
  // todo review
  // html click
  import Keypad from './keypad'
  import { coerceBoolean } from '../../../helpers/coerces'

  export default {
    name: 'NumberPad',
    props: {
      dotButton: {},
      dotCharacter: {},
      maxLength: {},
      value: {},
      disabled: {
        type: Boolean,
        coerce: coerceBoolean
      },
      inline: {
        type: Boolean,
        coerce: coerceBoolean
      },
      closeOnHTMLClick: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      scrollToInput: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      toolbar: {},
      toolbarCloseText: {}
    },
    data () {
      return {
        opened: false
      }
    },
    methods: {
      _initInputEvent () {
        let $input = this.$input = this.$$(this.$els.input)
        if (!this.inline) {
          $input.on('click', this._openOnInput)
        }
        $input.on('focus mousedown', e => e.preventDefault())
      },
      _initCloseOnHTMLClick () {
        if (!this.inline && this.closeOnHTMLClick) {
          this.$$('html').on('click', this._handleClickHTML)
        }
      },
      // 这里要计算page-content 的空间，以便聚焦input
      _openOnInput (e) {
        e.preventDefault()
        if (this.opened) return
        // 打开picker
        this.open()
        // 以input有滚动的空间
        if (this.scrollToInput) {
          let $pageContent = this.$input.parents('.page-content')
          if ($pageContent.length === 0) return
          let paddingTop = parseInt($pageContent.css('padding-top'), 10)
          let paddingBottom = parseInt($pageContent.css('padding-bottom'), 10)
          let keypadHeight = this.$keypad.height()
            // 视口高度，减去顶部内边距(被navbar占有) 以及picker的高度
          let pageHeight = $pageContent[0].offsetHeight - paddingTop - keypadHeight
            // 滚动高度
          let pageScrollHeight = $pageContent[0].scrollHeight - paddingTop - keypadHeight
          let newPaddingBottom
          // input 底部距离顶部的距离
          let inputTop = this.$input.offset().top - paddingTop + this.$input[0].offsetHeight

          if (inputTop > pageHeight) {
            let scrollTop = $pageContent.scrollTop() + inputTop - pageHeight
            if (scrollTop + pageHeight > pageScrollHeight) {
              newPaddingBottom = scrollTop + pageHeight - pageScrollHeight + paddingBottom
              if (pageHeight === pageScrollHeight) {
                newPaddingBottom = keypadHeight
              }

              $pageContent.css({'padding-bottom': newPaddingBottom + 'px'})
            }
            $pageContent.scrollTop(scrollTop, 300)
          }
        }
      },
      // 处理html的点击事件
      _handleClickHTML (e) {
        if (e.target !== this.$els.input && this.$$(e.target).parents('.picker-modal').length === 0) {
          this.close()
        }
      },
      open () {
        if (!this.opened && !this.inline) {
          let container = this.$keypad = this.$$(this.$app.pickerModal(this._keypad.$el))
          // 通过监听picker modal 的close事件来处理关闭，因为不是picker modal可以自己关闭
          container.on('close', this._onPickerClose)
          this.opened = true
          if (this.$app.params.material) this.$input.trigger('focus')
          this.$emit('open', this)
        }
      },
      close () {
        if (!this.opened && !this.inline) return
        this.$app.closeModal(this._keypad.$el)
      },
      _onPickerClose () {
        this.opened = false
        let $pageContent = this.$input.parents('.page-content')
        $pageContent.css({'padding-bottom': ''})
        if (this.$app.params.material) this.$input.trigger('blur')
        this.$emit('close', this)
      }
    },
    created () {
      const tempElement = document.createElement('div')
      const Vue = this.constructor.super
      const _Keypad = Vue.extend(Keypad)
      let {dotButton, dotCharacter, maxLength, inline, toolbar, toolbarCloseText} = this
      this._keypad = new _Keypad({
        el: tempElement,
        replace: true,
        propsData: {dotButton, dotCharacter, maxLength, inline, toolbar, toolbarCloseText}
      })
      // make _keypad to auto destroy
      this.$children.push(this._keypad)
      this._keypad.$parent = this

      // listen change
      this._keypad.$on('change', (value) => {
        this.value = value
      })
    },
    attached () {
      // attach
      if (this.inline) {
        this._keypad.$after(this.$els.input)
        this.opened = true
      } else {
        this._keypad.$appendTo('body')
      }
    },
    detached () {
      this._keypad.$remove()
    },
    ready () {
      this._initInputEvent()
      this._initCloseOnHTMLClick()
    },
    beforeDestroy () {
      this.$input.off('click focus', this._openOnInput)
      this.$$('html').off('click')
    }
  }
</script>