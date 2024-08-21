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
    {
      id: 1,
      title: 'Anime Loop',
      images: ['assets/img/work/details/pr11.png', 'assets/img/work/details/pr12.png', 'assets/img/work/details/pr13.png', 'assets/img/work/details/pr14.png', 'assets/img/work/details/pr15.png', 'assets/img/work/details/pr16.png'],
      type: 'Angular project',
      preview: 'https://animelooop.netlify.app',
      languages: ['TypeScript', 'REST API', 'HTML/CSS'],
      description: 'Anime Loop is an Angular-powered website designed to provide users with a comprehensive database of anime series and movies. It features a search function, detailed anime profiles, and user reviews, all within a responsive and visually appealing interface.'
    },
    {
      id: 2,
      title: 'Anime Detector',
      images: ['assets/img/work/details/pr21.png', 'assets/img/work/details/pr22.png', 'assets/img/work/details/pr23.png', 'assets/img/work/details/pr24.png'],
      type: 'Angular project',
      preview: 'https://animedetector.netlify.app',
      languages: ['TypeScript', 'REST API', 'HTML/CSS'],
      description: 'Anime Detector is an Angular-based application that uses image recognition technology to identify and provide information about anime characters and scenes. It includes features for image uploading and instant analysis with detailed results.'
    },
    {
      id: 3,
      title: 'Anime Library',
      images: ['assets/img/work/details/pr31.png', 'assets/img/work/details/pr32.png', 'assets/img/work/details/pr33.png', 'assets/img/work/details/pr34.png', 'assets/img/work/details/pr35.png', 'assets/img/work/details/pr36.png', 'assets/img/work/details/pr37.png'],
      type: 'Angular project',
      preview: 'https://library-anime.netlify.app',
      languages: ['TypeScript', 'REST API', 'HTML/CSS'],
      description: 'Anime Library is a site dedicated to sharing anime character art, featuring an extensive collection of images posted by artists. The platform aggregates artwork through an API, allowing users to explore and appreciate a wide variety of anime art.'
    },
    {
      id: 4,
      title: 'Chan Once Said',
      images: ['assets/img/work/details/pr41.png', 'assets/img/work/details/pr42.png'],
      type: 'Angular project',
      preview: 'https://chan-once-said.netlify.app',
      languages: ['TypeScript', 'REST API', 'HTML/CSS'],
      description: 'Chan Once Said is a platform dedicated to sharing and discovering inspirational quotes from anime characters. It allows users to browse, search, and share their favorite quotes in a visually engaging format.'
    },
    {
      id: 5,
      title: 'ChaymaEstate',
      images: ['assets/img/work/details/pr51.png', 'assets/img/work/details/pr52.png', 'assets/img/work/details/pr53.png'],
      type: 'Symfony project',
      preview: 'Not available',
      languages: ['PHP', 'MySQL', 'HTML/CSS'],
      description: 'ChaymaEstate is a real estate management system developed with Symfony. It features property listings, advanced search options, and a user-friendly interface for both buyers and sellers to manage real estate transactions.'
    },
    {
      id: 6,
      title: 'Zaynouta LTD',
      images: ['assets/img/work/details/pr61.png', 'assets/img/work/details/pr62.png', 'assets/img/work/details/pr63.png'],
      type: 'Symfony project',
      preview: 'Not available',
      languages: ['PHP', 'MySQL', 'HTML/CSS'],
      description: 'Zaynouta LTD is an e-commerce platform built with Symfony, offering a robust online shopping experience. It includes features such as product listings, user accounts, and payment integration.'
    },
    {
      id: 7,
      title: 'LimitLess',
      images: ['assets/img/work/details/pr71.png', 'assets/img/work/details/pr72.png', 'assets/img/work/details/pr73.png'],
      type: 'Symfony project',
      preview: 'Not available',
      languages: ['PHP', 'MySQL', 'HTML/CSS'],
      description: 'LimitLess is an educational quiz platform developed using Symfony. It provides an interactive environment for users to take and create quizzes on various subjects, with features for tracking progress and performance.'
    },
    {
      id: 8,
      title: 'Visitors Management',
      images: ['assets/img/work/details/pr81.png', 'assets/img/work/details/pr82.png', 'assets/img/work/details/pr83.png', 'assets/img/work/details/pr84.png', 'assets/img/work/details/pr85.png', 'assets/img/work/details/pr86.png'],
      type: 'PowerApps application',
      preview: 'Not available',
      languages: ['PowerFX'],
      description: 'Visitors Management is a PowerApps application designed to streamline the process of tracking and managing visitors to a company. It includes features for check-in/check-out, visitor logs, and reporting.'
    },
    {
      id: 9,
      title: 'PFE Hub',
      images: ['assets/img/work/details/pr91.png', 'assets/img/work/details/pr92.png', 'assets/img/work/details/pr93.png', 'assets/img/work/details/pr94.png', 'assets/img/work/details/pr95.png', 'assets/img/work/details/pr96.png', 'assets/img/work/details/pr97.png', 'assets/img/work/details/pr98.png', 'assets/img/work/details/pr99.png'],
      type: 'ASP.NET MVC application',
      preview: 'Not available',
      languages: ['C#', 'HTML/CSS'],
      description: 'PFE Hub is an ASP.NET MVC application designed to manage and organize student thesis presentations. It includes features for scheduling, document management, and feedback collection.'
    },
    {
      id: 10,
      title: 'Horoscope',
      images: ['assets/img/work/details/pr101.png', 'assets/img/work/details/pr102.png', 'assets/img/work/details/pr103.png', 'assets/img/work/details/pr104.png', 'assets/img/work/details/pr105.png', 'assets/img/work/details/pr106.png', 'assets/img/work/details/pr107.png', 'assets/img/work/details/pr108.png', 'assets/img/work/details/pr109.png', 'assets/img/work/details/pr110.png', 'assets/img/work/details/pr111.png', 'assets/img/work/details/pr112.png'],
      type: 'IntelliJ project',
      preview: 'Not available',
      languages: ['Java', 'REST API', 'SOAP API'],
      description: 'Horoscope is a Java-based application that provides users with daily horoscope readings based on their astrological signs. It includes features for personalized horoscopes, daily updates, and historical data.'
    },
    {
      id: 11,
      title: 'Anime Infinity',
      images: ['assets/img/work/details/pr120.png', 'assets/img/work/details/pr121.png', 'assets/img/work/details/pr122.png', 'assets/img/work/details/pr123.png', 'assets/img/work/details/pr124.png', 'assets/img/work/details/pr125.png', 'assets/img/work/details/pr126.png', 'assets/img/work/details/pr127.png', 'assets/img/work/details/pr128.png', 'assets/img/work/details/pr129.png', 'assets/img/work/details/pr130.png', 'assets/img/work/details/pr131.png', 'assets/img/work/details/pr132.png', 'assets/img/work/details/pr133.png', 'assets/img/work/details/pr134.png'],
      type: 'IntelliJ project',
      preview: 'Not available',
      languages: ['Java', 'REST API'],
      description: 'Anime Infinity is a comprehensive Java application for anime enthusiasts. It offers a wide range of features including anime tracking, user reviews, and personalized recommendations based on user preferences.'
    },
    {
      id: 12,
      title: 'First Parc',
      images: ['assets/img/work/details/pr135.jpg', 'assets/img/work/details/pr136.png', 'assets/img/work/details/pr137.jpg', 'assets/img/work/details/pr138.jpg', 'assets/img/work/details/pr139.jpg', 'assets/img/work/details/pr140.jpg', 'assets/img/work/details/pr141.jpg', 'assets/img/work/details/pr142.jpg', 'assets/img/work/details/pr143.jpg', 'assets/img/work/details/pr144.jpg', 'assets/img/work/details/pr145.jpg', 'assets/img/work/details/pr146.jpg', 'assets/img/work/details/pr147.jpg', 'assets/img/work/details/pr148.jpg', 'assets/img/work/details/pr149.jpg', 'assets/img/work/details/pr150.jpg'],
      type: 'Flutter project',
      preview: 'Not available',
      languages: ['Dart', 'C#', 'SQL'],
      description: 'First Parc is a Flutter application designed for park management. It includes features for park maintenance scheduling, visitor tracking, and reporting, all within a user-friendly mobile interface.'
    }
  ];

}
