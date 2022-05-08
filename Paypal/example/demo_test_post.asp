<%
dim sender,beneficiary,account,bankname,amount,content
sender=Request.Form("sender")
beneficiary=Request.Form("beneficiaryname")
account=Request.Form("account")
bankname=Request.Form("bankname")
amount=Request.Form("amount")
content=Request.Form("content")
Response.Write("Dear " & sender & ". ")
Response.Write("you send to " & beneficiaryname & ".")
Response.Write("Account " & account & ".")
Response.Write("Bank name " & bankname & ".")
Response.Write("Money amount " & amount & ".")
Response.Write("Send content " & content & ".")
%>
