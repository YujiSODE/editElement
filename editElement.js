/*editElement.js
*
*    Copyright (c) 2017 Yuji SODE <yuji.sode@gmail.com>
*
*    This software is released under the MIT License.
*    See LICENSE or http://opensource.org/licenses/mit-license.php
*/
//simple HTML element editor with JavaScript.
function _editElement(tag){
  var slf=window,
      edt=function(e){
        var el,x=e.clientX,y=e.clientY,msg='<',input;
        el=slf.document.elementFromPoint(x,y);
        /* --- Reference ---
        * -"MDN: Document.elementFromPoint()" derived on 2017-02-01 and from:
        * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
        */
        msg+=el.tagName+'>\n'+'id:'+el.id+'\n'+'class:'+el.className+'\n'+'value:'+el.value+'\n'+'(clientX,clientY):('+x+','+y+')\n';
        input=slf.prompt(msg,el.innerHTML);
        input=!input?el.innerHTML:input;
        el.innerHTML=input;};
  tag.addEventListener('click',edt,true);
  return function(){tag.removeEventListener('click',edt,true);};
}
//example
//var Y=_editElement(window.document);
//Y();
