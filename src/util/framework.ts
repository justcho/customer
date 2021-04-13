import adapter, {
  WxMpWebSocket,
  WxRequest,
  wxMpStorage,
} from "cloudbase-adapter-wx_mp";
import {
  SDKAdapterInterface,
  StorageType,
  WebSocketContructor,
} from "@cloudbase/adapter-interface";
import cloudbase from "@cloudbase/js-sdk";
import * as wx from "@remax/wechat";

cloudbase.useAdapters({
  runtime: "aichuang-wa",
  isMatch: adapter.isMatch,
  genAdapter(): SDKAdapterInterface {
    return {
      root: global,
      reqClass: WxRequest,
      wsClass: WxMpWebSocket as WebSocketContructor,
      localStorage: wxMpStorage,
      primaryStorage: StorageType.local,
      getAppSign() {
        return "";
      },
    };
  },
});

const app = cloudbase.init({
  env: "testing-7gh6vh6w79df6ed8",
  appSign: "aichuang-cams",
  appSecret: {
    appAccessKeyId: "1",
    appAccessKey: "3b50d0635175547197d62357acc8a6df",
  },
});

export async function login() {
  const auth = app.auth({ persistence: "local" });
  let loginState = await auth.getLoginState();
  if (!loginState) {
    const account = wx.getAccountInfoSync();
    const loginRes = await wx.login();
    const ticket = await app.callFunction({
      name: "auth",
      data: {
        client: account.miniProgram.appId,
        code: loginRes.code,
      },
    });
    if (ticket.result.errCode === 0) {
      loginState = await auth
        .customAuthProvider()
        .signIn(ticket.result.data.ticket);
      const user = await auth.getCurrenUser();
      if (user) {
        await user.update({
          nickName: account.miniProgram.appId,
        });
      }
    }
  }
  return auth;
}

let _app: cloudbase.app.App;
export function tcb() {
  if (!_app) {
    const envId = "testing-7gh6vh6w79df6ed8";
    _app = cloudbase.init({
      env: envId,
    });
  }
  return _app;
}

let _database: cloudbase.database.App;
export function database() {
  if (!_database) {
    _database = tcb().database();
  }
  return _database;
}
