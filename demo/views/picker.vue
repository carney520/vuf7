<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Picker
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content
        f7-list-block(title="PICKER WITH SINGLE VALUE", :label="picker1 | json")
          f7-list-item
            f7-list-content(input)
              f7-picker(placeholder="Your Picker", :cols="cols1", :value.sync="picker1")

        f7-list-block(title="2 VALUE AND 3D-ROTATE EFFECT", :label="picker2 | json")
          f7-list-item
            f7-list-content(input)
              f7-picker(placeholder="2 Value", :cols="cols2", :value.sync="picker2", rotate-effect)
</template>

<script>
  export default {
    data () {
      return {
        picker1: null,
        picker2: [2, 5],
        cols1: [
          {
            textAlign: 'center',
            values: ['iphone4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone6', 'iphone6s']
          }
        ],
        cols2: [
          {
            textAlign: 'left',
            values: [1, 2, 3, 4, 5, 6],
            displayValues: ['iphone4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone6', 'iphone6s']
          },
          {
            textAlign: 'right',
            values: [1, 2, 3, 4, 5, 6],
            displayValues: ['iphone4', 'iphone4s', 'iphone5', 'iphone5s', 'iphone6', 'iphone6s']
          }
        ]
      }
    }
  }
</script>