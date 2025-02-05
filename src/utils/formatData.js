export default function formatMessage(response) {
  const body = response.body || {};

  let chatId = "unknown";

  // Determine chatId based on available fields and format
  if (body.senderData && typeof body.senderData.chatId === "string") {
    chatId = body.senderData.chatId.includes("@") ? body.senderData.chatId.split("@")[0] : body.senderData.chatId;
  } else if (typeof body.chatId === "string") {
    chatId = body.chatId.includes("@") ? body.chatId.split("@")[0] : body.chatId;
  }

  // Build formatted message object
  const formattedMessages = {
    id: body.instanceData.wid,
    receiptId: response.receiptId,
    timestamp: body.timestamp || "unknown",
    text: (body.messageData && body.messageData.textMessageData && body.messageData.textMessageData.textMessage) || "No Text Available",
    from: chatId,
    status: body.typeWebhook || body.status || "unknown",
  };

  return formattedMessages;
}
