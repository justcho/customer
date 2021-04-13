import { cloud, getStorageSync, request } from "remax/wechat";

let _database: DB.Database;
export function db() {
  if (!_database) {
    _database = cloud.database();
  }
  return _database;
}

export async function fileUrls(
  fileIds: string[]
): Promise<{ [fileId: string]: string }> {
  const res = await cloud.getTempFileURL({
    fileList: fileIds,
  });
  const files: { [fileId: string]: string } = {};
  res.fileList.forEach((elm: any) => {
    files[elm.fileID] = elm.tempFileURL;
  });
  return files;
}
