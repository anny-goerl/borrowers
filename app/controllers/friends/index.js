import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,

  //
  // We'll use sortBy to hold the name of the field we want to sort by.
  //
  sortBy: 'fullName',
  // We are making sortProperties a computed property
  // If we change the value for sortBy then the property will be
  // recalculated.
  sortProperties: Ember.computed('sortBy', function() {
    return [this.get('sortBy')];
  }),
  actions: {
    //
    // The setSortBy function receives the name of the function and
    // toggle `sortAscending`. The function `toggleProperty` comes from the
    // [Observable Mixin](http://emberjs.com/api/classes/Ember.Observable.html)
    // it switches a boolean property between false and true.
    //

    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      return false;
    }
  }
});
