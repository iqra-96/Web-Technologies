<?php

require_once("../controller/BookController.php");

$action = $_POST['action'];

if($action == "fetch"){

    $books = showBooks();

    foreach($books as $book){

        echo "
        <tr>
            <td>{$book['id']}</td>
            <td>{$book['title']}</td>
            <td>{$book['author']}</td>
            <td>{$book['category']}</td>
            <td>{$book['status']}</td>

            <td>
                <button onclick='editBook({$book['id']})'>Edit</button>

                <button onclick='deleteBook({$book['id']})'>
                    Delete
                </button>
            </td>
        </tr>
        ";
    }
}

if($action == "add"){

    createBook(
        $_POST['title'],
        $_POST['author'],
        $_POST['category'],
        $_POST['status']
    );
}

if($action == "delete"){

    removeBook($_POST['id']);
}

if($action == "single"){

    $book = editBook($_POST['id']);

    echo json_encode($book);
}

if($action == "update"){

    updateBookData(
        $_POST['id'],
        $_POST['title'],
        $_POST['author'],
        $_POST['category'],
        $_POST['status']
    );
}
?>