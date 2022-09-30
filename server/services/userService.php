<?PHP

require(__DIR__ . "/db.php");

abstract class userService
{

    public function __construct()
    {
    }

    abstract function create($user, $password);
    public static function delete($id)
    {

        // new inst from db
        $conn = new connectionDB();

        // my new conexion to db
        $conn->createConnection();

        //delete items in massive mode from products the list from functions massdelete

        $sql_del = "DELETE FROM user WHERE id in ($id)";

        $conn->executeQuery($sql_del);

        // Closing the connection with BD
        $conn->closeConnection();
    }
    public static function getUser($user, $password)
    {

        $conn = new connectionDB();
        $conn->createConnection();

        $queryOperator = "SELECT id, user FROM users WHERE user='$user' AND password='$password' ";
        $resultOperator = $conn->executeQuery($queryOperator);
        $user = $resultOperator->fetch_assoc();

        //Closing the connection with BD
        $conn->closeConnection();

        return $user;
    }
    public static function getAllUsers()
    {

        $conn = new connectionDB();

        $conn->createConnection();

        $query = "SELECT * FROM users";
        $result = $conn->executeQuery($query);
        $users = [];

        while ($row = $result->fetch_assoc()) {
            array_push($users, $row); // get all server available in DB
        }

        // Closing the connection with BD
        $conn->closeConnection();

        return $users;
    }
}

class user extends userService
{


    public function create($user, $password)
    {


        // my new instance of DB
        $conn = new connectionDB();

        // Create a new connection with DB
        $conn->createConnection();

        // registering in db according to the type of the item

        $sql_insert = "INSERT INTO user (user, password) VALUES ('$user',' $password')";
        $conn->executeQuery($sql_insert);

        // Closing the connection with BD
        $conn->closeConnection();
    }
    public function update($user, $password, $id)
    {
        // Method to create one dvd in the DB

        // my new instance of DB
        $conn = new connectionDB();

        // Create a new connection with DB
        $conn->createConnection();

        // registering in db according to the type of the item

        $sql_insert = "UPDATE users SET user='$user', password=$password WHERE id=$id";
        $conn->executeQuery($sql_insert);

        // Closing the connection with BD
        $conn->closeConnection();
    }
}
