import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openNav(): void {
    document.getElementById("mySidenav").style.width = "10em";
  }

  /* Set the width of the side navigation to 0 */
  public closeNav(): void {
    document.getElementById("mySidenav").style.width = "0";
  }

}
