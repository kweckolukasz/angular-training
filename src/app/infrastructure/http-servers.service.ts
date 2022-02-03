import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsServers } from '../domain/getsServers';
import { Server } from '../domain/server';
import { HasDataCollection } from './response';
import { ServerAttributes } from './server.attribute';

@Injectable({
  providedIn: 'root',
})
export class HttpServersService implements GetsServers {
  constructor(private client: HttpClient) {}
  getAll(): Observable<Server[]> {
    return this.client
      .get<HasDataCollection<ServerAttributes>>('./assets/servers.json')
      .pipe(
        map((response: HasDataCollection<ServerAttributes>) =>
          response.data.map((item) => ({
            name: item.attributes.name,
            url: item.attributes.url,
            isOnline: item.attributes.isOnline,
          }))
        )
      );
  }
}
