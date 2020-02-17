import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../eventBus/event-bus.service';
import { Song } from '../../model/model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  songs: Song[] = [];
  activeStore: boolean = false;

  constructor(
    private busService: EventBusService
  ) { }

  ngOnInit() {
    this.busService.on('addSong', (song: Song) => {
      this.songs.push(song);
    });
    this.busService.on('activeStore', (flag: boolean) => {
      this.activeStore = flag;
    });
  }

}
