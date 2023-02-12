export const BASE_URL = 'http://localhost:3000'
export const TIME_OUT = 10000

if (process.env.NODE_ENV == 'development') {
  console.log('开发环境')
} else if (process.env.NODE_ENV == 'production') {
  console.log('生产环境')
}
