import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    (function ($) {
     
          var url = 'http://10.182.1.43:8080/api/PaySlip/GetSalaryBillByEmpDetails?EmpCode=151%2Fpao&Month=7&Year=2019';
       
       
          var data = {
            EmpCode : '152/pao',
            Month : '7',
            Year : '2019'
            // password : $('#password').val()
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
            console.log("newresult hai",result)

        
       

      })
    })(jQuery);


  }

}
