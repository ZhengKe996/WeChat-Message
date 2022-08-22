import axios from "axios";
export default async (appid: string, secret: string) => {
  const params = {
    grant_type: "client_credential",
    appid: appid,
    secret: secret,
  };
  const res = await axios.get("https://api.weixin.qq.com/cgi-bin/token", {
    params,
  });

  return res.data.access_token;
};
