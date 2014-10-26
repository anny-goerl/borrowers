import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {

      console.log('+--- save action bubbled up to friends route');
      return false;
    },
    cancel: function() {

      console.log('+--- cancel action bubbled up to friends route');
      return false;
    },
    delete: function(friend) {
      friend.destroyRecord();
      this.transitionTo('friends.index');
    }
  }
});
