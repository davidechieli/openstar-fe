import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class PermissionService {
	private isPermissionsSubject = new BehaviorSubject<boolean>(false);
	isPermissions$ = this.isPermissionsSubject.asObservable();

	constructor() {}

	setPermissions(isPermissions: boolean) {
		this.isPermissionsSubject.next(isPermissions);
	}
}
