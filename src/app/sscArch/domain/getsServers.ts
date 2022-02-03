import { Server } from "./server";
import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";

export interface GetsServers {
    getAll(): Observable<Server[]>;
}

export const GETS_SERVERS = new InjectionToken<GetsServers>("GETS_SERVERS")