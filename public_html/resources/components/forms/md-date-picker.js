Vue.component('md-date-picker', {
 props: {
  'id': {
   'type': String,
   'required': true
  },
  'format': {
   type: String
  },
  'aofechar': {
   type: String
  }
 },
 data: function () {
  return {
   content: this.value,
   objPicker: null
  };
 },
 created: function (){
  //console.log(this.$options);
 },
 mounted: function () {
  //console.log(this.computedId);
  var _this = this;
  this.objPicker = $('#' + this.computedId).datepicker({
   format: _this.format,
   autoClose: true,
   showClearBtn: false,
   duration: 0,
   i18n: {
    cancel: 'Cancelar',
    months:
            [
             'Jan',
             'Fev',
             'Mar',
             'Abr',
             'Mai',
             'Jun',
             'Jul',
             'Ago',
             'Set',
             'Out',
             'Nov',
             'Dez'
            ],
    monthsShort:
            [
             'Jan',
             'Fev',
             'Mar',
             'Abr',
             'Mai',
             'Jun',
             'Jul',
             'Ago',
             'Set',
             'Out',
             'Nov',
             'Dez'
            ],
    weekdays:
            [
             'Domingo',
             'Segunda',
             'Terça',
             'Quarta',
             'Quinta',
             'Sexta',
             'Sábado'
            ],
    weekdaysShort:
            [
             'Dom',
             'Seg',
             'Ter',
             'Qua',
             'Qui',
             'Sex',
             'Sáb'
            ],
    weekdaysAbbrev: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Sx', 'Sa']
   },
   onClose: function () {
    //console.log(_this);
    //lança o valor para o objeto na página
    _this.$emit('input', this.date);
    if(typeof _this.aofechar == 'function'){
     _this.aofechar();
    }
   }
  });
 },
 methods: {

 },
 computed: {
  computedId: function () {
   if (this.id) {
    return 'md-date-picker-' + this.id;
   }
   return '';
  }
 },
 template: "<input type='text' readonly class='datepicker' :id=computedId />"
});