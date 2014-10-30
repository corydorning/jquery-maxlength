/*! jquery-maxlength.js
 *
 * Authored by: Cory Dorning
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 01/15/2013
 *
 * The jQuery maxlength plugin allows you to use the maxlength attribute on
 * textarea elements in browsers that do not support it.
 *
 */

// include semicolon to make sure any JS before this plugin is terminated
;(function($) {
  // ECMAScript 5 strict mode
  "use strict";

  // begin plugin - change 'boilerplate' to name of your plugin
  $.fn.maxlength = function(options) {

        // set any defaults
    var defaults = {
          // empty for now
        },

        // overwrite 'defaults' with those passed via 'options'
        settings = $.extend(defaults, options),

        // original jQuery object
        $sel = this;

    // check to see browser supports maxLength
    if ($sel[0] && 'maxLength' in $sel[0]) {
      return $sel;
    } else {
      // loop through all textareas
      return $sel.each(function() {
        var curr = this,
            $curr = $(curr);

        // make sure maxlength is a number
        if (/^[0-9]+$/.test(curr.getAttribute('maxLength'))) {

          // enforce maxlength on keyup and blur
          $curr.on('keyup', document, function() {
            var el = this,
                maxlength = parseInt(el.getAttribute('maxlength'), 10);

            if (el.value.length > maxlength) {
              alert('Maximum length exceeded: ' + maxlength);
              el.value = el.value.substr(0, maxlength);

              return false;
            }
          });
        }

      });

    }

  };
})(jQuery);