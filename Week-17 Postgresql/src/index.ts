import { Client } from "pg";

const pgClient = new Client("postgresql://neondb_owner:npg_qERJel6wxv1y@ep-proud-firefly-a54o2b8q-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require");

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("select * from testTable");
    console.log(response.rows);
}

main();