$(document).ready(function () {
  
    showEmployeedata();
   
});

//////////modal popup 

$("#btnAddEmployee").click(function () {
    $("#EmployeeModal").modal("show");
});

////////// get data from db and post in to table


function showEmployeedata() {
    $.ajax({
        url: 'Ajax/UserList',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, statu, xhr) {
            var object = '';
            $.each(result, function (index, item) {

                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.place + '</td>';
                object += '<td>' + item.email + '</td>';
                object += '<td>' + item.phoneNumber + '</td>';
                object += '<td><a href="#"  class="btn btn-primary" onclick="Edit('+item.id+')" >Edit</a> ||<a href="#"  class="btn btn-primary" onclick="Delete('+item.id+')" >Delete</a> </td> ';
                object += '</tr>';
            })
            $("#table_data").html(object);
        },
        error: function () {
            alert("data cannot send");
        }
    })
}

////////Add data to database using form data using post method

function AddEmployeeData() { 
    
    var objData = {
        Name: $("#Name").val(),
        Place: $("#Place").val(),
        Email: $("#Email").val(),
        Phonenumber: $("#PhoneNumber").val(),
    }
    $.ajax({
        url: 'Ajax/AddEmployee',
        type: 'post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        success: function () {
            alert('data saved');
            HideMOdalPopUp();
            ClearTextBox();
        },
        error: function () {
            alert('data canot saved')
        }
    })

    function HideMOdalPopUp() {
        $("#EmployeeModal").modal("hide");
    }

    function ClearTextBox() {
        Name: $("#Name").val();
        Place: $("#Place").val();
        Email: $("#Email").val();
        Phonenumber: $("#PhoneNumber").val();
    }
}

// ///////delete record from database


function Delete(id) {

    if (confirm("are you sure ,you want to delete this record?")) {
        $.ajax({
            url: '/Ajax/Delete?id=' + id,
            success: function () {
                alert("record deleted");
                showEmployeedata();
            },
            error: function () {
                alert("data can't be deleted");
            }

        })
    }


}

// ///// Edit And Update Record From DataBase

function Edit(id) {
    $.ajax({
        url: '/Ajax/Edit?id=' + id,
        type: 'Get',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        success: function (response) {
            $('#EmployeeModal').modal('show');
            $('#EmployeeId').val(response.id);
            $('#Name').val(response.name);
            $('#Place').val(response.place);
            $('#Email').val(response.email);
            $('#PhoneNumber').val(response.phoneNumber);
            //$('#AddEmployee').css('display', 'none');
            //$('#btnUpdate').css('display', 'block');
            $('#AddEmployee').hide();
            $('#btnUpdate').show();
        },
        error: function () {
            alert('data  not found')
        }
    })
}

function UpdateEmployee() {
    var objData = {
        EmployeeId: $("#EmployeeId").val(),
        Name: $("#Name").val(),
        Place: $("#Place").val(),
        Email: $("#Email").val(),
        Phonenumber: $("#PhoneNumber").val(),
    }
    $.ajax({
        url: 'Ajax/Update',
        type: 'post',
        data: objData,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        dataType: 'json',
        success: function () {
            alert('data saved');
            HideMOdalPopUp();
            ClearTextBox();
        },
        error: function () {
            alert('data canot saved')
        }
    })
    
}