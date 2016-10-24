<style lang="scss">

  .back-transition,
  .forward-transition {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform .3s ease;
  }

  .forward-enter {
    transform: translate3d(100%, 0, 0);
  }

  .forward-leave {
    transform: translate3d(-20%, 0, 0);
    opacity: .5;
  }

  .back-enter {
    transform: translate3d(-100%, 0, 0);
  }

  .back-leave {
    transform: translate3d(20%, 0, 0);
    opacity: .5;
  }

</style>