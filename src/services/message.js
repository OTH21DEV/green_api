export default async function receiveNotification(credentials) {
  try {
    let response = await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/receiveNotification/${credentials.apiTokenInstance}?receiveTimeout=${5}`);
    if (!response.ok) {
      console.log(response.status);
    }

    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteNotification(credentials, receiptId) {
  try {
    let response = await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/deleteNotification/${credentials.apiTokenInstance}/${receiptId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log(response.status);
    }

    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

export async function sendMessage(credentials, data) {
  try {
    let response = await fetch(`https://api.green-api.com/waInstance${credentials.idInstance}/sendMessage/${credentials.apiTokenInstance}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      console.log(response.status);
    }

    let result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}
