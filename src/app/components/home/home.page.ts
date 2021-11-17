import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  todoItem = [];

  constructor(
    public menuCtrl: MenuController,
    private _homeService: HomeService
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.getTodoData();
  }

  getTodoData() {
    this._homeService.getTodoRequest().subscribe((data: any) => {
      if (data.data) {
        console.log(data);
        this.todoItem = data.data;
      }
    });
  }
}
