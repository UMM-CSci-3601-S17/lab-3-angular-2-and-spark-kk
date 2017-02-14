import { Component, OnInit} from '@angular/core';
import { UserListService } from "./user-list.service";
import { User } from "./user";
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'user-list-component',
    providers: [FilterBy],
    templateUrl: 'user-list.component.html',
})

export class UserListComponent implements OnInit {
    public users: User[];

    constructor(private userListService: UserListService) {
        //this.users = userListService.getUsers();

    }

    ngOnInit(): void {
        this.userListService.getUsers().subscribe(
            users => this.users = users,
            err => {
                console.log(err);
            }
        );
    }
}


