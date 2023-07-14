import { SmsClient } from '@azure/communication-sms';
const smsCnctnStr = process.env['SMScs'] as string;
const smsClient = new SmsClient(smsCnctnStr);
const fromNumber = "+18332940667";
const SMSReicipients = (process.env.SMSreceipients as string).split('|');
console.log(SMSReicipients);
console.log(smsCnctnStr);

async function sendSMS(msg:string){
  const sendResults = await smsClient.send({
    from: fromNumber,
    to: SMSReicipients,
    message: msg
  });

  // Individual messages can encounter errors during sending.
  // Use the "successful" property to verify the status.
  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }  
}
sendSMS('testMsg from John!')