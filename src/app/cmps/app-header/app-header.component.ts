import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  loggedInUser$
  ngOnInit(): void {
    this.loggedInUser$ = this.userService.loggedInUser$
  }

}
