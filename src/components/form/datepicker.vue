<template lang="jade">
  input(type="text", readonly)
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'
  import { warn } from '../../helpers/utils'

  // Format date
  function formatDate (date, p) {
    date = new Date(date)
    let year = date.getFullYear()
    let month = date.getMonth()
    let month1 = month + 1
    let day = date.getDate()
    let weekDay = date.getDay()

    return p.params.dateFormat
        .replace(/yyyy/g, year)
        .replace(/yy/g, (year + '').substring(2))
        .replace(/mm/g, month1 < 10 ? '0' + month1 : month1)
        .replace(/m(\W+)/g, month1 + '$1')
        .replace(/MM/g, p.params.monthNames[month])
        .replace(/M(\W+)/g, p.params.monthNamesShort[month] + '$1')
        .replace(/dd/g, day < 10 ? '0' + day : day)
        .replace(/d(\W+)/g, day + '$1')
        .replace(/DD/g, p.params.dayNames[weekDay])
        .replace(/D(\W+)/g, p.params.dayNamesShort[weekDay] + '$1')
  }

  function dateParse (date, isSecond = false) {
    if (date == null) return new Date()
    if (!(date instanceof Date)) {
      let time = new Date(date)

      if (Number.isNaN(time.getTime())) {
        let toNumber = Number.parseInt(date)
        if (Number.isNaN(toNumber)) {
          warn(new TypeError(`${date} is not a valid Date`))
          return new Date()
        } else {
          time = isSecond ? new Date(toNumber * 1000) : new Date(toNumber)
        }
      }
      return time
    } else {
      return new Date(date)
    }
  }

  export default {
    name: 'Datepicker',
    props: {
      inline: {},
      options: Object,
      popover: {
        type: Boolean,
        default: false,
        coerce: coerceBoolean
      },

      cssClass: String,
      toolbar: {
        type: Boolean,
        default: true,
        coerce: coerceBoolean
      },

      toolbarCloseText: String,

      /**
       * disabled dates
       * @type {DateRange}
       */
      disabledDates: [Function, Array, Object],
      /**
       * date events
       * @type {Array}
       */
      events: [Function, Array, Object],
      rangesClasses: Array,

      value: [Date, String, Array],
      date: [Date, Array],

      monthNames: Array,

      monthNamesShort: Array,

      dayNames: Array,

      dayNamesShort: Array,

      dateFormat: {
        type: String,
        default: 'yyyy-mm-dd'
      },

      // alias of dateFormat
      format: String,

      // function to format input value. accept values, values is array where each item represents selected dates
      formatValue: Function,

      multiple: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },

      range: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },

      min: Date,
      max: Date,

      // components visible
      showWeek: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      // alias of showWeek
      weekHeader: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      yearPicker: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      monthPicker: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      animate: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },

      closeOnSelect: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },

    methods: {
      open () {
        this._datepicker.open()
      },

      close () {
        this._datepicker.close()
      },

      nextMonth (duration) {
        this._datepicker.nextMonth(duration)
      },

      prevMonth (duration) {
        this._datepicker.prevMonth(duration)
      },

      nextYear () {
        this._datepicker.nextYear()
      },

      prevYear () {
        this._datepicker.prevYear()
      },

      setYearMonth (year, month, duration) {
        this._datepicker.setYearMonth(year, month, duration)
      },

      setValues (values) {
        this._datepicker.setValues(values)
      },

      parseValue (value) {
        if (Array.isArray(value)) {
          let dates = []
          for (let i = 0, l = value.length; i < l; i++) {
            dates.push(dateParse(value[i]))
          }

          return dates
        } else {
          let date = dateParse(value)
          return [date]
        }
      },

      stringifyValue (values) {
        if (this.multiple || this.range) {
          let formateds = []
          let dates = []
          for (let i = 0, l = values.length; i < l; i++) {
            formateds[i] = formatDate(values[i], this._datepicker)
            dates[i] = new Date(values[i])
          }

          this.value = formateds
          this.date = dates
        } else {
          this.value = formatDate(values[0], this._datepicker)
          this.date = new Date(values[0])
        }
      }
    },

    ready () {
      let dates = this.parseValue(this.value)
      let options = {
        input: this.$el,
        onlyOnPopover: this.popover,
        cssClass: this.cssClass,
        closeOnSelect: this.closeOnSelect,
        toolbar: this.toolbar,
        toolbarCloseText: this.toolbarCloseText || this.$copywriting('doneText'),
        disabled: this.disabledDates,
        value: dates,
        events: this.events,
        rangesClasses: this.rangesClasses,
        monthNames: this.monthNames || this.$copywriting('monthNames'),
        monthNamesShort: this.monthNamesShort || this.$copywriting('monthNamesShort'),
        dayNames: this.dayNames || this.$copywriting('dayNames'),
        dayNamesShort: this.dayNamesShort || this.$copywriting('dayNamesShort'),
        dateFormat: this.format || this.dateFormat,
        formatValue: this.formatValue,
        multiple: this.multiple,
        rangePicker: this.range,
        minDate: this.min,
        maxDate: this.max,
        weekHeader: this.showWeek || this.weekHeader,
        monthPicker: this.monthPicker,
        yearPicker: this.yearPicker
      }

      // inline datepicker
      if (this.inline) {
        options.container = this.inline
      }

      if (this.options) {
        options = {...options, ...this.options}
      }

      options.onChange = (p, values, displayValues) => {
        this.$nextTick(() => {
          this.stringifyValue(values)
        })
      }

      options.onOpen = (p) => {
        this.$emit('open', p)
      }

      options.onClose = (p) => {
        this.$emit('close', p)
      }

      this.$nextTick(() => {
        this._datepicker = this.$datepicker(options)
      })
    },

    beforeDestroy () {
      this._datepicker.destroy()
    }
  }

</script>