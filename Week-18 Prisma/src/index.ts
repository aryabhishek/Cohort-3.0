import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "aryabhishek",
      password: "hello1234",
      age: 20,
    },
  });
}

async function getUserAge(username: string) {
    const user = await client.user.findFirst({
        where: {
            username: username
        }
    })
    return user?.age;
}

getUserAge("aryabhishek").then((age) => {
    console.log(age);
})
