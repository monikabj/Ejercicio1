import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { Componente1Component } from './pages/componente1/componente1.component';
import { Componente2Component } from './pages/componente2/componente2.component';
import { Componente3Component } from './pages/componente3/componente3.component';
import { EjemploapiComponent } from './pages/ejemploapi/ejemploapi.component';


export const routes: Routes = [
    {
        path: 'Menu',
        component: MenuComponent
    },
    {
        path: 'Componente1',
        component: Componente1Component
    },
    {
        path: 'Componente2',
        component: Componente2Component
    },
    {
        path: 'Componente3',
        component: Componente3Component
    },
    {
        path: 'Ejemplo',
        component: EjemploapiComponent
    },
];
