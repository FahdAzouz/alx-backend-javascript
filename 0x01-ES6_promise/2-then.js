/* eslint-disable */
export default function getResponseFromAPI(success) {
  const arr = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: "Success" });
    }
    else{
      reject(new Error("The fake API is not working currently"))
    }
  });
  console.log("Got a response from the API");
  return (arr);
}
