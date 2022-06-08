const { isDev } = require("./helpers");

const postUrl = isDev()
  ? "http://localhost:3057/"
  : "https://1bttknktni.execute-api.us-east-2.amazonaws.com/default/birdie-buddy";

exports.Post = async (route, action, data) => {
  console.log("Doing Post", route, action);

  const postBody = JSON.stringify({ route: route, action: action, data: data });

  const fetchOptions = { method: "POST", body: postBody };
  if (isDev()) {
    fetchOptions.headers = { "Content-Type": "application/json" };
  }

  const result = await fetch(postUrl, fetchOptions);
  if (result.status === 200) {
    const json = await result.json();
    return json;
  }
  return result;
};
