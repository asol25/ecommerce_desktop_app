<?php


namespace app\services\apis;


class RestApi
{
// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

    public function fetch($method, $url, $data = false): bool|array
    {
        $curl = curl_init($url);

        switch ($method)
        {
            case "GET":
                curl_setopt($curl , CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl , CURLOPT_NOSIGNAL, 1);
                curl_setopt($curl , CURLOPT_TIMEOUT_MS, 200);
                break;
            case "POST":
                curl_setopt($curl, CURLOPT_POST, 1);

                if ($data)
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                break;
            case "PUT":
                curl_setopt($curl, CURLOPT_PUT, 1);
                break;
            default:
                if ($data)
                    $url = sprintf("%s?%s", $url, http_build_query($data));
        }

        $data = json_decode(curl_exec($curl), true);
        $curl_errno = curl_errno($curl);
        $curl_error = curl_error($curl);
        curl_close($curl);
        if ($curl_errno > 0) {
            echo "cURL Error ($curl_errno): $curl_error\n";
        }
        return $data;
    }
}