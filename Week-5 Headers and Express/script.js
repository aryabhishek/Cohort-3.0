const ele = document.getElementById("nigg");
import { post } from "axios";
async function getRequest() {
  const response = await post("http://localhost:3000/sum", {
    a: 2,
    b: 3
  });
  const data = await response.json();
  console.log(data);
  ele.innerHTML = "Result: " + data.result;
}

getRequest();