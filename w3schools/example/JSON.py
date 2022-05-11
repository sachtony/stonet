import json

# some JSON Data:
i = '{ "sender":"", "amount":30, "beneficiary":""}'

# parse z:
z = json.loads(i)

# the result is a Python dictionary:
print(z["amount"])
