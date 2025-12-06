<?php

// 1. Connect to database
$conn = mysqli_connect("localhost", "root", "", "crud") or die("Connection Failed");

// 2. Get values from form
$sname   = $_POST['sname'];
$saddr   = $_POST['saddress'];
$sclass  = $_POST['class'];
$sphone  = $_POST['sphone'];

// 3. Insert Query
$sql = "INSERT INTO student(sname, saddress, sclass, sphone)
        VALUES('$sname', '$saddr', '$sclass', '$sphone')";

// 4. Run Query
if(mysqli_query($conn, $sql)) {
    echo "Record Added Successfully!";
} else {
    echo "Error: " . mysqli_error($conn);
}

// 5. Close connection
mysqli_close($conn);
?>