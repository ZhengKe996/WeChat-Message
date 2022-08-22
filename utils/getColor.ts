/**
 * @description 生成随机色值
 */
export const randomRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return ConvertRGBtoHex(r, g, b);
};
function ColorToHex(color: number) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}
function ConvertRGBtoHex(red: number, green: number, blue: number) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
