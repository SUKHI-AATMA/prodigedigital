/**
* @file
* Alters jquery.tablesorter behaviour.
*/

(function ($) {
  'use strict';
  $.tablesorter.addParser({
    // Set a unique id.
    id: 'changefreq',
    is: function (s) {
      return false;
    },
    format: function (s) {
      switch (s) {
        case 'always':
          return 0;

        case 'hourly':
          return 1;

        case 'daily':
          return 2;

        case 'weekly':
          return 3;

        case 'monthly':
          return 4;

        case 'yearly':
          return 5;

        default:
          return 6;
      }
    },
    type: 'numeric'
  });

  $(document).ready(function () {
    var $table = $('table');
    var options = {widgets: ['zebra']};

    // Options for sitemap table.
    options.sortList = [[4, 1]];
    options.headers = {
      2: {sorter: 'changefreq'},
      5: {sorter: false }
    };

    $table.tablesorter(options);
  });
})(jQuery);