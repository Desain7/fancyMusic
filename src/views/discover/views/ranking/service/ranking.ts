import myRequest from '@/service'

export function getTopList() {
  return myRequest.get({
    url: '/toplist/detail'
  })
}
