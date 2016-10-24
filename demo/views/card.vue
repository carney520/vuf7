<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") List
      f7-page-content
        f7-content-block-title SIMPLE CARD
        f7-card 
          template(slot="inner").
            This is simple card with plain text. But card could contain its own header, footer, list view, image, and any elements inside.           

        f7-card
          template(slot="header") Card Header
          template(slot="inner").
            Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
          template(slot="footer") Card Footer

        f7-content-block-title STYLED CARD
        f7-card.demo-card-header-pic(header-color="white", header-no-border, header-align="bottom")
          template(slot="header") Journey To Mountains
          template(slot="inner")
            p.color-gray Posted on January 12, 2016
            p.
              Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...
          template(slot="footer")
            a.link(href="#") Like
            a.link(href="#") Read more

        f7-list-block(title="Cards list", cards)
          f7-list-item
            f7-card
              template(slot="header") Card Header
              template(slot="inner").
                Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
              template(slot="footer") Card Footer
          f7-list-item
            f7-card
              template(slot="header") Card Header
              template(slot="inner").
                Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
              template(slot="footer") Card Footer
</template>

<style>
  .demo-card-header-pic .card-header {
    background-image: url(http://lorempixel.com/1000/600/nature/3/);
    height: 40vw;
    background-size: cover;
    background-position: center;
  }
</style>