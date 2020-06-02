import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function(){
   console.log('helo admin')
        $('#login').click(function(){
          if($('#userName').val() == [] || $('#userName').val() == "" || $('#userName').val() == "null" || $('#userName').val() == null) alert("Please Enter Username")
        else if($('#password').val() == [] || $('#password').val() == "" || $('#password').val() == "null" || $('#password').val() == null) alert("Please Enter Password")
        else{
          var url = 'http://sikkimfred.local.api/api/user/login';
       
       
          var data = {
            userName : $('#userName').val(),
            password : $('#password').val()
          }
          console.log('sending data',data)
            fetch(url,{
            method : 'POST',
            body: JSON.stringify(data),
            headers : new Headers({
             'Content-Type': 'application/json'
            })
            }).then(res=>res.json())
            .catch(error => console.error("Error",error))
            .then (result => {
              console.log("result",result)
            if(result.error)
            alert("Invalid username or password.");
            else{
              //console.log("response recieve",result)
              done()
            }
        
            })

        }
        })

        

      })
    })(jQuery);

    function done(){
     window.location.href="/Admin-Dashboard"
    }
  }



}
