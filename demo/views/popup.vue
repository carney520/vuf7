<template lang="jade">
div
  f7-popup.popup-man
    f7-content-block
      p man
      p 
        span.close-popup Close me
      p.
        man formats and displays the on-line manual pages.  If you specify section, man only looks in that section of the manual.  name is  normally  the
        name  of the manual page, which is typically the name of a command, function, or file.  However, if name contains a slash (/) then man interprets
        it as a file specification, so that you can do man ./foo.5 or even man /cd/foo/bar.1.gz.
      p.
        See below for a description of where man looks for the manual page files.

  f7-popup.popup-ls
    f7-content-block
      p ls
      p 
        span.close-popup Close me
      p.
        For each operand that names a file of a type other than directory, ls displays its name as well as any requested, associated information.  For each
        operand that names a file of type directory, ls displays the names of files contained within that directory, as well as any requested, associated
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
        span(slot="center") Popup
      f7-page-content
        f7-content-block
          p
            a.open-popup(data-popup=".popup-man") Open 'man' popup
          p
            a.open-popup(data-popup=".popup-ls") Open 'ls' popup
</template>