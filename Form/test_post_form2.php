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
