<template lang="jade">
div
  f7-popover.popover-about
    f7-content-block
      p About
      p.
        The whoami utility displays your effective user ID as a name. 
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
        span(slot="center") Popover
      f7-page-content
        f7-content-block
          p
            span.open-popover Open Abount popover
</template>