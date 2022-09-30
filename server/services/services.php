<?PHP

require(__DIR__ . "/db.php");


class ServerServices
{

    // Attributes

    public $jsonList;

    public function __construct()
    {
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
    public static function getAllCategories()
    {

        $conn = new connectionDB();

        $conn->createConnection();

        $query = "SELECT * FROM categories";
        $result = $conn->executeQuery($query);
        $categories = [];


        while ($row = $result->fetch_assoc()) {
            array_push($categories, $row); //get all hosting available in DB
        }

        // Closing the connection with BD
        $conn->closeConnection();

        return $categories;
    }
}
