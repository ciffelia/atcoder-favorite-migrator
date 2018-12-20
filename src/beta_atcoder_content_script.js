// https://beta.atcoder.jp/_favorite_migrator にアクセスした際に実行されるスクリプト

(async () => {
  // localStorage から beta.atcoder.jp のお気に入りを取得
  const betaAtcoderFavJSON = localStorage.getItem('fav') || '[]'
  
  // 取得したお気に入りを拡張機能の storage に保存
  await browser.storage.local.set({ betaAtcoderFavJSON })

  // 新AtCoderに移動
  location.href = 'https://atcoder.jp/_favorite_migrator'
})()
  .catch(err => { console.error(err) })
