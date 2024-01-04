<?php 
    if(isset($_REQUEST["btn-send"])){
       $UserName = $_REQUEST["name"];
       $Email = $_REQUEST["email"];
       $Subject = $_REQUEST["subject"];
       $Msg = $_REQUEST["message"];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           header("location: index.php?error");
       }
       else{
          // This is a contacttg.txt file including start
         $contactStored = "\n <-- There is a new person details --> \n Name : $UserName \n E-mail : $Email \n Subject : $Subject \n Message : $Msg";
         echo file_put_contents("contacttg.txt",$contactStored,FILE_APPEND);
          // This is a contacttg.txt file including end
          
           $to = "takbirgazibd@gmail.com";

          if(mail($to,$Subject,$Msg,$Email)){
               header("location: index.php?success");
           }
           else{
             header("location: index.php?problem");
           }
       }
    }
    else{
        header("location: index.php");
    }
?>