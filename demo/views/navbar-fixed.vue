<template lang="jade">
div
  f7-page(name="navbar", navbar-type="fixed", transition="fade")
    f7-navbar
      span(slot="left", f7-back) back
      span(slot="center") static
      span(slot="right") right
    f7-page-content
      p.
       上海黄浦江边，奔驰文化中心两万人的场地座无虚席，巨大的荧屏中央，一颗黑色星球稍显暗淡，球体四周露出微微晨光，仿佛锤子正在四处寻找的黎明。 
      p.
        过去一年，锤子科技被传言倒闭6次，被传言收购5次，被用户起诉1次，被曝资金链困境1次，基于此，很多人带着围观老罗最后一次发布会的心情去迎接这晚将要发生的一切。而现场的音乐听起来也变得令人伤感，罗永浩的“单口相声”还没开始，氛围就已经十分悲壮。
      p.
        不过，这都只是人们的预想，昨晚也并不会成为罗永浩的最后一次发布会。
      p.
        “锤子明年春天还要发新机，而且千元机还将搭载双摄像头。”罗永浩昨晚在接受腾讯科技等媒体专访时透露。尽管他也承认，锤子目前的确在谈战略投资或收购相关的事宜，而且还不止跟一家企业在谈。
      p.
        此前屡被吐槽发布会时间延迟的锤子，这一次也希望用实力证明一切的等待都是值得的。尤其在全球智能手机行业已经严重缺乏创新的今天，锤子M1在交互上的创新显得难能可贵，这也大大超出了此前外界对锤子新机的预期。就在售价和发售渠道公开后，锤子M1在各大平台几乎瞬间售罄，有数据称销量已高达50万台。
      p.
        看起来，这位理想主义者比以往任何一次都更加接近达成目标。事实上，M1也成为锤子的生死之战，一旦销量上再度达不到预期，锤子难逃被卖掉的命运。

      code.
        f7-page(name="navbar", navbar-type="fixed")
          f7-navbar
            span(slot="left") left
            span(slot="center") static
            span(slot="right") right
          f7-page-content
            p.
              ....
</template>