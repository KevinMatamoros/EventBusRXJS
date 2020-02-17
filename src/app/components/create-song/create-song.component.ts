import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EventBusService } from '../../eventBus/event-bus.service';
import { EventData } from '../../eventBus/model/event-class';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  form: FormGroup
  store: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private busService: EventBusService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      artist: ['', Validators.required]
    });

  }
  turnStore(){
    this.store = !this.store;
    this.busService.emit(new EventData('activeStore',this.store));

  }

  ngOnInit() {
  }

  onSubmit() {
    this.busService.emit(new EventData('addSong',this.form.value));

  }

}
