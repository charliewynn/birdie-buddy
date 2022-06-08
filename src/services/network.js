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

  try {
    const result = await fetch(postUrl, fetchOptions);
    if (result.ok) {
      const json = await result.json();
      return json;
    }
    console.warn("Got unsuccessful status code", result.status);
    return result;
  } catch (error) {
    console.log("Could not post request", error);
    if (error.message === "Failed to fetch" && isDev()) {
      alert("Did you start the dev server?");
    }
  }
};
