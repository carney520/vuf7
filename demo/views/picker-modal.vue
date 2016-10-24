<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
        span(slot="center") Picker Modal
      f7-page-content
        f7-content-block
          p
            a.open-picker Open picker
  f7-picker-modal
    f7-toolbar(slot="toolbar")
      .left
      .right
        a.close-picker Done
    f7-content-block
      h4 Info 1
      p The whoami utility displays your effective user ID as a name. 
</template>          