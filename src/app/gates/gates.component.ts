import { Component } from '@angular/core';

@Component({
  selector: 'app-gates',
  templateUrl: './gates.component.html',
  styleUrls: ['./gates.component.css']
})
export class GatesComponent {
  billQuote: string = '«Patience is a key element of success»';
  billQuotes: string[] =
    ['If you think your teacher is tough, wait till you get boss',
      'Life is not fair — get used to it!',
      'Success is a lousy teacher. Це seduces smart people in thinking they can\'t lose',
      'Be nice to nerds..'
    ];
  billPortret: any = 'assets/young_gates.jpg';
  billInfo: string[] =
    ['https://en.wikipedia.org/wiki/Bill_Gates',
      'https://www.gatesfoundation.org/',
      'https://www.gatesnotes.com/',
      'https://twitter.com/billgates'
    ]
}
