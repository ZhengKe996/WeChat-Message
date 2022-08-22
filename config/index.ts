import { randomRGB } from "../utils/getColor";

const config = {
  wx: {
    appID: "", // 微信公众平台 appID
    appsecret: "", //微信公众平台 appsecret
    wxNumber: "", // 微信公众平台 需要发送对象的微信号
    templateId: "", // 微信公众平台 消息模板
  },
  tx: {
    key: "", // 天行数据Key
  },
  requestdata: {
    city: "杭州", // 天气预报城市
    star: "cancer", //十二星座英文名：aries 白羊座, taurus 金牛座, gemini 双子座, cancer 巨蟹座, leo 狮子座, virgo 处女座, libra 天秤座, scorpio 天蝎座, sagittarius 射手座, capricorn 摩羯座, aquarius 水瓶座, pisces 双鱼座。
  },
  wxTemp: {
    data: {
      lizhi: { value: "", color: randomRGB() }, // 励志句子
      star: { value: "", color: randomRGB() }, // 星座运势
      date: { value: "", color: randomRGB() }, // 日期
      area: { value: "", color: randomRGB() }, // 地区
      pop: { value: "", color: randomRGB() }, // 降雨概率
      week: { value: "", color: randomRGB() }, // 天气
      lowest: { value: "", color: randomRGB() }, // 最低气温
      highest: { value: "", color: randomRGB() }, // 最高气温
      tips: { value: "", color: randomRGB() }, // 小贴士
      weather: { value: "", color: randomRGB() }, // 天气
    },
  },
};

export default config;
