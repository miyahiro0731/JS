<?php
    for($i=1;$i<15;$i++){
        if($i % 14 === 0){
            echo 'for_out';
            break;
        }
        if($i % 2 === 0){
            continue;
        }
        echo $i ."\n";
    }
 ?>