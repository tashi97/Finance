import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;


@Component({
  selector: 'app-ddo-registeration',
  templateUrl: './ddo-registeration.component.html',
  styleUrls: ['./ddo-registeration.component.css']
})
export class DdoRegisterationComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
        let department = []
        let ddo_code = []
       $.getJSON('http://sikkimfred.local.api/api/department',data=>{
         department = data
        fillDropDown('categoryid', data, 'Choose Department', 0) 
        
       })

       $.getJSON('http://sikkimfred.local.api/api/department',data=>{
         ddo_code = data
        fillDropDown('ddo_code', [], 'Choose DDO Code', 0) 
        console.log("data work",data)
       })


       $('#categoryid').change(() => {
        const filteredData = ddo_code.filter(item => item.departmentid == $('#categoryid').val())
        fillDropDown('ddo_code', filteredData, 'Choose DDO Code', 0)
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
  }

}
