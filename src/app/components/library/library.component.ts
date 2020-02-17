import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../eventBus/event-bus.service';
import { Song } from '../../model/model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  songs: Song[] = [];

  constructor(
    private busService: EventBusService
  ) { }

  ngOnInit() {
    this.busService.on('addSong', (song: Song) => {
      this.songs.push(song);
    });
  }

}
