import { useState } from "react";
import { Post } from "../../services/network";

function ApiTestRoute() {
  const [info, setInfo] = useState("Click 'test api' to test a response");
  const testApi = async () => {
    console.log("Testing api");
    setInfo("testing...");
    try {
      const resp = await Post("authentication", "Login");
      console.log("resp", resp);
      setInfo(resp.message);
    } catch (error) {
      setInfo("Failed: " + error);
    }
  };
  return (
    <div className="ApiTest">
      <button onClick={() => testApi()}>test api</button>
      <div>{info}</div>
    </div>
  );
}

export default ApiTestRoute;
