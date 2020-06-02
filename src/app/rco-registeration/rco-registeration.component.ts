import { Component, OnInit } from '@angular/core';
import { doesNotReject } from 'assert';
declare var jQuery: any;
@Component({
  selector: 'app-rco-registeration',
  templateUrl: './rco-registeration.component.html',
  styleUrls: ['./rco-registeration.component.css']
})
export class RcoRegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function ($) {
      $(document).ready(function () {
        let department = []

        $.getJSON('http://sikkimfred.local.api/api/department', data => {
          department = data
          console.log(data)
          fillDropDown('department', data, 'Choose Department', 0)

        })


        $('#submit').click(function () {

          if ($('#RegistrationType').val() == null || $('#RegistrationType').val() == "null" || $('#RegistrationType').val() == [] || $('#RegistrationType').val() == "") alert("Select Registeration Type...")
          else if ($('#adminName').val() == null || $('#adminName').val() == "null" || $('#adminName').val() == [] || $('#adminName').val() == "") alert("Enter Name...")
          else if ($('#department').val() == null || $('#department').val() == "null" || $('#department').val() == [] || $('#department').val() == "") alert("Select Department...")
          else if ($('#designation').val() == null || $('#designation').val() == "null" || $('#designation').val() == [] || $('#designation').val() == "") alert("Enter Designation...")
          else if ($('#district').val() == null || $('#district').val() == "null" || $('#district').val() == [] || $('#district').val() == "") alert("Enter District...")
          else if ($('#officeAddress1').val() == null || $('#officeAddress1').val() == "null" || $('#officeAddress1').val() == [] || $('#officeAddress1').val() == "") alert("Enter Office Address...")
          else if ($('#officeAddress2').val() == null || $('#officeAddress2').val() == "null" || $('#officeAddress2').val() == [] || $('#officeAddress2').val() == "") alert("Enter Office Address...")
          // else if ($('#tinNumber').val() == null || $('#tinNumber').val() == "null" || $('#tinNumber').val() == [] || $('#tinNumber').val() == "") alert("Enter Tin Number...")
          // else if ($('#tanNumber').val() == null || $('#tanNumber').val() == "null" || $('#tanNumber').val() == [] || $('#tanNumber').val() == "") alert("Enter Tan Number...")
          else if ($('#emailId').val() == null || $('#emailId').val() == "null" || $('#emailId').val() == [] || $('#emailId').val() == "") alert("Enter Email ID...")
          else if ($('#contactNumber').val() == null || $('#contactNumber').val() == "null" || $('#contactNumber').val() == [] || $('#contactNumber').val() == "") alert("Enter Contact Number...")
          else {
            var url ='http://sikkimfred.local.api/api/RCORegistration'
            let insertobj = {
              RegistrationType : $('#RegistrationType').val(),
              adminName : $('#adminName').val(),
              departmentId : parseInt($('#department').val()),
              designation : $('#designation').val(),
              district : $('#district').val(),
              officeAddress1 : $('#officeAddress1').val(),
              officeAddress2 : $('#officeAddress2').val(),
              tinNumber : $('#tinNumber').val(),
              tanNumber : $('#tanNumber').val(),
              emailId : $('#emailId').val(),
              contactNumber : $('#contactNumber').val()
            }
            console.log("InsertObj",insertobj);
            fetch(url,{
              method : 'POST',
              body: JSON.stringify(insertobj),
              headers : new Headers({
               'Content-Type': 'application/json'
              })
              }).then(res=>res.text())
              .catch(error => console.error("Error",error))
              .then (result => {
              console.log("reult" ,result)
             if(result){
              alert("Successfully Inserted");
              done()
            } 
             else alert("An error occured..Please try again later");
              
              })
          }

        })


        function fillDropDown(id, data, label, selectedid = 0) {
          $(`#${id}`).empty()
          $(`#${id}`).append($('<option>').val("null").text(label))

          $.each(data, (i, item) => {
            if (item.id == selectedid) {
              $(`#${id}`).append($('<option selected>').val(item.departmentId).text(item.departmentName))
            } else {
              $(`#${id}`).append($('<option>').val(item.departmentId).text(item.departmentName))
            }
          })
        }



      });
    })(jQuery);
    function done(){
      window.location.href="/home"
     }
  }

}

