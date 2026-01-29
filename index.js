import {
  ConnectClient,
  ListUsersCommand
} from "@aws-sdk/client-connect";

const client = new ConnectClient({ region: "us-east-1" });

const INSTANCE_ID = "your-instance-id";

async function listUsers() {
  const res = await client.send(
    new ListUsersCommand({
      InstanceId: INSTANCE_ID,
      MaxResults: 10,
    })
  );
  console.log(res.UserSummaryList);
}

listUsers();
