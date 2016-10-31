const routeMap = {
  '/': {
    name: 'index',
    component: (resolve) => {
      require(['views/index'], resolve)
    }
  },
  '/foo': {
    name: 'foo',
    component: (resolve) => {
      require(['views/foo'], resolve)
    }
  },
  '/navbar/': {
    name: 'navbar',
    component: (resolve) => {
      require(['views/navbar'], resolve)
    }
  },

  '/navbar/static': {
    name: 'navbar-static',
    component: (resolve) => {
      require(['views/navbar-static'], resolve)
    }
  },
  '/navbar/fixed': {
    name: 'navbar-fixed',
    component: (resolve) => {
      require(['views/navbar-fixed'], resolve)
    }
  },
  '/navbar/method': {
    name: 'navbar-method',
    component: (resolve) => {
      require(['views/navbar-method'], resolve)
    }
  },

  '/navbar/subnavbar': {
    name: 'navbar-subnavbar',
    component: (resolve) => {
      require(['views/navbar-subnavbar'], resolve)
    }
  },
  '/toolbar/': {
    name: 'toolbar',
    component: (resolve) => {
      require(['views/toolbar'], resolve)
    }
  },
  '/toolbar/icons': {
    name: 'toolbar-icons',
    component: (resolve) => {
      require(['views/toolbar-icons'], resolve)
    }
  },
  '/grid': {
    name: 'grid',
    component: (resolve) => {
      require(['views/grid'], resolve)
    }
  },
  '/content-block': {
    name: 'content-block',
    component: (resolve) => {
      require(['views/content-block'], resolve)
    }
  },
  '/panel': {
    name: 'panel',
    component: (resolve) => {
      require(['views/panel'], resolve)
    }
  },

  '/searchbar': {
    name: 'searchbar',
    component: (resolve) => {
      require(['views/searchbar'], resolve)
    }
  },

  '/modal': {
    name: 'modal',
    component: (resolve) => {
      require(['views/modal'], resolve)
    }
  },
  '/popup': {
    name: 'popup',
    component: (resolve) => {
      require(['views/popup'], resolve)
    }
  },

  '/popover': {
    name: 'popover',
    component: (resolve) => {
      require(['views/popover'], resolve)
    }
  },

  '/picker-modal': {
    name: 'picker-modal',
    component: (resolve) => {
      require(['views/picker-modal'], resolve)
    }
  },

  '/list': {
    name: 'list',
    component: (resolve) => {
      require(['views/list'], resolve)
    }
  },

  '/contacts': {
    name: 'contacts',
    component: (resolve) => {
      require(['views/contact'], resolve)
    }
  },

  '/swipeout': {
    name: 'swipeout',
    component: (resolve) => {
      require(['views/swipeout'], resolve)
    }
  },

  '/accordion': {
    name: 'accordion',
    component: (resolve) => {
      require(['views/accordion'], resolve)
    }
  },

  '/card': {
    name: 'card',
    component: (resolve) => {
      require(['views/card'], resolve)
    }
  },

  '/button': {
    name: 'button',
    component: (resolve) => {
      require(['views/button'], resolve)
    }
  },

  '/form-layout': {
    name: 'form-layout',
    component: (resolve) => {
      require(['views/form-layout'], resolve)
    }
  },

  '/tabs': {
    name: 'tabs',
    component: (resolve) => {
      require(['views/tabs'], resolve)
    }
  },

  '/tabs-swipeable': {
    name: 'tabs-swipeable',
    component: (resolve) => {
      require(['views/tabs-swipeable'], resolve)
    }
  },

  '/photo-browser': {
    name: 'photo-browser',
    component: (resolve) => {
      require(['views/photo-browser'], resolve)
    }
  },

  '/datepicker': {
    name: 'datepicker',
    component: (resolve) => {
      require(['views/datepicker'], resolve)
    }
  },

  '/picker': {
    name: 'picker',
    component: (resolve) => {
      require(['views/picker'], resolve)
    }
  },

  '/number-pad': {
    name: 'number-pad',
    component: (resolve) => {
      require(['views/number-pad'], resolve)
    }
  },

  '/pull-to-refresh': {
    name: 'pull-to-refresh',
    component: (resolve) => {
      require(['views/pull-to-refresh'], resolve)
    }
  },

  '/infinite-scroll': {
    name: 'infinite-scroll',
    component: (resolve) => {
      require(['views/infinite-scroll'], resolve)
    }
  },

  '/notification': {
    name: 'notification',
    component: (resolve) => {
      require(['views/notification'], resolve)
    }
  },

  '/lazyload': {
    name: 'lazyload',
    component: (resolve) => {
      require(['views/lazyload'], resolve)
    }
  }
}

const redirectMap = {
}

/**
* config Routers
*/
export default function configRouterMap (router) {
  router.map(routeMap)
  router.redirect(redirectMap)
}
