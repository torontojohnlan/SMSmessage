# SMSmessage
Using Azure Communication Service to send SMS message


Assuming you already have App Service Plan and App Service in Azure
Request SMS service
Search "Communication Service" -> "create" to create a communication service instance
Once created, under "Phone numbers", request a phone number. 
Only toll free number can send SMS messages
Cost (as of July 2023): $2/month + per message cost (neglectable)
You can also request short code ID or aliphatic ID for extra cost
Submit request for SMS sending
In same page of the communication service instance, under "Regulatory Documents", submit a request. 
"opt-in type" refers to how "customers" (as the regulatory is designed around marketing SMS messages) opt-in/opt-out. It could be SMS, web portal, paper form, etc. You have to provide evidence(screenshot) that there is such opt-in option available to customers
It could take weeks to get approval
Your outbound messages are blocked until your request is approved in Canada. In the States, you can send limited number of messages before approval
Sample code to send SMS message
https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/sms/send?tabs=windows&pivots=programming-language-javascript
