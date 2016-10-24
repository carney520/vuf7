<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Datepicker
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content
        f7-list-block(title="DEFAULT SETUP", :label="datepicker1 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="Your Date here", :value.sync="datepicker1")

        f7-list-block(title="CUSTOM FORMAT", :label="datepicker2 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="CUSTOM FORMAT", :value.sync="datepicker2", format="DD, MM dd, yyyy")

        f7-list-block(title="MULTIPLE", :label="datepicker3 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="MULTIPLE", :value.sync="datepicker3", multiple)

        f7-list-block(title="RANGE", :label="datepicker4 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="RANGE", :value.sync="datepicker4", range)

        f7-list-block(title="WITH EVENTS", :label="datepicker5 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="WITH EVENTS", :value.sync="datepicker5", :events="events")

        f7-list-block(title="DISABLED", :label="datepicker5 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="DISABLED", :value.sync="datepicker5", :disabled-dates="events")

        f7-list-block(title="INLINE", :label="datepicker5 | json")
          f7-list-item
            f7-list-content(input)
              f7-datepicker(placeholder="INLINE", :value.sync="datepicker5", inline=".inline-datepicker", year-picker="false", show-week="false")
              .inline-datepicker
</template>

<script>
  export default {
    data () {
      let today = new Date()
      let weekLater = new Date()
      weekLater.setDate(today.getDate() + 7)
      return {
        datepicker1: null,
        datepicker2: '2012-12-12 12:12',
        datepicker3: '2012-12-12 12:12',
        datepicker4: ['2012-12-12 12:12', new Date()],
        datepicker5: today,
        events: {from: today, to: weekLater},
      }
    }
  } 
</script>