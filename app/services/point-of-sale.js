import Service from '@ember/service';

export default Service.extend({
  model:null,
  removedRows: Array(),

  setModel(data){
    this.set('model', data);
  },
  
  addRow(data, propertyName){
    let datas = Array();
    let prevData = this.get('model.' + propertyName);
    if(prevData !== null){
      prevData.pushObject(data);
      datas = prevData;
    }else{
      datas.pushObject(data);
    }
    this.set('model.' + propertyName, datas);
  },

  removeRow(data, propertyName){
    this.removedRows.pushObject(data);
    let prevData = this.get('model.' + propertyName);
    prevData.removeObject(data);
    this.set('model.' + propertyName, prevData);
  }
});
