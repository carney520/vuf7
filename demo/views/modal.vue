<template lang="jade">
div
  f7-view
    f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
      f7-navbar
        span(f7-back, slot="left") back
        span(slot="center") Modal
      f7-page-content
        f7-content-block(title="Alert")
          p
            a(href="javascript:", @click="$alert('Here goes alert text')") alert with text
          p
            a(href="javascript:", @click="$alert('Here goes alert text', 'Custom Title')") alert with text and title
          p
            a(href="javascript:", @click="$alert('Here goes alert text', 'Custom Title', callback)") alert with text and title and callback

        f7-content-block(title="Confirm")
          p
            a(href="javascript:", @click="$confirm('Are you sure', ok)") confirm with text and ok callback
          p
            a(href="javascript:", @click="$confirm('Are you sure', ok, cancel)") confirm with text, ok and cancel callback
          p
            a(href="javascript:", @click="$confirm('Are you sure', 'Custom Title', ok, cancel)") confirm with text, Title, ok and cancel callback

        f7-content-block(title="Prompt")
          p
            a(href="javascript:", @click="$prompt('Whats your name', okPrompt)") Prompt with text and ok callback
          p
            a(href="javascript:", @click="$prompt('Whats your name', okPrompt, cancel)") Prompt with text and ok, cancel callback

        f7-content-block(title="Login & Password")
          p
            a(href="javascript:", @click="$modalLogin('login', login)") login Modal
          p
            a(href="javascript:", @click="$modalPassword('login', password)") password Modal

        f7-content-block(title="Preloader")
          p
            button(@click="showPreloader") show
            button(@click="showPreloader('Custtom title')") custom title

        f7-content-block(title="Indicator")
          p
            button(@click="showIndicator") show

        f7-content-block(title="Custom modal")
          p
            button(@click="showCustomModal") show
</template>

<script>
  export default {
    methods: {
      callback () {
        this.$alert('Button Clicked')
      },

      ok () {
        this.$alert('You clicked ok Button')
      },

      cancel () {
        this.$alert('You clicked cancel Button')
      },

      okPrompt (name) {
        this.$alert(`Your name is ${name}`)
      },

      login (username, password) {
        this.$alert(`name: ${username}; password: ${password}`)
      },

      password (password) {
        this.$alert(`password: ${password}`)
      },

      showPreloader (title) {
        this.$showPreloader(typeof title === 'string' ? title : void(0))
        setTimeout(() => {
          this.$hidePreloader()
        }, 3000)
      },

      showIndicator () {
        this.$showIndicator()
        setTimeout(() => {
          this.$hideIndicator()
        }, 3000)
      },

      showCustomModal () {
        this.$modal({
          title: 'Custom Title',
          text: 'custom text',
          buttons: [
            {
              text: 'one',
              bold: true,
              close: true,
              onClick: () => {
                this.$alert('clicked one')
              },
            },

            {
              text: 'two',
              close: true,
              onClick: () => {
                this.$alert('clicked two')
              },
            },
          ],
        })
      },
    },
  }
</script>