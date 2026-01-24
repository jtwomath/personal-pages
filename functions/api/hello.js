export async function onRequestGet(context) {
  const data = {
    message: "Hello from server (Pages Functions)!",
    time: new Date().toISOString(),
  };

  return Response.json(data);
}
