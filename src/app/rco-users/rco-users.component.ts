import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-rco-users',
  templateUrl: './rco-users.component.html',
  styleUrls: ['./rco-users.component.css']
})
export class RcoUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
       
       $.getJSON('http://sikkimfred.local.api/api/user/rco',data=>{
        console.log(data)
       makeTable(data)
        
       })

      function makeTable(data){
        let table = ` <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
        <thead>
          <tr>
              <th>SL No.</th> 
            <th>Name</th>
            <th>Reg. Type</th>
            <th>User ID</th>
            </tr>
        </thead>
       
        <tbody>`
        $.each(data,(i,item)=>{

        table+=`  <tr>
            <td>${i+1}</td>
            <td>${item.emailId}</td>
            <td>${item.registrationType}</td>
            <td>${item.id}</td>
          
           <td><button class="btn btn-primary send" email="${item.emailId}">Send Details</button></td>
           <td><button class="btn btn-danger delete" id="${item.id}">Delete User</button></td>
          </tr>`
        })
       table+=`</tbody>
      </table>`
      $('#result').html(table)
      }

      $('#result').on('click', '.send', function() {
          var url = 'http://local.api.com/api/user/recoverpassword';
         
       
        const email = $(this).attr('email')
          var data = {
            emailId : email,
         
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
            
alert('User Details Sent to Email Id')
            
            })
    })



    
    $('#result').on('click', '.delete', function() {
      const id = $(this).attr('id')
      console.log("id hai",id)

      fetch('http://sikkimfred.local.api/api/RCORegistration/' + id, {
        method: 'DELETE',
      }).then(res => res.text()) // or res.json()
      .then(res => refresh())
    })



    function refresh(){
  
      $.getJSON('http://sikkimfred.local.api/api/user/rco',data=>{
         makeTable(data)
         alert("User Deleted Successfully")
        })
    }

    

      });
    })(jQuery);
  }

}

