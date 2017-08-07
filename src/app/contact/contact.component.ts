

import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { trigger, transition, style, animate} from '@angular/core'

@Component({
  selector: 'app-contact',

animations: [
    trigger(
      'myAnimation',
      [
        transition(
        ':enter', [
          style({ opacity: 0}),
          animate('500ms', style({ 'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({ opacity: 1}),
          animate('500ms', style({ 'opacity': 0}))
          ]
      )]
    )
  ],

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class contactComponent implements OnInit {
  contactTitle = 'welcome again...';
  isShowMe = false;
  @Input() contacts 
  @Input() contact
  constructor() { }
    clicked(event){
      event.stopPropagation();
      this.isShowMe = !this.isShowMe
    }
  ngOnInit() {
  }

}
