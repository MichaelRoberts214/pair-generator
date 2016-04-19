import Ember from 'ember';

export default Ember.Controller.extend({
  pairs: Ember.A([]),
  roster: Ember.computed.filterBy('model', 'here'),

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
      this.set('pairs', []);
      var pairs = this.get('pairs');
      var roster = this.get('roster').slice();
      var n = roster.length;

      while (n > 0) {
        if (n === 1) {
          pairs.pushObject(roster[0]);
          n = 0;
        } else {
          var ind = Math.round(Math.random() * (n - 1));
          var ind2 = Math.round(Math.random() * (n - 1));
          while (ind2 === ind) {
            ind2 = Math.round(Math.random() * (n - 1));
          }
          var pairString = '';
          pairString = pairString + roster[ind].get('name');
          roster.splice(ind, 1).get('name');
          if (ind < ind2) {
            let temp = ind2 - 1;
            ind2 = temp >= n ? 0 : temp;
          } else if (ind > ind2) {
            ind2 = ind2 >= n ? 0 : ind2;
          } else {
            ind2 = 0;
          }
          pairString = pairString + ", " + roster[ind2].get('name');
          roster.splice(ind2, 1);
          pairs.pushObject(pairString);
          n = roster.length;
        }
      };
    }
  }
});
