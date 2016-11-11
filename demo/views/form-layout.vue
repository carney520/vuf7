<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") Form Layout
      f7-page-content
        f7-list-block(title="FULL LAYOUT")
          f7-list-item
            f7-list-content(input, title="Name")
              i.icon.icon-form-name(slot="media")
              input(type="text", placeholder="Your name")
          f7-list-item
            f7-list-content(input, title="E-mail")
              i.icon.icon-form-email(slot="media")
              input(type="email", placeholder="E-mail")
          f7-list-item
            f7-list-content(input, title="Gender")
              i.icon.icon-form-gender(slot="media")
              select
                option Male
                option Female
          f7-list-item
            f7-list-content(input, title="Birth date")
              i.icon.icon-form-calendar(slot="media")
              input(type="date", placeholder="Birth day", value="2012-12-12")
          f7-list-item
            f7-list-content(input, title="Date time")
              i.icon.icon-form-calendar(slot="media")
              input(type="datetime-local", value="2012-12-12T12:12:12")
          f7-list-item
            f7-list-content(input, title="Switch")
              i.icon.icon-form-toggle(slot="media")
              f7-switch(@change="$alert('change')")
          f7-list-item
            f7-list-content(input, title="slider")
              i.icon.icon-form-settings(slot="media")
              f7-slider(min="0", max="100", value="50", step="1")
          f7-list-item(align="top")
            f7-list-content(input, title="textarea")
              i.icon.icon-form-comment(slot="media")
              textarea
          f7-list-item(align="top")
            f7-list-content(input, title="textarea")
              i.icon.icon-form-comment(slot="media")
              f7-textarea(resizable)
          f7-list-item
            f7-list-content(input, title="number pad")
              i.icon.icon-form-comment(slot="media")
              f7-number-pad
        f7-list-block(title="LIST CHECKBOX", :label="checkbox | json")
          f7-list-item
            f7-list-checkbox(checked, :value.sync="checkbox", checked-value="Books") Books
          f7-list-item
            f7-list-checkbox(:value.sync="checkbox", checked-value="Movies") Movies
          f7-list-item
            f7-list-checkbox(:value.sync="checkbox", checked-value="Food") Food
          f7-list-item
            f7-list-checkbox(:value.sync="checkbox", checked-value="Drinks") Drinks

        f7-list-block(title="LIST RADIO", :label="radio | json")
          f7-list-item
            f7-list-radio(:value.sync="radio", checked-value="One", checked) One
          f7-list-item
            f7-list-radio(:value.sync="radio", checked-value="Two") Two
          f7-list-item
            f7-list-radio(:value.sync="radio", checked-value="Three") Three

        f7-list-block(title="MEDIA LIST CHECKBOX", :label="checkbox2 | json", media)
          f7-list-item
            f7-list-checkbox(checked, :value.sync="checkbox2", checked-value="Facebook", title="Facebook")
              span 17:12
              span(slot="subtitle") New messages from John Doe
              span(slot="text") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
          f7-list-item
            f7-list-checkbox(:value.sync="checkbox2", checked-value="John Doe", title="John Doe (via Twitter)")
              span 17:13
              span(slot="subtitle") John Doe (@_johndoe) mentioned you
              span(slot="text") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 

        f7-list-block(title="MEDIA LIST RADIO", :label="radio2 | json", media)
          f7-list-item
            f7-list-radio(checked, :value.sync="radio2", checked-value="Facebook", title="Facebook")
              span 17:12
              img(slot="media", src="http://lorempixel.com/200/200/abstract/1", width="80")
              span(slot="subtitle") New messages from John Doe
              span(slot="text") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 
          f7-list-item
            f7-list-radio(:value.sync="radio2", checked-value="John Doe", title="John Doe (via Twitter)")
              span 17:13
              img(slot="media", src="http://lorempixel.com/200/200/abstract/1", width="80")
              span(slot="subtitle") John Doe (@_johndoe) mentioned you
              span(slot="text") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla 

        f7-list-block(title="LIST SMART SELECT SIMPLE", :label="smartSelect")
          f7-list-item
            f7-list-smart-select
              select(name="SIMPLE", v-model="smartSelect")
                option(value="one", selected) ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="ITEM ONE")

        f7-list-block(title="LIST SMART SELECT WITH SEARCHBAR", :label="smartSelect2")
          f7-list-item
            f7-list-smart-select(searchbar="true", searchbar-placeholder="搜索", searchbar-cancel-text="取消")
              select(name="SEARCHBAR", v-model="smartSelect2")
                option(value="one", selected) ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="WITH SEARCHBAR")
          f7-list-item
            f7-list-smart-select(open-in="popup", close-text="关闭")
              select(name="SEARCHBAR", v-model="smartSelect2")
                option(value="one", selected) ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="OPEN WITH POPUP")
          f7-list-item
            f7-list-smart-select(open-in="picker", close-text="关闭")
              select(name="SEARCHBAR", v-model="smartSelect2")
                option(value="one", selected) ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="OPEN WITH PICKER")
          f7-list-item
            f7-list-smart-select(open-in="picker", close-text="关闭", picker-height="300")
              select(name="SEARCHBAR", v-model="smartSelect2")
                option(value="one", selected) ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="OPEN WITH PICKER, CUSTOM HEIGHT")

        f7-list-block(title="LIST SMART SELECT WITH CUSTOM ICONS & COLOR")
          f7-list-item
            f7-list-smart-select(searchbar="true", searchbar-placeholder="搜索", searchbar-cancel-text="取消")
              select(name="SEARCHBAR")
                option(value="one", data-option-color="red", selected) ONE
                option(value="two", data-option-image="http://lorempixel.com/29/29/") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="CUSTOM ICON AND COLOR ")

        f7-list-block(title="LIST SMART SELECT CLOSE ON SELECT")
          f7-list-item
            f7-list-smart-select(searchbar="true", searchbar-placeholder="搜索", searchbar-cancel-text="取消", close-on-select)
              select(name="SEARCHBAR")
                option(value="one", data-option-color="red", selected) ONE
                option(value="two", data-option-image="http://lorempixel.com/29/29/") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="CLOSE ON SELECT")

        f7-list-block(title="LIST SMART SELECT AUTO SET LIST CONTENT")
          f7-list-item
            f7-list-smart-select(auto-set-list-content)
              select
                option(value="one") ONE
                option(value="two") TWO
                option(value="three") THREE
              f7-list-content(slot="content", title="AUTO SET LIST CONTENT")

</template>

<script>
  import NumberPad from '../../src/components/form/numpad'
  export default {
    components: {
      NumberPad
    },
    data () {
      return {
        checkbox: [],
        checkbox2: [],
        radio: null,
        radio2: null,
        smartSelect: null,
        smartSelect2: null,
        numpad: ''
      }
    }
  }
</script>