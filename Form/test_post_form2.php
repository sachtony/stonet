<?php
// define variables and set to empty values
$senderErr = $accountErr = $banknameErr = $beneficiarynameErr = $amountErr = "";
$sender = $account = $bankname = $beneficiaryname = $amount = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["sender"])) {
    $senderErr = "Sender is required";
  } else {
    $name = test_input($_POST["sender"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$sender)) {
      $senderErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["account"])) {
    $accountErr = "Account is required";
  } else {
    $name = test_input($_POST["account"]);
    // check if account only contains number
    if (!preg_match("[0-9]",$account)) {
      $accountErr = "Only number allowed";
    }
  }
  
  if (empty($_POST["bankname"])) {
    $banknameErr = "Bank name is required";
  } else {
    $bankname = test_input($_POST["bankname"]);
    // check if bank name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$bankname)) {
      $banknamerErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["beneficiaryname"])) {
    $beneficiarynameErr = "Beneficiary Name is required";
  } else {
    $beneficiaryname = test_input($_POST["beneficiaryname"]);
    // check if beneficiary name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$beneficiaryname)) {
      $beneficiarynameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["amount"])) {
    $amountErr = "Amount is required";
  } else {
    $amount = test_input($_POST["amount"]);
    // check if amount only contains number
    if (!preg_match("[0-9]",$amount)) {
      $amountErr = "Only money number allowed";
    }
  }

  if (empty($_POST["content"])) {
    $content = "";
  } else {
    $content = test_input($_POST["content"]);
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  Sender: <input type="text" name="sender" value="<?php echo $sender;?>">
  <span class="error">* <?php echo $senderErr;?></span>
  <br><br>
  Account: <input type="number" name="account" value="<?php echo $account;?>">
  <span class="error">* <?php echo $accountErr;?></span>
  <br><br>
  Bank Name: <input type="text" name="bankname" value="<?php echo $bankname;?>">
  <span class="error"><?php echo $banknameErr;?></span>
  <br><br>
   Beneficiary: <input type="text" name="beneficiaryname" value="<?php echo $beneficiaryname;?>">
  <span class="error"><?php echo $beneficiarynameErr;?></span>
  <br><br>
  Amount: <input type="number" name="amount" value="<?php echo $amount;?>">
  <span class="error">* <?php echo $amountErr;?></span>
  <br><br>
  Content: <textarea name="content" rows="5" cols="40"><?php echo $content;?></textarea>
  <br><br>
  <input type="submit" name="submit" value="Submit">  
</form>
