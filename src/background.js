// インストール時に https://beta.atcoder.jp/_favorite_migrator を開く
browser.runtime.onInstalled.addListener(() => {
  browser.tabs.create({ url: "https://beta.atcoder.jp/_favorite_migrator" })
})

// https://beta.atcoder.jp/_favorite_migrator にアクセスした際、
// HTTPレスポンスからlocationヘッダを削除してリダイレクトを防止する
browser.webRequest.onHeadersReceived.addListener(
  ({ responseHeaders }) => ({
    responseHeaders: responseHeaders.filter(header => header.name.toLowerCase() !== 'location')
  }),
  {
    urls: ['https://beta.atcoder.jp/_favorite_migrator'], types: ['main_frame']
  },
  ['blocking', 'responseHeaders']
)
