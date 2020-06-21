import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  posModal: service(),

  showModal:false,
  formSubmitted: false,
  model: null,
  title: "Detail Transaksi",

  init(){
    this._super(...arguments);
    if(this.model == null){
      this.set('model', this.posModal.addNewData());
    }
  },

  actions:{
    submit(){
      this.set('formSubmitted', true);
      this.posModal.addRow(this.model);
      this.posModal.hide();
    },
    hideModal(){
      if(!this.formSubmitted){
        let obj = this.posModal.oldModel;
        if(obj != null){
          obj = obj.toJSON();
          Object.getOwnPropertyNames(obj).forEach(key => {
            this.set('model.' + key, obj[key]);
          });
          this.posModal.addRow(this.model);
        }
      }
      this.set('showModal', false);
      this.set('formSubmitted', false);
      this.set('posModal.oldModel', null);
      this.posModal.hide();
    },
  }
});
