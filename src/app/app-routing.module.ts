import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './vehicles/vehicle-edit/vehicle-edit.component';
import { DriverDetailComponent } from './drivers/driver-detail/driver-detail.component';
import { DriverEditComponent } from './drivers/driver-edit/driver-edit.component';

const appRoutes: Routes = [
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'vehicles/:id', component: VehicleDetailComponent },
    { path: 'vehicles/:id/edit', component: VehicleEditComponent },
    { path: 'vehicles/new', component: VehicleEditComponent },
    { path: 'drivers', component: DriversComponent },
    { path: 'drivers/:id', component: DriverDetailComponent },
    { path: 'drivers/:id/edit', component: DriverEditComponent },
    { path: 'drivers/new', component: DriverEditComponent },
    {
        path: '',
        redirectTo: '/vehicles',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
