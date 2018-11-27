import { basic } from 'basic.js';
import { observe } from 'server/index';

function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function canComponent(canOptions) {
  if (canOptions === void 0) {
    canOptions = {};
  }

  var options = {};
  mapKeys(canOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var _canOptions = canOptions,
      relation = _canOptions.relation;

  if (relation) {
    options.relations = Object.assign(options.relations || {}, {
      ["../" + relation.name + "/index"]: relation
    });
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(basic); // map field to form-field behavior

  if (canOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  observe(canOptions, options);
  Component(options);
}

export { canComponent };