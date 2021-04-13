import { chooseAddress, request } from "remax/wechat";

export const theme = {
  title: "每天礼品",
  brandColor: "#ff7777",
};

export function assets(path: string) {
  return `cloud://release-9gph1if18e4df422.7265-release-9gph1if18e4df422-1304884160/assets${path}`;
}

export function sleep(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export function ald(): any {
  return wx;
}

export function fetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<WechatMiniprogram.RequestSuccessCallbackResult> {
  const initOptions = {
    method: "GET",
    body: undefined,
    ...init,
  };
  const headers: any = {
    Accept: "application/json",
  };
  return new Promise((resolve, reject) => {
    request({
      url: input as string,
      method: initOptions.method as any,
      data: initOptions.body ?? undefined,
      header: headers,
      success: async (res: any) => {
        resolve(res);
      },
      fail: (res: any) => {
        reject(res);
      },
    });
  });
}

export interface Address {
  username: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  zipCode: string;
}
export async function fetchAddress(): Promise<Address> {
  const res = await chooseAddress();
  return {
    username: res.userName,
    phone: res.telNumber,
    province: res.provinceName,
    city: res.cityName,
    district: res.countyName,
    address: res.detailInfo,
    zipCode: res.postalCode,
  };
}
