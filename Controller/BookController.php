<?php

require_once("../model/BookModel.php");

function showBooks(){
    return getBooks();
}

function createBook($title, $author, $category, $status){
    return addBook($title, $author, $category, $status);
}

function removeBook($id){
    return deleteBook($id);
}

function editBook($id){
    return getSingleBook($id);
}

function updateBookData($id, $title, $author, $category, $status){
    return updateBook($id, $title, $author, $category, $status);
}
?>