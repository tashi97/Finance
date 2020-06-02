import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
        $('[data-toggle=collapse-side]').click(function(e) {
          $('.side-collapse').toggleClass('open');
        });
        console.log("Hello from jQuery!");
      });
    })(jQuery);
  }
}