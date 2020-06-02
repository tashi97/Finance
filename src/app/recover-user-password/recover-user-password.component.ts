import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-recover-user-password',
  templateUrl: './recover-user-password.component.html',
  styleUrls: ['./recover-user-password.component.css']
})
export class RecoverUserPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function(){
   console.log('helo admin')
        $('#login').click(function(){
          if($('#userName').val() == [] || $('#userName').val() == "" || $('#userName').val() == "null" || $('#userName').val() == null) alert("Please Enter Username")
        else{
          var url = 'http://local.api.com/api/user/recoverpassword';
          var data = {
            emailid : $('#userName').val(),
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
              console.log("very new response ",result)
            if(result.error)
            alert("Username Does not exist");
            else
            alert("Link has been seet to your email Id");
            
            })

        }
        })

      })
    })(jQuery);


  }

}

