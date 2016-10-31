<template lang="jade">
  .f7-flex(:class="flexboxClasses")
    slot
</template>

<script>
  import { coerceBoolean } from '../../helpers/coerces'

  export default {
    name: 'Flex',
    props: {
      noGutter: {
        type: Boolean,
        coerce: coerceBoolean
      },
      justify: {
        type: String,
        default: 'start',
        validator (value) {
          return ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1
        }
      },
      wrap: {
        type: String,
        default: 'nowrap',
        validator (value) {
          return ['nowrap', 'wrap', 'wrap-reverse'].indexOf(value) !== -1
        }
      },
      align: {
        type: String,
        default: 'center',
        validator (value) {
          return ['center', 'start', 'end', 'baseline', 'stretch'].indexOf(value) !== -1
        }
      },

      alignContent: {
        validator (value) {
          return ['start', 'end', 'center', 'between', 'around', 'stretch'].indexOf(value) !== -1
        }
      },

      direction: {
        type: String,
        default: 'row',
        validator (value) {
          return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(value) !== -1
        }
      },

      inline: {
        type: Boolean,
        coerce: coerceBoolean
      }
    },
    computed: {
      flexboxClasses () {
        const {direction, align, justify, wrap, alignContent, inline, noGutter} = this
        return [
          direction && `f7-flex-dir-${direction}`,
          wrap && `f7-flex-wrap-${wrap}`,
          align && `f7-flex-ali-${align}`,
          justify && `f7-flex-jst-${justify}`,
          alignContent && `f7-flex-ali-content-${alignContent}`,
          inline && 'f7-flex-inline',
          noGutter && 'f7-flex-no-gutter'
        ]
      }
    }
  }
</script>

<style lang="scss">
  .f7-flex {
    width: 100%;
    display: flex;
    text-align: left;
    align-items: center;

    &.f7-flex-inline {
      display: inline-flex;
    }

    @each $dir in ('row', 'row-reverse', 'column', 'column-reverse') {
      &.f7-flex-dir-#{$dir} {
        flex-direction: $dir;
      }
    }

    .f7-flex-dir-column, 
    .f7-flex-dir-column-reverse {
      & > .f7-flex-item {
        width: 100%;
      }
    }

    @each $wrap in ('wrap', 'nowrap', 'wrap-reverse') {
      &.f7-flex-wrap-#{$wrap} {
        flex-wrap: $wrap;
      }
    }

    @each $align in (('start' 'flex-start'), ('end' 'flex-end'), 'center', 'baseline', 'stretch') {
      @if type-of($align) == 'list' {
        $name: nth($align, 1);
        $value: nth($align, 2);
        &.f7-flex-ali-#{$name} {
          align-items: $value;
        }
      } @else {
        &.f7-flex-ali-#{$align} {
          align-items: $align;
        }
      }
    }

    @each $justify in (('start' 'flex-start'), ('end' 'flex-end'), 'center', ('between' 'space-between'), ('around' 'space-around')) {
      @if type-of($justify) == 'list' {
        $name: nth($justify, 1);
        $value: nth($justify, 2);
        &.f7-flex-jst-#{$name} {
          justify-content: $value;
        }
      } @else {
        &.f7-flex-jst-#{$justify} {
          justify-content: $justify;
        }
      }
    }

    @each $align-content in (('start' 'flex-start'), ('end' 'flex-end'), 'center', 'stretch', ('between' 'space-between'), ('around' 'space-around')) {
      @if type-of($align-content) == 'list' {
        $name: nth($align-content, 1);
        $value: nth($align-content, 2);
        &.f7-flex-ali-content-#{$name} {
          justify-content: $value;
        }
      } @else {
        &.f7-flex-ali-content-#{$align-content} {
          justify-content: $align-content;
        }
      }
    }
  }
  .f7-flex.f7-flex-no-gutter {
    .f7-flex-item {
      margin-left: 0;
    }
  }

  .f7-flex-item {
    flex: 1;
    min-width: 20px;
    margin-left: 8px;

    &:first-child {
      margin-left: 0 !important;
      margin-top: 0 !important;
    }

    &.f7-flex-item-first {
      order: -1;
    }

    &.f7-flex-item-last {
      order: 1;
    }

    @each $align-self in (('start' 'flex-start'), ('end' 'flex-end'), 'center', 'baseline', 'stretch') {
      @if type-of($align-self) == 'list' {
        $name: nth($align-self, 1);
        $value: nth($align-self, 2);
        &.f7-flex-item-ali-#{$name} {
          align-self: $value;
        }
      } @else {
        &.f7-flex-item-ali-#{$align-self} {
          align-items: $align-self;
        }
      }
    }
  }

</style>