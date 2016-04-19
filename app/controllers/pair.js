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
      var pairs = [];
      var n = roster.length;

      while (n > 0) {
        if (n === 1) {
          pairs.push(roster[0]);
          n = 0;
        } else {
          var ind = Math.round(Math.random() * (n - 1));
          var ind2 = Math.round(Math.random() * (n - 1));
          while (ind2 === ind) {
            ind2 = Math.round(Math.random() * (n - 1));
          }
          var pairString = '';
          pairString = pairString + roster.splice(ind, 1);
          if (ind < ind2) {
            let temp = ind2 - 1;
            ind2 = temp >= n ? 0 : temp;
          } else if (ind > ind2) {
            ind2 = ind2 >= n ? 0 : ind2;
          } else {
            ind2 = 0;
          }
          pairString = pairString + ", " + roster.splice(ind2, 1);
          pairs.push(pairString);
          n = roster.length;
        }
      }

      function makeUL(array) {
        var list = document.createElement('ul');
        for(var i = 0; i < array.length; i++) {
          var item = document.createElement('li');
          item.appendChild(document.createTextNode(array[i]));
          list.appendChild(item);
        }
        return list;
      }
      document.getElementById('list').appendChild(makeUL(pairs));

    }
  }
});
