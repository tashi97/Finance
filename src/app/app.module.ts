import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SimplecardComponent } from './simplecard/simplecard.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { PartnerComponent } from './partner/partner.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { FormsComponent } from './forms/forms.component';
import { TrainingComponent } from './training/training.component';
import { LetterComponent } from './letter/letter.component';
import { NotificationComponent } from './notification/notification.component';
import { GeneralComponent } from './general/general.component';
import { OfficeComponent } from './office/office.component';
import { GazatteComponent } from './gazatte/gazatte.component';
import { PensionComponent } from './pension/pension.component';
import { PensionNotificationComponent } from './pension-notification/pension-notification.component';
import { PaoNotificationComponent } from './pao-notification/pao-notification.component';
import { DaComponent } from './da/da.component';
import { TransferComponent } from './transfer/transfer.component';
import { DdoRegisterationComponent } from './ddo-registeration/ddo-registeration.component';
import { RcoRegisterationComponent } from './rco-registeration/rco-registeration.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AgReportComponent } from './ag-report/ag-report.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddPdfComponent } from './add-pdf/add-pdf.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AboutDepartmentComponent } from './about-department/about-department.component';
import { FeedbackReportComponent } from './feedback-report/feedback-report.component';
import { RcoReportComponent } from './rco-report/rco-report.component';
import { DdoReportComponent } from './ddo-report/ddo-report.component';
import { SbsComponent } from './sbs/sbs.component';
import { DdoUsersComponent } from './ddo-users/ddo-users.component';
import { RcoUsersComponent } from './rco-users/rco-users.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { AdminnAvbarComponent } from './adminn-avbar/adminn-avbar.component';
import { RecoverUserPasswordComponent } from './recover-user-password/recover-user-password.component';
import { GpfDetailsComponent } from './gpf-details/gpf-details.component';
import { ProfilePayslipComponent } from './profile-payslip/profile-payslip.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PayslipDetailsComponent } from './payslip-details/payslip-details.component';
import { ReportsFormComponent } from './reports-form/reports-form.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SbsAdminRegistrationComponent } from './sbs-admin-registration/sbs-admin-registration.component';
import { SbsAdminUserComponent } from './sbs-admin-user/sbs-admin-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SimplecardComponent,
    FlipcardComponent,
    PartnerComponent,
    FooterComponent,
    FeedbackComponent,
    ContactusComponent,
    SitemapComponent,
    VacanciesComponent,
    FormsComponent,
    TrainingComponent,
    LetterComponent,
    NotificationComponent,
    GeneralComponent,
    OfficeComponent,
    GazatteComponent,
    PensionComponent,
    PensionNotificationComponent,
    PaoNotificationComponent,
    DaComponent,
    TransferComponent,
    DdoRegisterationComponent,
    RcoRegisterationComponent,
    ReceiptComponent,
    AgReportComponent,
    AdminLoginComponent,
    AddPdfComponent,
    AddNotificationComponent,
    AdminDashboardComponent,
    AboutDepartmentComponent,
    FeedbackReportComponent,
    RcoReportComponent,
    DdoReportComponent,
    SbsComponent,
    DdoUsersComponent,
    RcoUsersComponent,
      UpdatePasswordComponent,
    AdminnAvbarComponent,
    RecoverUserPasswordComponent,
    GpfDetailsComponent,
    ProfilePayslipComponent,
    ProfileDetailsComponent,
    PayslipDetailsComponent,
    ReportsFormComponent,
    AdminUsersComponent,
    SbsAdminRegistrationComponent,
    SbsAdminUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
