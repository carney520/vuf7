<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") List
      f7-page-content
        f7-content-block-title USUAL BUTTONS
        p
          f7-button Button 1
        p
          f7-button Button 2

        f7-content-block-title ACTIVE BUTTON
        p
          f7-button(active) Button 1

        f7-content-block-title ROUND BUTTON
        p
          f7-button(round) Button 1
        p
          f7-button(round, active) Button Active

        f7-content-block-title BIG BUTTON
        p
          f7-button(big) Button 1
        p
          f7-button(round, big) Button Round
        p
          f7-button(round, big, active) Button Active

        f7-content-block-title FILL BUTTON
        p
          f7-button(fill) Button 1
        p
          f7-button(round, fill) Button Round
        p
          f7-button(round, fill, big) Button Active

        f7-content-block-title BUTTONS ROW
        p
          f7-buttons-row
            f7-button Button 1
            f7-button Button 2
            f7-button(active) Button 3
        p
          f7-buttons-row(color="red")
            f7-button Button 1
            f7-button Button 2
            f7-button Button 3
        p
          f7-buttons-row(color="orange")
            f7-button(round, active) Button 1
            f7-button(round) Button 2
            f7-button(round) Button 3

        f7-list-block(title="LIST BLOCK BUTTONS")
          f7-list-item
            f7-button(list) BUTTON1
          f7-list-item
            f7-button(list) BUTTON2
          f7-list-item
            f7-button(list) BUTTON3
        f7-content-block-title ANDROID SPEC
        p
          f7-button(raised) Button 1
        p
          f7-button(raised) Button 2
</template>