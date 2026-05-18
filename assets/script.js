$(document).ready(function(){

    fetchBooks();

    $("#updateBtn").hide();

});

function fetchBooks(){

    $.ajax({
        url: "../ajax/bookHandler.php",
        type: "POST",
        data: {action:"fetch"},

        success:function(data){
            $("#bookData").html(data);
        }
    });
}

function addBook(){

    let title = $("#title").val();
    let author = $("#author").val();
    let category = $("#category").val();
    let status = $("#status").val();

    $.ajax({

        url: "../ajax/bookHandler.php",
        type: "POST",

        data:{
            action:"add",
            title:title,
            author:author,
            category:category,
            status:status
        },

        success:function(){

            fetchBooks();

            $("#title").val('');
            $("#author").val('');
            $("#category").val('');
        }
    });
}

function deleteBook(id){

    $.ajax({

        url: "../ajax/bookHandler.php",
        type: "POST",

        data:{
            action:"delete",
            id:id
        },

        success:function(){
            fetchBooks();
        }
    });
}

function editBook(id){

    $.ajax({

        url: "../ajax/bookHandler.php",
        type: "POST",

        data:{
            action:"single",
            id:id
        },

        success:function(data){

            let book = JSON.parse(data);

            $("#book_id").val(book.id);
            $("#title").val(book.title);
            $("#author").val(book.author);
            $("#category").val(book.category);
            $("#status").val(book.status);

            $("#updateBtn").show();
        }
    });
}

function updateBook(){

    let id = $("#book_id").val();

    $.ajax({

        url: "../ajax/bookHandler.php",
        type: "POST",

        data:{
            action:"update",
            id:id,
            title:$("#title").val(),
            author:$("#author").val(),
            category:$("#category").val(),
            status:$("#status").val()
        },

        success:function(){

            fetchBooks();

            $("#title").val('');
            $("#author").val('');
            $("#category").val('');

            $("#updateBtn").hide();
        }
    });
}