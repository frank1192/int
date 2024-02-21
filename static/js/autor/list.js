$(function () {
    $('#tableData').DataTable({
        responsive: true,
        autoWidth: false,
        destroy: true,
        deferRender: true,
        ajax: {
            url: window.location.pathname,
            type: 'POST',
            data: {
                'action': 'searchdata'
            },
            dataSrc: ""
        },
        columns: [
            {"data": "position"},
            {"data": "codigo_autor"},
            {"data": "primer_nombre"},
            {"data": "segundo_nombre"},
            {"data": "primer_apellido"},
            {"data": "segundo_apellido"},
            {"data": "id"},
        ],
        columnDefs: [
            {
                targets: [-1],
                class: 'text-center',
                orderable: false,
                render: function (data, type, row) {
                    var buttons = `<a href="/app/autores/update/${row.id}/" class="btn btn-secondary btn-xs"><i class="fas fa-edit"></i></a>
                                   <a href="/app/autores/delete/${row.id}/" class="btn btn-danger btn-xs"><i class="fas fa-trash"></i></a>`
                    return buttons;
                }
            },
        ],
        initComplete: function (settings, json) {

        }
    });
});
