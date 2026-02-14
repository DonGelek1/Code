<?php
  echo ("Введите имя: ");
  $name = fgetc(STDN);
  $name = trim($name);
  echo("Привет, $name \n")
?>

<?php
  $a = fgetc(STDN);
  $a = trim($a);
  $b = fgetc(STDN);
  $b = trim($b);
  echo(" $a - $b \n")
?>











<?php
   $n = (int)trim(fgets(STDIN));
   $tons = intdiv($n, 1000);
   echo $tons;
?>





<?php
    $n = (int)trim(fgets(STDIN));
    $a = $n + 1;
    $b = $n - 1;
    echo "The next number for the number $n is $a!\n";
    echo "The previous number for the number $n is $b!\n";
?>