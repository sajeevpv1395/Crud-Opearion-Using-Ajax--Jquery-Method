$(document).ready(function () {
   
    alert("ok")
    $("#dataTableData").DataTable({

    })
})

//function showEmployeedata() {
//    $.ajax({
//        url: 'Ajax/UserList',
//        type: 'Get',
//        dataType: 'json',
//        contentType: 'application/json;charset=utf-8;',
       
//        success: onSuccess

//    })
//}

//function onSuccess(respose) { 
//    $('#dataTableData').DataTable({ debugger
//        bProcessing:true,
//        bLengthChange: true,
//        lengthMenu: [[5, 10, 15, -1], [5, 10, 20, "All"]],
//        bFilter: true,
//        bSort: true,
//        bPaginate: true,
//        data: response,
//        column:
//            [
//                {
//                data: 'Id',
//                render: function (data, type, row, meta) {
//                    return row.id
//                }
//                },
//                {
//                    data: 'Name',
//                    render: function (data, type, row, meta) {
//                        return row.email
//                    }
//                },
//                {
//                    data: 'Place',
//                    render: function (data, type, row, meta) {
//                        return row.place
//                    }
//                },
//                {
//                    data: 'Email',
//                    render: function (data, type, row, meta) {
//                        return row.email
//                    }
//                },
//                {
//                    data: 'PhoneNumber',
//                    render: function (data, type, row, meta) {
//                        return row.phoneNumber
//                    }
//                },

//            ]

//    })
//}