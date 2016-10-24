<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
        span(slot="center") List
      f7-page-content
        f7-list-block(title="List Block Title", label="List Block label")
          f7-list-item(swipeable)
            f7-list-content(title="Actions right")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2
          f7-list-item(swipeable)
            f7-list-content(title="Actions left")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-left")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2
          f7-list-item(swipeable)
            f7-list-content(title="Actions both site")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-left")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2

          f7-list-item(swipeable)
            f7-list-content(title="Actions close")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-left")
              f7-list-action(background="orange", close) Close

          f7-list-item(swipeable)
            f7-list-content(title="Actions Delete")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action(delete, confirm-title="Oop", confirm-text="Are you sure") Delete

          f7-list-item(swipeable)
            f7-list-content(title="OverSwipe Delete")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Normal
              f7-list-action(delete, overswipe, confirm-title="Oop", confirm-text="Are you sure") Delete

        f7-list-block(title="Swipeout Event")
          f7-list-item(swipeable, @opened="$alert('opened')")
            f7-list-content(title="opened")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2

          f7-list-item(swipeable, @open="$alert('open')")
            f7-list-content(title="open")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2

          f7-list-item(swipeable, @close="$alert('close')")
            f7-list-content(title="close")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2

          f7-list-item(swipeable, @closed="$alert('closed')")
            f7-list-content(title="closed")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(background="orange") Action2

          f7-list-item(swipeable, @delete="destroy", @deleted="$alert('deleted')")
            f7-list-content(title="delete & deleted")
              i.icon.icon-f7(slot="media")
              span label
            template(slot="actions-right")
              f7-list-action Action 1
              f7-list-action(delete, confirm-title="deleting..", confirm-text="Are you sure?") Delete
</template>

<script>
  export default {
    methods: {
      destroy (event) {
        event.preventDefault()
      },
    },
  }
</script>
