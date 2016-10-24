<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(slot="left", f7-back) back
        span(slot="center") Searchbar
      f7-searchbar(search-list=".list-block-search")
      f7-page-content
        f7-content-block.searchbar-not-found.shit
          p(slot="inner")

        .list-block.searchbar-found.list-block-search
          ul
            li.item-content
              .item-inner
                .item-title Acura
            li.item-content
              .item-inner
                .item-title Audi
</template>