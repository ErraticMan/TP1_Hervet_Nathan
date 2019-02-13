import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('Note');
  this.route('tp2');
  this.route('tp3');
  this.route('tp3_2');
});

export default Router;
