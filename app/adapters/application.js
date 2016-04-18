import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
	host: ENV.BACKEND_URL,
	namespace: 'api',
	coalesceFindRequests: true
});
