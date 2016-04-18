import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', {async: false}),
  here: DS.attr('bool', {async: false})
});
