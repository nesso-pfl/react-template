# React プロジェクトにおいて使われそうな npm パッケージについて

## React

| name | description |
| -- | -- |
| react | React 本体 |
| react-dom | React の DOM レンダリング |
| redux | Redux 本体 |
| react-redux | React 用の Redux |
| react-router-dom | Web の React 用ルーティングライブラリ |


## Babel

| name | description |
| -- | -- |
| @babel/core | Babel 本体 |
| @babel/preset-env | es6 用の preset |
| @babel/preset-react | react 用の preset |
| @babel/preset-typescript | typescript 用の preset, 但し type check はなく、 build に利用するのみ |
| babel-loader | webpack の js ファイルに指定する loader |


## Webpack

| name | description |
| -- | -- |
| webpack | webpack 本体 |
| webpack-cli | cli |
| webpack-dev-server | 開発用サーバー |
| html-webpack-plugin | template から index.html を生成する plugin |
| ts-loader | typescript 用の plugin |


## Test
※ 割と適当

| name | description |
| -- | -- |
| jest | jest 本体 |
| react-test-renderer | react component を object に変換するライブラリ |
| @testing-library/* | |
| eslint-plugin-jest | eslint plugin |


## Lint

| name | description |
| -- | -- |
| eslint | eslint 本体 |
| prettier | prettier 本体 |
| eslint-plugin-import | import/export 周りの plugin |
| eslint-plugin-prettier | prettier plugin |
| eslint-config-prettier | eslint の prettier と競合する機能の無効化 |
| eslint-config-react | react plugin |
| eslint-config-react-hooks | react hooks plugin |


## TypeScript

| name | description |
| -- | -- |
| typescript | typescript 本体 |
| @typescript-eslint/parser | eslint に使わせる parser |
| @typescript-eslint/eslint-plugin | eslint plugin |
| @types/* | 型定義ライブラリ |
