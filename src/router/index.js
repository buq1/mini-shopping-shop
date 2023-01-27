import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue';
// import Admin from '@/pages/Admin.vue';
import Cart from '../pages/Cart.vue';
//admin
import Index from '../pages/admin/admin-index.vue';
import New from '../pages/admin/admin-new.vue';
import Products from '../pages/admin/admin-products.vue';
import Edit from '../pages/admin/admin-edit.vue';
import Detail from '../pages/Detail';
import Manufacturers from '../pages/admin/admin-manufacturers.vue';
import NewManufacturers from '../pages/admin/admin-newmanufacturers';
import EditManufacturers from '../pages/admin/Eadmin-editmanufacturers';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home,
    },{
        path:'/admin',
        name:'Admin',
        component: Index,
        children: [
          {
            path: 'new',
            name: 'New',
            component: New,
          },
          {
            path: 'products',
            name: 'Products',
            component: Products,
          },
          {
            path: 'edit/:id',
            name: 'Edit',
            component: Edit,
          },
          {
            path:'manufacturers',
            name:'Manufacturers',
            component:Manufacturers,
          },
          {
            path: 'manufacturers/new',
            name: 'NewManufacturers',
            component: NewManufacturers,
          },
          {
            path: 'manufacturers/edit/:id',
            name: 'EditManufacturers',
            component: EditManufacturers,
          },
        ]
      },{
        path:'/cart',
        name:'Cart',
        component:Cart,

    },{
      path:'/detail/:id',
      name:'Detail',
      component:Detail,
    }
    ],
});