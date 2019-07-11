/**
 * @file: Volunteer Hours Report Script
 *
 * Add General script for volunteer report hours block.
 */

(function ($, Drupal) {
  Drupal.behaviors.volunteerHoursReportBehavior = {
    attach: function (context, settings) {
      jQuery( "#reset_loghours_form" ).click(function() {
        var currentURL = window.location.href.split('?')[0];
        window.location.href = currentURL;
      });
    }
  };
})(jQuery, Drupal);