import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare const FB: any;
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

 /* constructor(private router : Router) { }

  ngOnInit() {
  }
mainPage(){
  this.router.navigate([`/`]);
}*/
  token: any;
  loged: boolean = false;
  user = { name: 'Hello' };

  constructor() { }

  logout(){
    FB.logout(function(response) {
      console.log(response);
      document.location.reload();
    });
  }

  login(){
    FB.login(function(response){
      if(response.status === 'connected'){
        console.log(response);
        document.getElementById('status').innerHTML = 'we are connected';
      } else if(response.status === 'not_authorized') {
        console.log(response);
        document.getElementById('status').innerHTML = 'we are not logged in.'
      } else {
        console.log(response);
        document.getElementById('status').innerHTML = 'you are not logged in to Facebook';
      }

    });
  }

  me() {
    FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range,friends',
      function(result) {
        if (result && !result.error) {
          this.user = result;
          console.log(this.user);
        } else {
          console.log(result.error);
        }
      });
  }

  ngOnInit() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '344244819437894',
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
          document.getElementById('status').innerHTML = 'we are connected';
        } else if(response.status === 'not_authorized') {
          document.getElementById('status').innerHTML = 'we are not logged in.'
        } else {
          document.getElementById('status').innerHTML = 'you are not logged in to Facebook';
        }
      });
      // FB.AppEvents.logPageView();
    };

  }
}
