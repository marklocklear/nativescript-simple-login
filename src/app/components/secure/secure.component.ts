import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { Data } from "../../shared-data";

@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html",
})
export class SecureComponent implements OnInit {
    currentUser;
    public constructor(private router: RouterExtensions, private data: Data) { }

    public ngOnInit() {
        if(!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
        else {
            this.currentUser = this.data.storage;
        }
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    }

}