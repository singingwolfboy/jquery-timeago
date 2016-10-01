// Azerbaijani
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: 'əvvəl',
    suffixFromNow: 'sonra',
    seconds: 'saniyələr',
    minute: '1 dəqiqə',
    minutes: '%d dəqiqə',
    hour: '1 saat',
    hours: '%d saat',
    day: '1 gün',
    days: '%d gün',
    month: '1 ay',
    months: '%d ay',
    year: '1 il',
    years: '%d il',
    wordSeparator: '',
    numbers: []
  };
}));
