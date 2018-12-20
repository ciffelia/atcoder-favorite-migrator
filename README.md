# atcoder-favorite-migrator

beta.atcoder.jp のお気に入りを atcoder.jp に追加する拡張機能 (Chrome/Firefox)

## 免責事項

この拡張機能はある程度のテストを行った上で配布していますが、不具合が残っている可能性があります。万一この拡張機能を使用したことによって何らかの問題が発生したとしても、製作者は一切の責任を負いません。不安な方は人柱にならずに様子を見ることをおすすめします。

## 使い方 (Firefox)

1. [こちら](https://github.com/ciffelia/atcoder-favorite-migrator/archive/master.zip)から拡張機能のZIPアーカイブをダウンロードし、適当な場所に展開します。
2. `about:debugging#addons`にアクセスします。
3. `一時的なアドオンを読み込む…`をクリックし、先程展開した拡張機能のフォルダの中にある`manifest.json`を開きます。
4. 自動でお気に入りの移行が始まります。
5. 数秒で移行完了を知らせる文章が表示されます。
6. `about:addons`にアクセスします。
7. この拡張機能はもう不要ですので、削除します。

## 使い方 (Chrome)

1. [こちら](https://github.com/ciffelia/atcoder-favorite-migrator/archive/master.zip)から拡張機能のZIPアーカイブをダウンロードし、適当な場所に展開します。
2. `chrome://extensions/`にアクセスします。
3. 右上の`デベロッパー モード`をクリックして有効にします。
4. `パッケージ化されていない拡張機能を読み込む`をクリックし、先程展開した拡張機能のフォルダを選択して`OK`をクリックします。
5. 自動でお気に入りの移行が始まります。
6. 数秒で移行完了を知らせる文章が表示されます。
7. `chrome://extensions/`にアクセスします。
8. この拡張機能はもう不要ですので、削除します。
9. 右上の`デベロッパー モード`をクリックして無効にします。

## ライセンス

- [MIT License](LICENSE)
- ただし、[browser-polyfill.js](src/browser-polyfill.js) は [Mozilla Public License 2.0](https://github.com/mozilla/webextension-polyfill/blob/cf135db59e2503473b83b41c2a8343d5b65e58b2/LICENSE)
