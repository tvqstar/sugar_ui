import routesConfig from '~/config/routes';
import { routes2 } from '~/config/routes';
import Login from '~/pages/user/Login';
import Home from '~/pages/user/Home/Home';
import Profile from '~/pages/user/Profile';
import Register from '~/pages/user/Register';
import HomeLayout from '~/Layouts/HomeLayout';
import DefaultLayout from '~/Layouts/DefaultLayout';

import Admin from '~/Layouts/Admin';
import Cart from '~/pages/user/Cart';
import ProductDetail from '~/pages/user/ProductDetail';

const publicRoutes = [
    { path: routesConfig.home, component: Home, layout: HomeLayout },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.login, component: Login, layout: null },
    { path: routesConfig.register, component: Register, layout: null },
    { path: routesConfig.cart, component: Cart },
    { path: routesConfig.product, component: ProductDetail },
];

const privateRoutes = [
    { path: routes2.admin, component: Admin, layout: Admin },
    { path: routes2.admin2, component: Home, layout: HomeLayout },
];

export { publicRoutes, privateRoutes };
