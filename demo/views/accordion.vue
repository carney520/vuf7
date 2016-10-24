<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") List
      f7-page-content
        f7-list-block(accordion)
          f7-list-item(accordion)
            f7-list-content(title="Item1", accordion)
            template(slot="accordion-content")
              f7-content-block
                p.
                  Item 4 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue.
          f7-list-item(accordion)
            f7-list-content(title="Item1", accordion)
            template(slot="accordion-content")
              f7-content-block
                p.
                  Item 4 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue.
        f7-accordion-list
          f7-accordion-item
            template(slot="toggle")
              span Custom Accordion
            p.
              Item 4 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue.
</template>