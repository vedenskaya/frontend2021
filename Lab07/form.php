<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="frontend, html, php, lab 7, лабараторна робота 7">
    <meta name="description" content="JavaScript. Форми">
    <title>Веденська А.В., ІК-81</title>
  </head>
  <body>
    <?php

      if (isset($_POST['product'])) {
        $product = $_POST['product'];
        if ($product == '') {
          unset($product);
        }
      }

      if (isset($_POST['material'])) {
        $material = $_POST['material'];
        if ($material == '') {
          unset($material);
        }
      }

      if (isset($_POST['quantity'])) {
        $quantity = $_POST['quantity'];
        if ($quantity == '') {
          unset($quantity);
        }
      }

      if (empty($product) or empty($material) or empty($quantity)) {
        exit("Ви залишили пусте поле!");
      }

      $product = stripslashes($product);
      $product = htmlspecialchars($product);
      $product = trim($product);

      $material = stripslashes($material);
      $material = htmlspecialchars($material);
      $material = trim($material); 
      
      $quantity = stripslashes($quantity);
      $quantity = htmlspecialchars($quantity);
      $quantity = trim($quantity);      

      echo "<h2>Ваше замовлення прийнято</h2>";
      echo "Замовлено виріб - " . $product . "<br>";
      echo "Матеріал  - " . $material . "<br>";
      echo "Кількість - " . $quantity . "<br>";

    ?>
  </body>
</html>
