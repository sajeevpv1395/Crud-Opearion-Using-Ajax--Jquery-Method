$(document).ready(function () {

    $("#btnAddEmployee").click(function () {
        $("#EmployeeModal").modal("show");
    });

    $("#AddEmployee").click(function AddEmployee() {
        debugger
        var objData = {
            Name: $("#Name").val(),
            Place: $("#Place").val(),
            Email: $("#Email").val(),
            Phonenumber: $("#Phonenumber").val(),
        }
        $.ajax({
            url: '/User/AddEmployee',
            type: 'post',
            data: objData,
            contentType: 'application/xxx-www-form-urlencoded;charset=utf-8',
            dataType: 'json',
            success: function () {
                alert('data saved')
            },
            error: function () {
                alert('data canot saved')
            }
        })
    });
        

  
   

  
   
  
});




