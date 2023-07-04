// 全局图标，定义驼峰命名转中划线命名的函数
export const camelCaseToLine = (v: string): string => {
  return v.replace(/([A-Z])/g, '-$1').toLowerCase();
};
