function MCSSUtil(){function t(a){return a=a||1e5,Math.floor(Math.random()*a)}var l;this.exibeAlerta=function(a){try{var o='<div id="modalAlerta" class="modal black-text">\n<div class="modal-content"><h4>Mensagem</h4>\n<p>'+a+'</p></div><div class="modal-footer">\n<a href="#!" class="modal-action modal-close waves-effect waves-green btn green">Ok</a></div></div>';$("body").append(o),$("#modalAlerta").modal({opacity:.8,inDuration:0,outDuration:0,onCloseEnd:function(){$("#modalAlerta").remove()}}),$("#modalAlerta").modal("open")}catch(a){alert(a)}},this.executaConfirma=function(a,o){try{var n="J_MCSSonfirm"+t(),e='<div id="'+n+'" class="modal">\n<div class="modal-content"><h4>Confirmação</h4>\n<p>'+a+'</p></div><div class="modal-footer">\n<a href="#!" class="modal-action modal-close waves-effect red btn">Não</a>\n\n<a href="#!" class="modal-action modal-close waves-effect waves-green btn green J_MCSSOK">Sim</a>\n</div></div>';$("body").append(e),$("#"+n).modal({opacity:.8,inDuration:0,outDuration:0,onCloseEnd:function(){$("#"+n).remove()}}),$("#"+n).modal("open"),l=$("#"+n),l.find(".J_MCSSOK").on("click",function(){"function"==typeof o&&o(l)})}catch(a){alert(a)}},this.executaOK=function(a,o){try{var n="J_MCSSonfirm"+t(),e='<div id="'+n+'" class="modal">\n<div class="modal-content"><h4>Mensagem</h4>\n<p>'+a+'</p></div><div class="modal-footer">\n\n<a href="#!" class="modal-action modal-close waves-effect waves-green btn green J_MCSSOK">OK</a>\n</div></div>';$("body").append(e),$("#"+n).modal({onCloseEnd:function(){$("#"+n).remove()}}),$("#"+n).modal("open"),l=$("#"+n),l.find(".J_MCSSOK").on("click",function(){"function"==typeof o&&o(l)})}catch(a){alert(a)}}}var mcssutil=new MCSSUtil;