<!DOCTYPE html>
<html>
<head>

    <title>Library Management System</title>

    <link rel="stylesheet" href="../assets/style.css">

</head>
<body>

<div class="container">

    <h1>Library Management System</h1>

    <input type="hidden" id="book_id">

    <input type="text" id="title" placeholder="Book Title">

    <input type="text" id="author" placeholder="Author Name">

    <input type="text" id="category" placeholder="Category">

    <select id="status">
        <option>Available</option>
        <option>Not Available</option>
    </select>

    <button onclick="addBook()">Save Book</button>

    <button onclick="updateBook()" id="updateBtn">
        Update Book
    </button>

    <br><br>

    <table border="1" width="100%">

        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="bookData">

        </tbody>

    </table>

</div>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<script src="../assets/script.js"></script>

</body>
</html>