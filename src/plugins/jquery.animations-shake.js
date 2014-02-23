;(function($, window, document, undefined) {
  var keyframes = {
    '0%, 100%': { transform: 'translateX(0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-${strength}px)' },
    '20%, 40%, 60%, 80%': { transform: 'translateX(${strength}px)' }
  }

  $.animations['shake'] = {
    duration: 1000,
    keyframes: keyframes,
    variables: {
      strength: 10
    }
  };
})(jQuery, window, document);
