import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { ServicesComponent } from './components/services/services.component';
import { DirectordetailsComponent } from './components/directordetails/directordetails.component';
import { UiUxDesignComponent } from './components/ui-ux-design/ui-ux-design.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioInnerComponent } from './portfolio-inner/portfolio-inner.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GatiComponent } from './portfolio/gati/gati.component';
import { MywayCarComponent } from './portfolio/myway-car/myway-car.component';
import { DineroComponent } from './portfolio/dinero/dinero.component';
import { GohostelComponent } from './portfolio/gohostel/gohostel.component';
import { DhukanComponent } from './portfolio/dhukan/dhukan.component';
import { TripcareComponent } from './portfolio/tripcare/tripcare.component';
import { UcodComponent } from './portfolio/ucod/ucod.component';
import { GoodtimesComponent } from './portfolio/goodtimes/goodtimes.component';
import { AlMasaoodComponent } from './portfolio/al-masaood/al-masaood.component';
import { EvexproComponent } from './portfolio/evexpro/evexpro.component';
import { IndiaCmeComponent } from './portfolio/india-cme/india-cme.component';
import { KoachKonnectComponent } from './portfolio/koach-konnect/koach-konnect.component';
import { LohaComponent } from './portfolio/loha/loha.component';
import { MahaliComponent } from './portfolio/mahali/mahali.component';
import { QuestComponent } from './portfolio/quest/quest.component';
import { SamathaComponent } from './portfolio/samatha/samatha.component';
import { SandalsComponent } from './portfolio/sandals/sandals.component';
import { SeeWheelersComponent } from './portfolio/see-wheelers/see-wheelers.component';
import { SolistaComponent } from './portfolio/solista/solista.component';
import { SuwaahComponent } from './portfolio/suwaah/suwaah.component';
import { MobileAppDevelopmentComponent } from './services/mobile-app-development/mobile-app-development.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
// import {MatPaginatorModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DirectorsComponent,
    ServicesComponent,
    DirectordetailsComponent,
    UiUxDesignComponent,
    ContactComponent,
    PortfolioComponent,
    PortfolioInnerComponent,
    IndustriesComponent,
    GatiComponent,
    MywayCarComponent,
    DineroComponent,
    GohostelComponent,
    DhukanComponent,
    TripcareComponent,
    UcodComponent,
    GoodtimesComponent,
    AlMasaoodComponent,
    EvexproComponent,
    IndiaCmeComponent,
    KoachKonnectComponent,
    LohaComponent,
    MahaliComponent,
    QuestComponent,
    SamathaComponent,
    SandalsComponent,
    SeeWheelersComponent,
    SolistaComponent,
    SuwaahComponent,
    MobileAppDevelopmentComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    // MatPaginatorModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: [{ page: '' }] },
      { path: 'directors', component: DirectorsComponent, data: [{ page: 'directors' }] },
      { path: 'services', component: ServicesComponent, data: [{ page: 'services' }] },
      { path: 'directordetails', component: DirectordetailsComponent, data: [{ page: 'directordetails' }] },
      { path: 'ui-ux-design', component: UiUxDesignComponent, data: [{ page: 'ui-ux-design' }] },
      { path: 'contact', component: ContactComponent, data: [{ page: 'contact' }] },
      { path: 'portfolio', component: PortfolioComponent, data: [{ page: 'portfolio' }] },
      { path: 'portfolio-inner', component: PortfolioInnerComponent, data: [{ page: 'portfolio-inner' }] },
      { path: 'industries', component: IndustriesComponent, data: [{ page: 'industries' }] },
      { path: 'gati', component: GatiComponent, data: [{ page: 'gati' }] },
      { path: 'mywaycar', component: MywayCarComponent, data: [{ page: 'mywaycar' }] },
      { path: 'dinero', component: DineroComponent, data: [{ page: 'dinero' }] },
      { path: 'gohostel', component: GohostelComponent, data: [{ page: 'gohostel' }] },
      { path: 'dhukan', component: DhukanComponent, data: [{ page: 'dhukan' }] },
      { path: 'tripcare', component: TripcareComponent, data: [{ page: 'tripcare' }] },
      { path: 'ucod', component: UcodComponent, data: [{ page: 'ucod' }] },
      { path: 'goodtimes', component: GoodtimesComponent, data: [{ page: 'goodtimes' }] },
      { path: 'all-masaood', component: AlMasaoodComponent, data: [{ page: 'all-masaood' }] },
      { path: 'evexpro', component: EvexproComponent, data: [{ page: 'evexpro' }] },
      { path: 'india-cme', component: IndiaCmeComponent, data: [{ page: 'india-cme' }] },
      { path: 'koach-konnect', component: KoachKonnectComponent, data: [{ page: 'koach-konnect' }] },
      { path: 'loha', component: LohaComponent, data: [{ page: 'loha' }] },
      { path: 'mahali', component: MahaliComponent, data: [{ page: 'mahali' }] },
      { path: 'quest', component: QuestComponent, data: [{ page: 'quest' }] },
      { path: 'samatha', component: SamathaComponent, data: [{ page: 'samatha' }] },
      { path: 'sandals', component: SandalsComponent, data: [{ page: 'sandals' }] },
      { path: 'see-weeler', component: SeeWheelersComponent, data: [{ page: 'see-weeler' }] },
      { path: 'solista', component: SolistaComponent, data: [{ page: 'solista' }] },
      { path: 'suwaah', component: SuwaahComponent, data: [{ page: 'suwaah' }] },
      { path: 'mobile-app', component: MobileAppDevelopmentComponent, data: [{ page: 'mobile-app' }] },
      { path: 'aboutus', component: AboutusComponent, data: [{ page: 'aboutus' }] }

    ], { useHash: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
