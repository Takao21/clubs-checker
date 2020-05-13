import { Component, OnInit } from '@angular/core';
import { ClubsService } from '../clubs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public records: any;
  output: string;

  public clubToDisplay: object = {
    "name": "Sample Club",
    "members": ["John One", "John Two", "John Three"]
  }

  constructor(private _clubService: ClubsService) { }

  ngOnInit(): void {
    this._clubService.getClubs().subscribe(data => this.records = data)
  }

  ngAfterViewInit(): void {
    (<HTMLElement>document.getElementsByClassName("run-anim")[0]).style.display = "none";
  }

  private callTrue(): void {
    (<HTMLElement>document.getElementsByClassName("run-anim")[0]).style.display = "none";  //hide curent animation
    (<HTMLElement>document.getElementsByClassName("run-anim")[1]).style.display = "none";
    (<HTMLElement>document.getElementsByClassName("run-anim")[0]).classList.remove("animation-ctn");  //remove all existing animation classes
    (<HTMLElement>document.getElementsByClassName("run-anim")[1]).classList.remove("animation-ctn");
    setTimeout(function() {
      (<HTMLElement>document.getElementsByClassName("run-anim")[0]).classList.add("animation-ctn");  //recall only the TRUTH animation
      (<HTMLElement>document.getElementsByClassName("animation-ctn")[0]).style.display = "block";  //display the new TRUTH animation
    }, 1);  //need a short timeout gap to restart animation if we use method of manipulating animation classes
  };
  private callFalse(): void {
    (<HTMLElement>document.getElementsByClassName("run-anim")[0]).style.display = "none";
    (<HTMLElement>document.getElementsByClassName("run-anim")[1]).style.display = "none";
    (<HTMLElement>document.getElementsByClassName("run-anim")[0]).classList.remove("animation-ctn");
    (<HTMLElement>document.getElementsByClassName("run-anim")[1]).classList.remove("animation-ctn");
    setTimeout(function() {
      (<HTMLElement>document.getElementsByClassName("run-anim")[1]).classList.add("animation-ctn");  //recall only the FALSE animation
      (<HTMLElement>document.getElementsByClassName("animation-ctn")[0]).style.display = "block";
    }, 1);
  };
  public checkClubs() {
    let inputClub = (<HTMLInputElement>document.getElementById("clubInput")).value.toUpperCase();
    let inputPerson = (<HTMLInputElement>document.getElementById("personInputFirst")).value + " " + (<HTMLInputElement>document.getElementById("personInputLast")).value;
    let isMember = false;
    // Input Validation
    if (!(<HTMLInputElement>document.getElementById("personInputFirst")).value || !(<HTMLInputElement>document.getElementById("personInputLast")).value || !inputClub) {
      this.output = "Please fill out informations precisely.";
    }
    else {  //AJAX Call
      this.records.forEach(x => {
        if (x.name.toUpperCase() === inputClub) {
          x.members.indexOf(inputPerson) > -1 ? isMember = true : isMember = false;
        }
      })
      if (isMember) {
        this.output = `Yes, ${inputPerson} is a member of ${inputClub}.`;
        this.callTrue();
      }
      else {
        this.output = `No, ${inputPerson} is not a member of ${inputClub}.`;
        this.callFalse();
      }
    }
  };

  public listClubMembers(): void {
    (<HTMLTableElement>document.getElementById("notfound")).style.display = "none";
    let input = (<HTMLInputElement>document.getElementById("listInput")).value.toUpperCase();
    let found = false;
    this.records.forEach(x => {
      if(x.name.toUpperCase() === input) {
        this.clubToDisplay = x;
        found = true;
        (<HTMLTableElement>document.getElementById("displayTable")).style.display = "table";
      }
    });
    if (!found) {
      (<HTMLTableElement>document.getElementById("displayTable")).style.display = "none";
      setTimeout(function() {
        (<HTMLTableElement>document.getElementById("notfound")).style.display = "block";
      },500);
    }
  }


}
