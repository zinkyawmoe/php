<?php

$value = $_POST['value'];
$i = 1;

while( $i < $value+1) {
    
    echo $i . '. ';
    echo str_repeat('* ',$i);
    echo '<hr>';

    $i++;

    if( $i > 20 ) {
        die();
    }

}

// for( $i ; $i < $value+1 ; $i++ ) {

//     echo $i . '. ';
//     echo str_repeat('* ',$i);
//     echo '<hr>';

//         if( $i > 20 ) {
//             die();
//         }

// }