<?PHP
/*
 * API controller to handle all comunication from user data
 */
require(__DIR__ . "/../../services/userService.php");
require(__DIR__ . "/../baseApi.php");


class userAPI extends api
{

    public $jsonList;

    public function get()
    {
        $user = userService::getAllUsers();

        header('Content-Type: application/json; charset=utf-8');
        header("Access-Control-Allow-Origin: *");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
        header("Access-Control-Allow-Headers: X-Requested-With");
        header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
        echo json_encode($user, JSON_PRETTY_PRINT);
    }
    public function post()
    {

        // Raw data from the request and it converts into a PHP object
        $dataRaw = file_get_contents('php://input');
        $data = json_decode($dataRaw);

        //Variables from request 
        $login = $data->login;
        $password = $data->password;

        $code = 200;
        api::responseCode($code);

        if ($data == NULL || $data === "") {

            $code = 500;
            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8');
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode("Error, check the information sent", JSON_PRETTY_PRINT);
        } else {

            $user = userService::getUser($login, $password);

            api::responseCode($code);

            header('Content-Type: application/json; charset=utf-8');
            header("Access-Control-Allow-Origin: *");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
            header("Access-Control-Allow-Headers: X-Requested-With");
            header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
            echo json_encode($user, JSON_PRETTY_PRINT);
        }
    }
    public function put()
    {
    }
    public function delete()
    {
    }
}

$GameAPI = new userAPI();
$GameAPI->handleRequest();
