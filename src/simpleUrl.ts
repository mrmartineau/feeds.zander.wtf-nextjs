export const simpleUrl = (url: string): string => {
  let urlString = url
  if ('URL' in window) {
    return new URL(url).hostname.replace('www.', '')
  }
  return urlString
}
