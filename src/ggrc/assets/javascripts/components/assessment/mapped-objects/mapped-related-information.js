/*!
 Copyright (C) 2016 Google Inc., authors, and contributors
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can, GGRC) {
  'use strict';

  var tpl = can.view(GGRC.mustache_path +
    '/components/assessment/mapped-objects/' +
    'mapped-related-information.mustache');
  var tag = 'assessment-mapped-related-information';
  /**
   * Assessment specific mapped related information view component
   */
  can.Component.extend({
    tag: tag,
    template: tpl,
    scope: {
      titleText: '@',
      filter: {
        exclude: ['Control']
      },
      mapping: '@',
      mappingType: '@',
      expanded: true,
      selectedItem: null,
      instance: null
    }
  });
})(window.can, window.GGRC);
