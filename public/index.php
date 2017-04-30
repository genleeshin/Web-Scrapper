<?php 

$cat = isset($_GET['cat']) ? $_GET['cat'] : 'shirt';

$page = isset($_GET['page'])?(int)$_GET['page']:1;

$next = $page + 1;

include('index.html');