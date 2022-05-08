<%
dim sender,beneficiary,account,amount
sender=Request.Form("sender")
amount=Request.Form("beneficiaryname")
amount=Request.Form("account")
amount=Request.Form("amount")
Response.Write("Dear " & sender & ". ")
Response.Write("you send to " & beneficiaryname & ".")
Response.Write("Account " & account & ".")
Response.Write("money amount " & amount & ".")
%>
