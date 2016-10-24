<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", toolbar-type="fixed", transition="fade")
    f7-navbar
      span(f7-back, slot="left") back
      span(slot="center") center
      span(slot="right") right
    f7-page-content
      p.
        This paragraph is outside of content block. Not cool, but useful for any custom elements with custom styling.
      f7-content-block.
        Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis
      f7-content-block
        p(slot="inner").
          Here comes another text block additionaly wrapped with "content-block-inner". Praesent nec imperdiet diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur.
      f7-content-block(title="CONTENT BLOCK TITLE").
        Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      f7-content-block(title="INSET", inset)
        p(slot="inner").
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
      f7-content-block(title="TABLET INSET", tablet-inset)
        p(slot="inner").
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis.
</template>
