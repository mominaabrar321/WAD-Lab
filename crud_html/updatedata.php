<?php
// 1. Get the data from the form
$stu_id = $_POST['sid'];
$stu_name = $_POST['sname'];
$stu_address = $_POST['saddress'];
$stu_class = $_POST['sclass'];
$stu_phone = $_POST['sphone'];

// 2. Connect to Database
$conn = mysqli_connect("localhost", "root", "", "crud") or die("Connection Failed");

// 3. Write the Update Query
$sql = "UPDATE student SET sname = '{$stu_name}', saddress = '{$stu_address}', sclass = '{$stu_class}', 
sphone = '{$stu_phone}' WHERE sid = {$stu_id}";

// 4. Run the Query
$result = mysqli_query($conn, $sql) or die("Query Unsuccessful.");

// 5. Redirect back to Home
header("Location: index.php");

// 6. Close Connection
mysqli_close($conn);
?>