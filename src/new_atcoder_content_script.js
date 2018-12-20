// https://atcoder.jp/_favorite_migrator にアクセスした際に実行されるスクリプト

(async () => {
  // 拡張機能の storage から beta.atcoder.jp のお気に入りを取得
  const { betaAtcoderFavJSON } = await browser.storage.local.get('betaAtcoderFavJSON')
  const betaAtcoderFav = JSON.parse(betaAtcoderFavJSON)

  // localStorage から atcoder.jp のお気に入りを取得
  const newAtcoderFavJSON = localStorage.getItem('fav') || '[]'
  const newAtcoderFav = JSON.parse(newAtcoderFavJSON)

  // beta.atcoder.jp のお気に入りと atcoder.jp のお気に入りを結合し、重複しているものを削除
  const combinedFav = Array.from(new Set([...betaAtcoderFav, ...newAtcoderFav]))

  // 結合したお気に入りを localStorage に保存
  const combinedFavJSON = JSON.stringify(combinedFav)
  localStorage.setItem('fav', combinedFavJSON)

  // 拡張機能の storage に保存した beta.atcoder.jp のお気に入りを削除
  await browser.storage.local.get('betaAtcoderFavJSON')

  // 処理が完了した旨を表示
  document.documentElement.innerText = `beta.atcoder.jp のお気に入りを atcoder.jp のお気に入りに追加しました。\n現在の atcoder.jp のお気に入りは以下のようになっています。\n${combinedFavJSON}\nこの拡張機能はもう不要ですので、アンインストールしてください。`
  document.documentElement.style.margin = '10px'
})()
  .catch(err => { console.error(err) })
