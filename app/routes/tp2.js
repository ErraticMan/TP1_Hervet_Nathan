import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';


const Service = EmberObject.extend({
    services: [],
    promoText: "",
    countActive: computed('services.@each.active',function(){
      return this.get('services').filter(service => service.active).length;
  }),
  sumActive: computed('services.@each.active', function(){
     let somme = 0;
     this.get('services').forEach(service => {
       if(service.active){
         somme+= service.price;
       }
     })
    return somme;
  }),
  countPromo: computed('promoTexte',function(){
    return this.get('promos')[this.get('promoText')];
  })
})

export default Route.extend({
  model() {
    return Service.create({services:[
        {
          name: "Web Development",
          price: 300,
          active: true
        }, {
          name: "Design",
          price: 400,
          active: false
        }, {
          name: "Integration",
          price: 250,
          active: false
        }, {
          name: "Formation",
          price: 220,
          active: false
        }
      ],
      promos:{
        "B22": 0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }
    });
  }
})
/*
nb: computed('boutton', function () {
  count : 0;
  for (compteur in model) {
    if (compteur.boutton.get('yon') == 1) {
      count++;
    }
  }
  return count;
})*/
