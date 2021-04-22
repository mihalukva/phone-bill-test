import IAggregatePhoneBill from "../interfaces/IAggregatePhoneBill";

export default function uploadBill(file: any): Promise<IAggregatePhoneBill> {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    formData.append("phoneBill", file);

    fetch("/upload", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((result: IAggregatePhoneBill) => {
        console.log("Success:", result);
        return resolve(result);
      })
      .catch((error) => {
        console.error("Error:", error);
        return reject(error);
      });
  });
}
