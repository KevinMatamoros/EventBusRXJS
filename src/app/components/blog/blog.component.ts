import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/model';
import { EventBusService } from '../../eventBus/event-bus.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
