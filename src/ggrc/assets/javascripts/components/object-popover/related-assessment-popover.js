/*!
 Copyright (C) 2017 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can) {
  'use strict';

  var tpl = can.view(GGRC.mustache_path +
    '/components/object-popover/related-assessment-popover.mustache');
  /**
   * Simple wrapper component to load Related to Parent Object Snapshots of Controls and Objectives
   */
  can.Component.extend({
    tag: 'related-assessment-popover',
    template: tpl,
    viewModel: {
      selectedAssessment: {},
      popoverTitleInfo: 'Assessment Title: ',
      define: {
        hideTitle: {
          type: 'boolean',
          value: false
        },
        popoverDirection: {
          type: 'string',
          value: 'right'
        },
        selectedAssessmentTitle: {
          get: function () {
            return this.attr('selectedAssessment.data.title');
          }
        },
        selectedAssessmentLink: {
          get: function () {
            return this.attr('selectedAssessment.data.viewLink');
          }
        },
        localAttributes: {
          get: function () {
            var attrs =
              this.attr('selectedAssessment.data.local_attributes') || [];
            return attrs.map(function (attr) {
              return GGRC.Utils.CustomAttributes.prepareLocalAttribute(attr);
            });
          }
        },
        globalAttributes: {
          get: function () {
            var attrs =
              this.attr('selectedAssessment.data.global_attributes') || [];
            return attrs.map(function (attr) {
              return GGRC.Utils.CustomAttributes.prepareGlobalAttribute(attr);
            });
          }
        }
      }
    }
  });
})(window.can);
