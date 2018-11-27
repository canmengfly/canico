import { behavior } from './behavior';
import { observeProps } from './props';
export function observe(canOptions, options) {
  var watch = canOptions.watch,
      computed = canOptions.computed;

  if (watch) {
    var props = options.properties || {};
    Object.keys(watch).forEach(function (key) {
      if (key in props) {
        var prop = props[key];

        if (prop === null || !('type' in prop)) {
          prop = {
            type: prop
          };
        }

        prop.observer = watch[key];
        props[key] = prop;
      }
    });
    options.properties = props;
  }

  if (computed) {
    options.behaviors.push(behavior);
    options.methods = options.methods || {};

    options.methods.$options = function () {
      return canOptions;
    };

    if (options.properties) {
      observeProps(options.properties);
    }
  }
}