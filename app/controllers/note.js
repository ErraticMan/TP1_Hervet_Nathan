import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    save(note){
      //this.modelFor(this.routeName); Si on passe pas note en paramètre
      note.set('info','Note sauvegardée !');
      console.log('Sauvegarde :' + note.get('content'));
    },
    effacer(note){
      note.set('info',null);
      note.set('content','');
      console.log('Texte effacé');
    }
  }
});
