// pathc for the original project autocomplete_on - author kzahel
// I've rewrite the code which is supposed to work with every webpage

function enableAutocomplete() {
'use strict';
var ac,c,f,fa,fe,fea,x,y,z;
ac="autocomplete"; c=0;    f=document.forms;
for(x=0;x<f.length;x++)    {
    fa=f[x].attributes;
    for(y=0;y<fa.length;y++) {
        if(fa[y].name.toLowerCase()==ac) { fa[y].value="on";c++; } }
        fe=f[x].elements;
    for(y=0;y<fe.length;y++) {
        fea=fe[y].attributes;
        for(z=0;z<fea.length;z++) {
            if(fea[z].name.toLowerCase()==ac) { fea[z].value="on";c++; }
            }
        }
    }
}

// The password manager code checks for "autocomplete=off" in a callback
// from WebCore when the DOM content is loaded.  It doesn't seem to be
// documented, but this callback seems to happen after in-page event listeners
// fire, and before content scripts with "run_at" = "document_end" are loaded.
// Therefore, we load this script early and then run the actual transform code
// on an appropriate event listener.
window.addEventListener('DOMContentLoaded', enableAutocomplete, false);
