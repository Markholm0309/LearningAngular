import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /** Parent to child example */
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegiser = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.regiser(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegiser.emit(false);
  }
}
