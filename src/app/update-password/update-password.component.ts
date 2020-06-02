import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (function ($) {
      $(document).ready(function(){
  
        $('.submit').click(function(){
          if($('#old_password').val() == [] || $('#old_password').val() == "" || $('#old_password').val() == "null" || $('#old_password').val() == null) alert("Please Enter Old Password");
        else if($('#new_password').val() == [] || $('#new_password').val() == "" || $('#new_password').val() == "null" || $('#new_password').val() == null) alert("Please Enter New Password");
        else if($('#new_password').val() == [] || $('#new_password').val() == "" || $('#new_password').val() == "null" || $('#new_password').val() == null) alert("Confrim New Password");
        else if($('#confirm_new_password').val() == [] || $('#confirm_new_password').val() == "" || $('#confirm_new_password').val() == "null" || $('#confirm_new_password').val() == null) alert("Please Enter Password")
       
        else{
          
          
          if( $('#new_password').val()  ==  $('#confirm_new_password').val() ){
            var url = 'http://sikkimfred.local.api/api/user/login';
            
          var data = {
            userName : $('#old_password').val(),
            password : $('#new_password').val(),
            confirm_new_password : $('#confirm_new_password').val()
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
          // if(result.error)
          // alert("Invalid username or password.");
          // else{
          //   //console.log("response recieve",result)
          
          // }
      
          })

      


          }
          else{
            alert('Passwords do not match')
          }
          
        }
        
        })

        

      })
    })(jQuery);

   
  }

}
