import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  news: any[] = [
    {
      image:'../../../assets/images/card1.png',
      date:'16 November 2022',
      description:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'
    },
    {
      image:'../../../assets/images/card2.png',
      date:'16 November 2022',
      description:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'
    },
    {
      image:'../../../assets/images/card3.png',
      date:'16 November 2022',
      description:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.'
    }
  ]

}
