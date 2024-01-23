import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AccountService } from '../../services/account-service/account.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  providers:[AccountService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  constructor(private service:AccountService, private router:Router){}

  ngOnInit(): void {
  }

  logoutButton():void {
    this.service.logout();
  }
}
