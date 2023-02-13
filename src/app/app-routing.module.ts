import { ConfirmOrderComponent } from './Function/confirm-order/confirm-order.component';
import { HomeComponent } from './Function/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Function/about-us/about-us.component';
import { RecruitmentComponent } from './Function/recruitment/recruitment.component';
import { ContactComponent } from './Function/contact/contact.component';
import { OrderComponent } from './Function/order/order.component';
import { NewsComponent } from './Function/news/news.component';
import { MenuComponent } from './Function/menu/menu.component';
import { BookingComponent } from './Function/booking/booking.component';
import { VoucherComponent } from './Function/voucher/voucher.component';
import { FlashSaleComponent } from './Function/flash-sale/flash-sale.component';
import { CheckOrderComponent } from './Function/check-order/check-order.component';
import { RewardsComponent } from './Function/rewards/rewards.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':brandID', component: HomeComponent },
  { path: ':brandID/home', component: HomeComponent },
  { path: ':brandID/about', component: AboutUsComponent },
  { path: ':brandID/recruitment', component: RecruitmentComponent },
  { path: ':brandID/contact', component: ContactComponent },
  { path: ':brandID/order', component: OrderComponent },
  { path: ':brandID/home', component: HomeComponent },
  { path: ':brandID/news', component: NewsComponent },
  { path: ':brandID/menu', component: MenuComponent },
  { path: ':brandID/booking', component: BookingComponent },
  { path: ':brandID/voucher', component: VoucherComponent },
  { path: ':brandID/flash-sale', component: FlashSaleComponent },
  { path: ':brandID/check-order', component: CheckOrderComponent },
  { path: ':brandID/confirm-order', component: ConfirmOrderComponent },
  { path: ':brandID/rewards', component: RewardsComponent },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
