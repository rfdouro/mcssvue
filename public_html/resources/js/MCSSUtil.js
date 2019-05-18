/**
 * MaterializeCSS auxiliary (require materializecss)
 * @constructor
 */
function MCSSUtil() {
 /**
  * Reprensents the window dialog
  * @type Object
  */
 var dialogMCSS;
 /**
  * Represents the confirmation button
  * @type Object
  */
 var dialogOKMCSS;

/**
 * Function to generate random numbers used in computed id's
 * @param {type} scope
 * @returns {Number}
 */
 var randomNum = function (scope) {
  var scope = scope ? scope : 100000;
  return Math.floor(Math.random() * scope);
 };

/**
 * Function to launch a message only
 * @param {type} mensagem - the view message
 * @returns {undefined}
 */
 this.exibeAlerta = function (mensagem) {
  try {
   var strModal = '<div id="modalAlerta" class="modal black-text">\n\
<div class="modal-content"><h4>Mensagem</h4>\n\
<p>' + mensagem + '</p></div><div class="modal-footer">\n\
<a href="#!" class="modal-action modal-close waves-effect waves-green btn green">Ok</a></div></div>';
   $('body').append(strModal);
   $('#modalAlerta').modal({
    opacity: 0.8, //0 = total transparente, 1 = sem transparencia
    inDuration: 0,
    outDuration: 0,
    onCloseEnd: function () {
     $('#modalAlerta').remove();
    }
   });
   $('#modalAlerta').modal('open');
  } catch (e) {
   alert(e);
  }
 };
/**
 * Function to launch a message and execute a callback if confirm button is clicked
 * @param {type} mensagem
 * @param {type} funcao
 * @returns {undefined}
 */
 this.executaConfirma = function (mensagem, funcao) {
  try {
   var id = 'J_MCSSonfirm' + randomNum();
   var htmlModal = '<div id="' + id + '" class="modal">\n\
<div class="modal-content"><h4>Confirmação</h4>\n\
<p>' + mensagem + '</p></div><div class="modal-footer">\n\
<a href="#!" class="modal-action modal-close waves-effect red btn">Não</a>\n\
\n\<a href="#!" class="modal-action modal-close waves-effect waves-green btn green J_MCSSOK">Sim</a>\n\
</div></div>';
   $('body').append(htmlModal);
   $('#' + id).modal({
    opacity: 0.8,
    inDuration: 0,
    outDuration: 0,
    onCloseEnd: function () {
     $('#' + id).remove();
    }
   });
   $('#' + id).modal('open');
   dialogMCSS = $('#' + id);
   dialogOKMCSS = dialogMCSS.find('.J_MCSSOK');  //$('.J_MCSSOK');
   dialogOKMCSS.on('click', function () {
    typeof (funcao) === 'function' ? funcao(dialogMCSS) : null;
   });
  } catch (e) {
   alert(e);
  }
 };

/**
 * Function to launch a message and execute a callback 
 * @param {type} mensagem
 * @param {type} funcao
 * @returns {undefined}
 */
 this.executaOK = function (mensagem, funcao) {
  try {
   var id = 'J_MCSSonfirm' + randomNum();
   var htmlModal = '<div id="' + id + '" class="modal">\n\
<div class="modal-content"><h4>Mensagem</h4>\n\
<p>' + mensagem + '</p></div><div class="modal-footer">\n\
\n\<a href="#!" class="modal-action modal-close waves-effect waves-green btn green J_MCSSOK">OK</a>\n\
</div></div>';
   $('body').append(htmlModal);
   $('#' + id).modal({
    onCloseEnd: function () {
     $('#' + id).remove();
    }
   });
   $('#' + id).modal('open');
   dialogMCSS = $('#' + id);
   dialogOKMCSS = dialogMCSS.find('.J_MCSSOK');  //$('.J_MCSSOK');
   dialogOKMCSS.on('click', function () {
    typeof (funcao) === 'function' ? funcao(dialogMCSS) : null;
   });
  } catch (e) {
   alert(e);
  }
 };

}
/**
 * Global object to use this
 * @type MCSSUtil
 */
var mcssutil = new MCSSUtil();

