<template lang="jade">
div
  f7-view
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") Notification
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed")
      f7-page-content
        f7-content-block
          template(slot="inner")
            p
              f7-lazy-img(src="http://lorempixel.com/500/500/nature/1", width="100%")
            p.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet, semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel scelerisque dui. Morbi varius nibh eu finibus rutrum. 
            p
              f7-lazy-img(src="http://lorempixel.com/500/500/nature/2", width="100%")
            p.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet, semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel scelerisque dui. Morbi varius nibh eu finibus rutrum. 
            p            
              f7-lazy-img(src="http://lorempixel.com/500/500/nature/3", width="100%")
            p.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus viverra lectus sit amet lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque faucibus consectetur mauris eget lobortis. Maecenas efficitur efficitur mauris ac vehicula. Sed ut lectus laoreet, semper nisi vel, maximus massa. Duis at lorem vitae sem auctor condimentum a at neque. Phasellus vel scelerisque dui. Morbi varius nibh eu finibus rutrum. 
</template>