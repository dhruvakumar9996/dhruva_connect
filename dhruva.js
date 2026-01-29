import {
  ConnectClient,
  StartOutboundVoiceContactCommand
} from "@aws-sdk/client-connect";

const client = new ConnectClient({ region: "us-east-1" });

async function startCall() {
  const command = new StartOutboundVoiceContactCommand({
    InstanceId: "INSTANCE_ID",
    ContactFlowId: "CONTACT_FLOW_ID",
    DestinationPhoneNumber: "+14155552671",
    SourcePhoneNumber: "+14155550123",
    Attributes: {
      customerName: "John",
      orderId: "12345",
    },
  });

  const response = await client.send(command);
  console.log("ContactId:", response.ContactId);
}

startCall();
