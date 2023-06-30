import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const Liferay: any;

@Component({
  selector: 'blog-detail',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contentBlog: any[] = [];
  

  title = 'angular-portlet-blog-detail';
  token?: string;
  private readonly LIFERAY_API = 'http://192.168.1.32:8080/o/c/blogs/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.token = Liferay.authToken;
    if (!this.token) {
      console.error('Token is not defined');
      return;
    }
    this.http.get<any>(this.LIFERAY_API, {
      headers: {
        'x-csrf-token': this.token
      }
    }).subscribe({
      next: (data: any) => {
        if (data && data.items) {
          this.contentBlog = data.items;
          console.log(this.contentBlog);
        } else {
          console.error('Data received from server is not in the expected format');
        }
      },
      error: (err) => { console.error(err); }
    });
  }
  



}