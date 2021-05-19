<?php

//Validates the AJAX call referer against the script host. All valid local AJAX calls should have the HTTP_HOST in the HTTP_REFERER.
if(empty($_SERVER['HTTP_REFERER']) || preg_match('/'.$_SERVER['HTTP_HOST'].'/', $_SERVER['HTTP_REFERER']) == false){
    http_response_code(403);
    echo 'HTTP/1.1 403 Forbidden';
    die();
}
