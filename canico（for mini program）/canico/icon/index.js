import { canComponent } from '../common/component';
canComponent({
  props: {
    info: null,
    name: String,
    size: String,
    color: String,
    customStyle: String,
    classPrefix: {
      type: String,
      value: 'cd'
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    }
  }
});