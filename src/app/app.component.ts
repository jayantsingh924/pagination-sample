import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Gym',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Office',
      url: 'https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Gym',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Office',
      url: 'https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Gym',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Office',
      url: 'https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Gym',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Office',
      url: 'https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Gym',
      url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Office',
      url: 'https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

  checkIndex(index:number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
