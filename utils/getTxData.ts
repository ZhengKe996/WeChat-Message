import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
/**
 * 获取天行数据每日励志名言
 * @param key 天行数据Key
 * @returns
 */
export const getLZMY = async (key: string) => {
  const { data } = await axios.get(
    `http://api.tianapi.com/lzmy/index?key=${key}`
  );
  return data.newslist[0];
};

/**
 * 获取天行数据每日健康小提示
 * @param key 天行数据Key
 * @returns
 */
export const getTips = async (key: string) => {
  const { data } = await axios.get(
    `http://api.tianapi.com/healthtip/index?key=${key}`
  );
  return data.newslist[0];
};

export const getStar = async (key: string, star: string) => {
  const { data } = await axios.get(
    `http://api.tianapi.com/healthtip/index?key=${key}&astro=${star}`
  );
  return data.newslist[0];
};

export const getTianqi = async (key: string, city: string) => {
  const str = encodeURI(city);
  const { data } = await axios.get(
    `http://api.tianapi.com/tianqi/index?key=${key}&city=${str}`
  );
  return data.newslist[0];
};
