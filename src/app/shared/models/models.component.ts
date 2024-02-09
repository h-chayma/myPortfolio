import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface CardDetails {
  id: number;
  title: string;
  images: string[];
  type: string;
  preview: string;
  languages: string[];
  description: string;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  cardDetailsList: CardDetails[] = [
    { id: 1, title: 'Anime Loop', images: ['assets/img/work/details/pr11.png', 'assets/img/work/details/pr12.png', 'assets/img/work/details/pr13.png', 'assets/img/work/details/pr14.png', 'assets/img/work/details/pr15.png', 'assets/img/work/details/pr16.png'], type: 'Angular project', preview: 'https://animelooop.netlify.app', languages: ['TypeScript', 'REST API', 'HTML/CSS'], description: 'Project description' },
    { id: 2, title: 'Anime Detector', images: ['assets/img/work/details/pr21.png', 'assets/img/work/details/pr22.png', 'assets/img/work/details/pr23.png', 'assets/img/work/details/pr24.png'], type: 'Angular project', preview: 'https://animedetector.netlify.app', languages: ['TypeScript', 'REST API', 'HTML/CSS'], description: 'Project description' },
    { id: 3, title: 'Anime Library', images: ['assets/img/work/details/pr31.png', 'assets/img/work/details/pr32.png', 'assets/img/work/details/pr33.png', 'assets/img/work/details/pr34.png', 'assets/img/work/details/pr35.png', 'assets/img/work/details/pr36.png', 'assets/img/work/details/pr37.png'], type: 'Angular project', preview: 'https://library-anime.netlify.app', languages: ['TypeScript', 'REST API', 'HTML/CSS'], description: 'Project description' },
    { id: 4, title: 'Chan Once Said', images: ['assets/img/work/details/pr41.png', 'assets/img/work/details/pr42.png'], type: 'Angular project', preview: 'https://chan-once-said.netlify.app', languages: ['TypeScript', 'REST API', 'HTML/CSS'], description: 'Project description' },
    { id: 5, title: 'ChaymaEstate', images: ['assets/img/work/details/pr51.png', 'assets/img/work/details/pr52.png', 'assets/img/work/details/pr53.png'], type: 'Symfony project', preview: 'Not available', languages: ['PHP', 'MySQL', 'HTML/CSS'], description: 'Project description' },
    { id: 6, title: 'Zaynouta LTD', images: ['assets/img/work/details/pr61.png', 'assets/img/work/details/pr62.png', 'assets/img/work/details/pr63.png'], type: 'Symfony project', preview: 'Not available', languages: ['PHP', 'MySQL', 'HTML/CSS'], description: 'Project description' },
    { id: 7, title: 'LimitLess', images: ['assets/img/work/details/pr71.png', 'assets/img/work/details/pr72.png', 'assets/img/work/details/pr73.png'], type: 'Symfony project', preview: 'Not available', languages: ['PHP', 'MySQL', 'HTML/CSS'], description: 'Project description' },
    { id: 8, title: 'Visitors Management', images: ['assets/img/work/details/pr81.png', 'assets/img/work/details/pr82.png', 'assets/img/work/details/pr83.png', 'assets/img/work/details/pr84.png', 'assets/img/work/details/pr85.png', 'assets/img/work/details/pr86.png'], type: 'PowerApps application', preview: 'Not available', languages: ['PowerFX'], description: 'Project description' },
    { id: 9, title: 'PFE Hub', images: ['assets/img/work/details/pr91.png', 'assets/img/work/details/pr92.png', 'assets/img/work/details/pr93.png', 'assets/img/work/details/pr94.png', 'assets/img/work/details/pr95.png', 'assets/img/work/details/pr96.png', 'assets/img/work/details/pr97.png', 'assets/img/work/details/pr98.png', 'assets/img/work/details/pr99.png'], type: 'ASP.NET MVC application', preview: 'Not available', languages: ['C#', 'HTML/CSS'], description: 'Project description' },
    { id: 10, title: 'Horoscope', images: ['assets/img/work/details/pr101.png', 'assets/img/work/details/pr102.png', 'assets/img/work/details/pr103.png', 'assets/img/work/details/pr104.png', 'assets/img/work/details/pr105.png', 'assets/img/work/details/pr106.png', 'assets/img/work/details/pr107.png', 'assets/img/work/details/pr108.png', 'assets/img/work/details/pr109.png', 'assets/img/work/details/pr110.png', 'assets/img/work/details/pr111.png', 'assets/img/work/details/pr112.png'], type: 'IntelliJ project', preview: 'Not available', languages: ['Java', 'REST API', 'SOAP API'], description: 'Project description' },
    { id: 11, title: 'Anime Infinity', images: ['assets/img/work/details/pr120.png', 'assets/img/work/details/pr121.png', 'assets/img/work/details/pr122.png', 'assets/img/work/details/pr123.png', 'assets/img/work/details/pr124.png', 'assets/img/work/details/pr125.png', 'assets/img/work/details/pr126.png', 'assets/img/work/details/pr127.png', 'assets/img/work/details/pr128.png', 'assets/img/work/details/pr129.png', 'assets/img/work/details/pr130.png', 'assets/img/work/details/pr131.png', 'assets/img/work/details/pr132.png', 'assets/img/work/details/pr133.png', 'assets/img/work/details/pr134.png'], type: 'IntelliJ project', preview: 'Not available', languages: ['Java', 'REST API'], description: 'Project description' },
  ];
}
