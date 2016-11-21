import F7 from './lib/f7'
import meta from '../package.json'

// only for building vuf7.css
import Vuestyle from './styles/vuf7' // eslint-disable-line

import View from './components/view'
import { Page, PageContent } from './components/page'
import { ContentBlock, ContentBlockTitle } from './components/content-block'
import Card from './components/card'
import Navbar from './components/navbar'
import { Toolbar, ToolbarItem } from './components/toolbar'
import Panel from './components/panel'
import {
  Tabs,
  Tab,
  Tabshead,
  TabsheadItem
} from './components/tabs'
import Searchbar from './components/searchbar'
import { Row, Col } from './components/grid'
import { Flex, FlexItem } from './components/flexbox'
import { Popup, Popover, PickerModal } from './components/popup'
import Preloader from './components/preloader'
import ProgressBar from './components/progress-bar'
import Badge from './components/badge'
import {
  ListBlock,
  ListGroup,
  ListItem,
  ListContent,
  ListDivider,
  ListAction,
  ListCheckbox,
  ListRadio,
  ListSmartSelect
} from './components/list'

import { AccordionList, AccordionItem } from './components/accordion'
import { Button, ButtonsRow } from './components/button'
import NoticeBar from './components/notice-bar'

import {
  Textarea,
  Switch,
  Datepicker,
  Picker,
  Slider,
  LazyImg,
  NumberPad,
  NumberPassword
} from './components/form'
import Icon from './components/icon'
import Rater from './components/rater'
import {
  Swiper,
  SwiperSlide
} from './components/swiper'

export const components = {
  AccordionList,
  AccordionItem,
  Badge,
  ButtonsRow,
  Button,
  Card,
  ContentBlock,
  ContentBlockTitle,
  Col,
  Datepicker,
  Flex,
  FlexItem,
  Icon,
  ListBlock,
  ListGroup,
  ListItem,
  ListContent,
  ListDivider,
  ListAction,
  ListCheckbox,
  ListRadio,
  ListSmartSelect,
  LazyImg,
  NumberPad,
  NumberPassword,
  NoticeBar,
  Navbar,
  Page,
  PageContent,
  Panel,
  Picker,
  PickerModal,
  Popup,
  Popover,
  Preloader,
  ProgressBar,
  Row,
  Rater,
  Searchbar,
  Slider,
  Switch,
  Swiper,
  SwiperSlide,
  Tabs,
  Tab,
  Tabshead,
  TabsheadItem,
  Textarea,
  Toolbar,
  ToolbarItem,
  View
}

export default {
  ...components,
  version: meta.version,
  F7,
  install (Vue, VueRouter, options) {
    Object.keys(components).forEach((name) => {
      Vue.component('F7' + name, components[name])
    })

    Vue.use(F7, VueRouter, options)
  }
}
