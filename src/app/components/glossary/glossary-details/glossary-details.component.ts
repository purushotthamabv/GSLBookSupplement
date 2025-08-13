import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-glossary-details',
  standalone: true,
  imports: [],
  templateUrl: './glossary-details.component.html',
  styleUrl: './glossary-details.component.scss'
})
export class GlossaryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  // Get route params
  this.route.paramMap.subscribe(params => {
    console.log('Route params:', params);
    const chapter = params.get('chapter');
    console.log('Chapter:', chapter);
    // this.qr_code = Number(params.get('qr_code'));
  });

  // Get the passed entry
  const nav = history.state;
  // if (nav.entry) {
  //   // this.entry = nav.entry;
  // }
}
}
