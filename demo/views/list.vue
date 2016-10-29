<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") List
      f7-page-content
        f7-list-block(title="List Block Title", label="List Block label")
          f7-list-item
            f7-list-content(title="Item Title")
              f7-badge(dot, slot="media")
                i.icon.icon-f7
              span label
          f7-list-item
            f7-list-content(title="Item with badge")
              f7-badge(text="5", slot="media")
                i.icon.icon-f7
              f7-badge(text="5")
          f7-list-divider List divider
          f7-list-item
            f7-list-content(title="link Item", link)
              f7-badge(text="120", overflow-count="99", slot="media")
                i.icon.icon-f7
              span Label

        f7-list-block(title="Only Title")
          f7-list-item
            f7-list-content(title="Item Title")
          f7-list-item
            f7-list-content(title="Item with badge")

        f7-list-block(title="Nested list")
          f7-list-item
            f7-list-content(title="Item Title")
          f7-list-item
            ul
              f7-list-item
                f7-list-content(title="Item Title")
              f7-list-item
                f7-list-content(title="Item Title")
          f7-list-item
            f7-list-content(title="Item with badge")


        f7-list-block(title="List Group")
          f7-list-group(title="Group1")
            f7-list-item
              f7-list-content(title="Item Title")
                i.icon.icon-f7(slot="media")
                span label
            f7-list-item
              f7-list-content(title="Item with badge")
                i.icon.icon-f7(slot="media")
                span.badge 5

          f7-list-group(title="Group2")
            f7-list-item
              f7-list-content(title="Item Title")
                i.icon.icon-f7(slot="media")
                span label
            f7-list-item
              f7-list-content(title="Item with badge")
                i.icon.icon-f7(slot="media")
                span.badge 5

        f7-list-block(title="Inset", inset)
          f7-list-item
            f7-list-content(title="Item Title")
              i.icon.icon-f7(slot="media")
              span label
          f7-list-item
            f7-list-content(title="Item with badge")
              i.icon.icon-f7(slot="media")
              span.badge 5

        f7-list-block(title="Tablet Inset", tablet-inset)
          f7-list-item
            f7-list-content(title="Item Title")
              i.icon.icon-f7(slot="media")
              span label
          f7-list-item
            f7-list-content(title="Item with badge")
              i.icon.icon-f7(slot="media")
              span.badge 5

        f7-list-block(title="Media List", media)
          f7-list-item
            f7-list-content(media, title="Title", subtitle="subtitle", text="some text here, some text here")
              img(slot="media", src="~assets/images/example.jpg", width="80")
              span label
          f7-list-item
            f7-list-content(media, title="Title", subtitle="subtitle", text="some text here, some text here")
              img(slot="media", src="~assets/images/example.jpg", width="80")
              span label

        f7-content-block
          p 
            a.open-sortable(href="#", data-sortable=".sortable") open sortable
          p
            a.close-sortable(href="#", data-sortable=".sortable") close sortable
          p
            a.toggle-sortable(href="#", data-sortable=".sortable") toggle sortable
        f7-list-block(title="Sortable", sortable)
          f7-list-item(sortable)
            f7-list-content(title="Item Title")
              i.icon.icon-f7(slot="media")
              span label
          f7-list-item(sortable)
            f7-list-content(title="Item with badge")
              i.icon.icon-f7(slot="media")
              span.badge 5
</template>          