<?php include 'header.php'; ?>
<?php
$conn = mysqli_connect("localhost", "root", "", "crud") or die("Connection Failed");

if(isset($_POST['deletebtn'])) {

    $id = $_POST['sid'];

    // Prepared statement for security
    $stmt = $conn->prepare("DELETE FROM student WHERE sid = ?");
    $stmt->bind_param("i", $id);

    if($stmt->execute()) {
        echo "<h3 >Record deleted successfully!</h3>";
    } else {
        echo "<h3 >Error deleting record!</h3>";
    }
}
?>