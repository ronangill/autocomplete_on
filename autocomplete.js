function enableAutocomplete() {
  'use strict';
  document.querySelectorAll('[autocomplete]').forEach(function(element){
    element["autocomplete"] = "on";
  });
}

// The password manager code checks for "autocomplete=off" in a callback
// from WebCore when the DOM content is loaded.  It doesn't seem to be
// documented, but this callback seems to happen after in-page event listeners
// fire, and before content scripts with "run_at" = "document_end" are loaded.
// Therefore, we load this script early and then run the actual transform code
// on an appropriate event listener.
window.addEventListener('DOMContentLoaded', enableAutocomplete, false);
