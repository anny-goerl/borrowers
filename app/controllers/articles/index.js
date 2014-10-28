import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['showReturned'],
  showReturned: false,
  // we don't need this here since we are not sorting
  // properties: Ember.computed('showReturned', function() {
  //   return [this.get('showReturned')];
  // }),

  // actions: {
  //   showReturned: function() {
  //     this.toggleProperty('showReturned');

  //     return false;
  //   }
  // }
});
