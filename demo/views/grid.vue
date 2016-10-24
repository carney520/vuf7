<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") center
      span(slot="right") right
    f7-page-content
      .content-block-title COLUMN WITH GUTTER
      .content-block.test-grid
        f7-row
          f7-col(size="50") 50%
          f7-col(size="50") 50%
        f7-row
          f7-col(size="25") 25%
          f7-col(size="25") 25%
          f7-col(size="25") 25%
          f7-col(size="25") 25%
        f7-row
          f7-col(size="33") 33%
          f7-col(size="33") 33%
          f7-col(size="33") 33%
        f7-row
          f7-col(size="20") 20%
          f7-col(size="20") 20%
          f7-col(size="20") 20%
          f7-col(size="20") 20%
          f7-col(size="20") 20%
        f7-row
          f7-col(size="33") 33%
          f7-col(size="66") 66%
        f7-row
          f7-col(size="25") 25%
          f7-col(size="25") 25%
          f7-col(size="50") 50%
        f7-row
          f7-col(size="75") 75%
          f7-col(size="25") 25%
        f7-row
          f7-col(size="80") 80%
          f7-col(size="20") 20%

      .content-block-title NO GUTTER BETWEEN COLUMNS
      .content-block.test-grid
        f7-row(collapsed)
          f7-col(size="50") 50%
          f7-col(size="50") 50%
        f7-row(collapsed)
          f7-col(size="25") 25%
          f7-col(size="25") 25%
          f7-col(size="25") 25%
          f7-col(size="25") 25%

      .content-block-title RESPONSIVE COLUMN
      .content-block.test-grid
        f7-row
          f7-col(size="100:50") .col-100.tablet-50
          f7-col(size="100:50") .col-100.tablet-50
        f7-row
          f7-col(size="50:25") .col-50.tablet-25
          f7-col(size="50:25") .col-50.tablet-25
          f7-col(size="50:25") .col-50.tablet-25
          f7-col(size="50:25") .col-50.tablet-25

      .content-block-title COLUMN WITH EQUAL WIDTH
      .content-block.test-grid
        f7-row
          f7-col auto
          f7-col auto
        f7-row
          f7-col auto
          f7-col auto
          f7-col auto
        f7-row
          f7-col auto
          f7-col auto
          f7-col auto
          f7-col auto

</template>

<script>
</script>

<style lang="scss">
  .test-grid {
    .row {
      margin-top: 5px;
    }
    .col {
      border: 1px solid rgba(black, .3);
      background-color: white;
      text-align: center;
    }
  }
</style>