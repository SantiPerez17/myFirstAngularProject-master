import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-hijo',
  templateUrl: './primer-hijo.component.html',
  styleUrls: ['./primer-hijo.component.scss']
})
export class PrimerHijoComponent implements OnInit {

  titulo: string = "Soy el primer hijo"

  constructor() { }

  ngOnInit(): void {
  }

}
