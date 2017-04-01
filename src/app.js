import Map from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';


const AppViewModel = Map.extend({
    title: {
      value: 'user-website',
      serialize: false
    }
});

//route('/:page', { page: 'home' });
route("{page}", {page: "home"})
route.ready();

export default AppViewModel;
