/*!
 Copyright (C) 2017 Google Inc., authors, and contributors
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

(function (can, GGRC, CMS) {
  'use strict';
  var tpl = can.view(GGRC.mustache_path +
    '/components/info-pane/info-pane-wrapper.mustache');

  /**
   * Info Pane Wrapper Component
   */
  GGRC.Components('infoPaneWrapper', {
    tag: 'info-pane-wrapper',
    template: '{{#if shouldShow}}' +
      '<info-pin-buttons class="details-wrap" {(maximized)}="maximized"' +
    ' {on-change-maximized-state}="@onChangeMaximizedState"' +
    '{on-close}="@onClose"></info-pin-buttons>' +
      '{{renderView}}' +
      '{{/if}}' +
    '',
    viewModel: {
      define: {
        shouldShow: {
          type: 'boolean',
          value: false,
          get: function () {
            return this.attr('isActive') && this.attr('instance');
          }
        }
      },
      instance: null,
      isRender: false,
      findView: function () {
        var view = this.attr('instance.class').table_plural + '/info';

        if (this.attr('instance') instanceof CMS.Models.Person) {
          view = GGRC.mustache_path +
            '/ggrc_basic_permissions/people_roles/info.mustache';
        } else if (view in GGRC.Templates) {
          view = GGRC.mustache_path + '/' + view + '.mustache';
        } else {
          view = GGRC.mustache_path + '/base_objects/info.mustache';
        }
        console.info('View is: ', view);
        return view;
      }
    },
    events: {
      inserted: function () {
        console.info('Was inserted: ', arguments);
      },
      '{window} selectTreeViewItem': function (el, ev, instance, result) {
        console.info('Arguments are: ', instance);
        this.viewModel.attr('instance', instance);
        this.viewModel.attr('result', result);
      },
      '{viewModel} id': function () {
        var rawData = can.route.attr();
        var id = rawData.id;
        this.viewModel.attr('isActive', !!id);

        /*CMS.Models[can.capitalize(rawData.type)]
          .findOne({id: rawData.id})
          .done(function (data) {
            console.info('Some magic happened!!!');
            this.viewModel.attr('instance', data);
            this.viewModel.attr('isRender', true);
          }.bind(this));

        console.info('ID arguments are: ', arguments);*/
      }
    },
    helpers: {
      renderView: function (options) {
        console.info('was called!!!!');
        if (this.attr('shouldShow')) {
          return can.view(this.findView(), this);
        }
      }
    }
  });
})(window.can, window.GGRC, window.CMS);
