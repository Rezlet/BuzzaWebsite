import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//#region Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NewsSlidesComponent } from './Components/news-slides/news-slides.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { BannerComponent } from './Components/banner/banner.component';
import { IntroMenuComponent } from './Components/intro-menu/intro-menu.component';
import { IntroContactComponent } from './Components/intro-contact/intro-contact.component';
import { DownloadComponent } from './Components/download/download.component';
//#endregion

//#region Functions
import { HomeComponent } from './Function/home/home.component';
import { AboutUsComponent } from './Function/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { RecruitmentComponent } from './Function/recruitment/recruitment.component';
import { ContactComponent } from './Function/contact/contact.component';
import { OrderComponent } from './Function/order/order.component';
import { CartComponent } from './Function/cart/cart.component';
import { NewsComponent } from './Function/news/news.component';
import { MenuComponent } from './Function/menu/menu.component';
import { BookingComponent } from './Function/booking/booking.component';
import { VoucherComponent } from './Function/voucher/voucher.component';
import { FlashSaleComponent } from './Function/flash-sale/flash-sale.component';
import { CategoryComponent } from './Components/category/category.component';
import { FoodItemComponent } from './Components/food-item/food-item.component';
import { HomeContactComponent } from './Components/home-contact/home-contact.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';
import { TableBookingDetailsComponent } from './Components/table-booking-details/table-booking-details.component';
import { OverlayComponent } from './Components/overlay/overlay.component';
import { CheckOrderComponent } from './Function/check-order/check-order.component';
import { VoucherItemComponent } from './Components/voucher-item/voucher-item.component';
import { ChangeVoucherComponent } from './Components/change-voucher/change-voucher.component';
import { VoucherItemDisableComponent } from './Components/voucher-item-disable/voucher-item-disable.component';
import { VoucherNewsSlidesComponent } from './Components/voucher-news-slides/voucher-news-slides.component';
import { VoucherForYouComponent } from './Components/voucher-for-you/voucher-for-you.component';
import { BookingLayoutComponent } from './Components/booking-layout/booking-layout.component';
import { BranchItemComponent } from './Components/branch-item/branch-item.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeVi from '@angular/common/locales/vi';
import { AsyncPipe, registerLocaleData } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfirmOrderComponent } from './Function/confirm-order/confirm-order.component';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { OtpComponent } from './Components/otp/otp.component';
import { RewardsComponent } from './Function/rewards/rewards.component';

registerLocaleData(localeVi, 'vi');
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/Languages/', '.json');
}
//#endregion
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsSlidesComponent,
    HomeComponent,
    AboutUsComponent,
    AppComponent,
    RecruitmentComponent,
    ContactComponent,
    OrderComponent,
    CartComponent,
    CarouselComponent,
    BannerComponent,
    IntroMenuComponent,
    IntroContactComponent,
    DownloadComponent,
    NewsComponent,
    MenuComponent,
    BookingComponent,
    VoucherComponent,
    FlashSaleComponent,
    CategoryComponent,
    FoodItemComponent,
    HomeContactComponent,
    ProfileUserComponent,
    BookingDetailsComponent,
    TableBookingDetailsComponent,
    OverlayComponent,
    CheckOrderComponent,
    VoucherItemComponent,
    ChangeVoucherComponent,
    VoucherItemDisableComponent,
    VoucherNewsSlidesComponent,
    VoucherForYouComponent,
    BookingLayoutComponent,
    BranchItemComponent,
    ConfirmOrderComponent,
    LoginLayoutComponent,
    OtpComponent,
    RewardsComponent,
    // OTPRoutingModule,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    RouterModule.forRoot([
      {
        path: 'buzza',
        component: HomeComponent,
      },
    ]),
  ],
  providers: [AsyncPipe, { provide: LOCALE_ID, useValue: 'vi' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    let lang: any = 'vi';
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang');
    }

    this.translateService.addLangs(['en', 'vi']);
    this.translateService.setDefaultLang(lang);
    localStorage.setItem('lang', lang);
    console.log(lang);
  }
}
