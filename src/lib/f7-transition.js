/**
 * fork form vue-router-transition
 * @author weinot
 * @github weinot/vue-router-transition
 * @type {String}
 */
const HIS_KEY = '$$f7_router_history'
const sessionStorage = window.sessionStorage
const DIRECTION = {
  FORWARD: 'forward',
  BACK: 'back'
}

function installRouterTransition (Vue, VueRouter, {indexPath = '/'} = {}) {
  const stackHistory = sessionStorage.getItem(HIS_KEY)
  let stack = [indexPath]

  if (stackHistory) {
    stack = JSON.parse(stackHistory)
  }

  const _ = Vue.util
  const routerViewDef = Vue.elementDirective('router-view')
  const originalRouterViewDef = _.extend({}, routerViewDef)
  const _onTransitionValidated = VueRouter.prototype._onTransitionValidated
  const transitionDef = Vue.internalDirectives.transition

  // override vue-router and internal transition directive
  _.extend(VueRouter.prototype, {
    _onTransitionValidated (transition) {
      // 通过判断顺序来定义过度的方向
      const { from, to } = transition
      const fromPath = from.path
      const toPath = to.path
      const fromStackIndex = stack.indexOf(fromPath)
      const toStackIndex = stack.indexOf(toPath)
      let direction

      if (toStackIndex > -1) {
        direction = toStackIndex > fromStackIndex ? DIRECTION.FORWARD : DIRECTION.BACK
      } else {
        direction = DIRECTION.FORWARD
        stack.push(toPath)
        sessionStorage.setItem(HIS_KEY, JSON.stringify(stack))
      }

      // $root
      this.app.$$transitionInfo = {
        direction
      }

      _onTransitionValidated.apply(this, arguments)
    }
  })

  _.extend(routerViewDef, {
    transition (target, cb) {
      const self = this
      const { vm } = this

      // 定义了router transition
      if (vm.$$routerTransition) {
        const { $$transitionInfo } = vm.$root

        // 修改$$transition 变量，从而应用到transition
        vm.$$transition = vm.$$routerTransition[$$transitionInfo.direction]

        Vue.nextTick(() => {
          originalRouterViewDef.transition.call(self, target, cb)
        })
      } else {
        originalRouterViewDef.transition.call(self, target, cb)
      }
    }
  })

  Vue.directive('f7-transition', {
    priority: 1101,
    bind () {
      const { vm } = this
      _.defineReactive(vm, '$$transition', DIRECTION.FORWARD)
      this.literal = false
      this.expression = '$$transition'
      this.vm.$$routerTransition = {
        forward: DIRECTION.FORWARD,
        back: DIRECTION.BACK
      }
    },
    update: transitionDef.update
  })
}

export default installRouterTransition
