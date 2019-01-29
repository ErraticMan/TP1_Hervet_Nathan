import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  max: 100,
  content: '',
  info: null,

  size: computed('content', function(){
    this.set('info', null);
    return this.get('content').length;
  }),
  reste: computed('content',function(){
    return this.get('max') - this.get('size');
  }),
  warning: computed('content',function(){
  if(this.get('reste')<= 50 &&this.get('reste') > 20){
    return "alert alert-warning";
  }
  if(this.get('reste')<= 20){
    return "alert alert-danger";
    }
  else{
    return "alert alert-primary";
  }
  })

});

export default Route.extend({
  model(){
    return Note.create();
  }
});


