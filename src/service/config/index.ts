export const BASE_URL =
  'https://service-4bsx9uek-1310054067.gz.apigw.tencentcs.com/release/'
export const TIME_OUT = 10000

if (process.env.NODE_ENV == 'development') {
  console.log('开发环境')
} else if (process.env.NODE_ENV == 'production') {
  console.log('生产环境')
}
