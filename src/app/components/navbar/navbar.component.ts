import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public menu: any[];
  public name: any;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    const menu = this.db.object('MENU');
    const name = this.db.object('HOME');
    menu.snapshotChanges()
      .subscribe(
        (item: any) => {
          this.menu = item.payload.val();
        }
      )

    name.snapshotChanges()
    .subscribe(
      (item: any) => {
        this.name = item.payload.val();
      }
    )
  }

  removeClass() {
    const clas = document.getElementsByClassName('navbar-collapse');
    clas[0].classList.remove('in');
  }
}
