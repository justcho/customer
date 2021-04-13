import React, { useEffect } from "react";
import { useAppEvent } from "remax/macro";
import "annar/dist/annar.css";
import "./app.less";
import { cloud } from "@remax/wechat";

const App: React.FC = (props) => {
  useAppEvent("onShow", () => {});
  useEffect(() => {
    /*
    (async () => {
      const app: WxCloud = new cloud.Cloud({
        // 资源方 AppID
        resourceAppid: "wxbe8b3409e97394af",
        // 资源方环境 ID
        resourceEnv: "release-1gd2le986b283b6a",
      });
      await app.init();
      const res = await app
        .database()
        .collection("users")
        .add({
          data: {
            platform: "aichuang-front",
          },
        });
      console.log(res);
    })();
    */
  }, []);

  return props.children as React.ReactElement;
};

export default App;
