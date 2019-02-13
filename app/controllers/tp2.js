import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    activer(tp2){
      if(tp2.active == true){
        tp2.active = false;
      }
      else{
        tp2.active = true;
      }
    }
  }
});
