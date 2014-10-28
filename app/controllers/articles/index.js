import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['showReturned'],
  showReturned: false,
  // // We are making sortProperties a computed property
  // // If we change the value for sortBy then the property will be
  // // recalculated.
  properties: Ember.computed('showReturned', function() {
    return [this.get('showReturned')];
  }),
  actions: {
    //
    // The setSortBy function receives the name of the function and
    // toggle `sortAscending`. The function `toggleProperty` comes from the
    // [Observable Mixin](http://emberjs.com/api/classes/Ember.Observable.html)
    // it switches a boolean property between false and true.
    //

    showReturned: function() {
      this.toggleProperty('showReturned');

      return false;
    }
  },

  contentDidChange: function() {
    console.log('Called when we add or removed an article.');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('Called when the state property change for any of the articles.');
  }.observes('model.@each.state')
});