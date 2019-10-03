import { NavigationMenuComponent } from "./navigation-menu/navigation-menu.component";
import { TopNavBarComponent } from "./top-nav-bar.component";
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NavigationMenuMobileComponent } from './navigation-menu-mobile/navigation-menu-mobile.component';
import { NavigationMenuContentComponent } from './navigation-menu-content/navigation-menu-content.component';


@NgModule({
  declarations: [
    NavigationMenuComponent,
    TopNavBarComponent,
    NavigationMenuMobileComponent,
    NavigationMenuContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [TopNavBarComponent]
})
export class TopNavBarModule {}
