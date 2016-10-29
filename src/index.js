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
import { Tabs, Tab } from './components/tabs'
import Searchbar from './components/searchbar'
import { Row, Col } from './components/grid'
import { Flexbox, FlexboxItem } from './components/flexbox'
import { Popup, Popover, PickerModal } from './components/popup'
import Preloader from './components/preloader'
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

import {
  Textarea,
  Switch,
  Datepicker,
  Picker,
  Slider,
  LazyImg
} from './components/form'
import Icon from './components/icon'

export const components = {
  Icon,
  View,
  Page,
  PageContent,
  ContentBlock,
  ContentBlockTitle,
  Card,
  Navbar,
  Toolbar,
  ToolbarItem,
  Panel,
  Tabs,
  Tab,
  Searchbar,
  Row,
  Col,
  Flexbox,
  FlexboxItem,
  Popup,
  Popover,
  PickerModal,
  Preloader,
  Badge,
  ListBlock,
  ListGroup,
  ListItem,
  ListContent,
  ListDivider,
  ListAction,
  ListCheckbox,
  ListRadio,
  ListSmartSelect,
  AccordionList,
  AccordionItem,
  ButtonsRow,
  Button,
  Textarea,
  Switch,
  Datepicker,
  Picker,
  Slider,
  LazyImg
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
