<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Number Pad
    f7-page(name="navbar", navbar-type="fixed")
      f7-page-content
        f7-list-block(title="BASIC")
          f7-list-item
            f7-list-content(input)
              f7-number-pad()

        f7-list-block(title="INLINE")
          f7-list-item
            f7-list-content(input)
              f7-number-pad(inline)

        f7-list-block(title="WITH MAX LENGTH")
          f7-list-item
            f7-list-content(input)
              f7-number-pad(:max-length="6")

        f7-list-block(title="TOOLBAR HIDED")
          f7-list-item
            f7-list-content(input)
              f7-number-pad(toolbar="false")

        f7-list-block(title="DOT BUTTON DISABLED")
          f7-list-item
            f7-list-content(input)
              f7-number-pad(dot-button="false")

        f7-list-block(title="DISABLED")
          f7-list-item
            f7-list-content(input)
              f7-number-pad(disabled)
</template>