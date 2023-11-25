import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  navigators = [
    {
      id: 1,
      name: "Cost History",
      svgPath: "../../assets/icons/dashboard.svg",
      path: "/dashboard"
    },
    {
      id: 2,
      name: "Schedule Buy",
      svgPath: "../../assets/icons/schedule.svg",
      path: "/schedule"
    }
    // {
    //   id: 5,
    //   name: "Devices",
    //   svgPath: "../../assets/icons/emissions.svg",
    //   path: "/devices"
    // },
    // {
    //   id: 6,
    //   name: "Plans",
    //   svgPath: "../../assets/icons/emissions.svg",
    //   path: "/plans"
    // }
  ]
}
