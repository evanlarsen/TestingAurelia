import 'bootstrap';
import 'font-awesome';

export class App {
  isRootMenuShown = false;

  configureRouter(config, router){
    config.title = 'LenDiDoe';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Sample Page 1' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Sample Page 2' }
    ]);

    this.router = router;
  }

  toggleMenu(nav){
    this.isRootMenuShown = !this.isRootMenuShown;
    if (nav && nav.href) {
      window.location = nav.href;
    }
  }
}
