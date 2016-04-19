import Ember from 'ember';

export default Ember.Controller.extend({
  pairs: Ember.A([]),

  actions: {
    presentToggle: function (user) {
      user.toggleProperty('here');
      user.save().then(function () {
        console.log('save success');
      }, function (error) {
        console.error(error);
      });
    },

    generatePairs: function () {
      //
    }
  }
});
