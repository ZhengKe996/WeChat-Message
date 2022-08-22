import axios from "axios";
import config from "./config";
import { randomRGB } from "./utils/getColor";
import { getLZMY, getStar, getTianqi } from "./utils/getTxData";
import getToken from "./utils/getToken";

const sendWxMessage = async () => {
  const txLZMY = await getLZMY(config.tx.key);
  config.wxTemp.data.lizhi.value = txLZMY.saying;

  const token = await getToken(config.wx.appID, config.wx.appsecret);

  const txStat = await getStar(config.tx.key, config.requestdata.star);
  config.wxTemp.data.star.value = txStat.content;

  const txTianqi = await getTianqi(config.tx.key, config.requestdata.city);
  config.wxTemp.data.date.value = txTianqi.date;
  config.wxTemp.data.area.value = txTianqi.area;
  config.wxTemp.data.pop.value = txTianqi.pop;
  config.wxTemp.data.week.value = txTianqi.week;
  config.wxTemp.data.weather.value = txTianqi.weather;
  config.wxTemp.data.lowest.value = txTianqi.lowest;
  config.wxTemp.data.highest.value = txTianqi.highest;
  config.wxTemp.data.tips.value = txTianqi.tips;

  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${token}`;

  // 发送给微信
  const wxTemp = {
    touser: config.wx.wxNumber,
    template_id: config.wx.templateId,
    topcolor: randomRGB(),
    data: {
      ...config.wxTemp.data,
    },
  };
  const { data } = await axios.post(url, { ...wxTemp });

  console.log(data);
};

sendWxMessage();
