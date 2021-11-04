# Taskusa
タスクを管理するアプリ。Githubの草みたいにタスクを完了させたら草が生えることで、
モチベーションアップを図る
## 技術選定
フロントエンド: React  
バックエンド: Firebase

## システム構成
![システム構成](https://user-images.githubusercontent.com/60252699/140090142-b4dc5217-1736-4623-823f-8a4a4ec31a2e.png)
# 以下開発ルール
## コミットメッセージについて
ex:[feat] ヘッダーの追加/#5
- [〜〜]にはコミットの種類を記載。（feat/fix/refactor/chore）
- 追加した内容を書く。一目でわかるようにする
- /#~には対応するissueの番号を記載。
- issueがない場合は記載はいらないが基本的にissueを立てる
## ブランチ戦略
ex:feat/add-header
- ~~/:ブランチで行う対応の種類を記載（feat/fix/refactor/chore）
- mainブランチからブランチを切る
- mainにマージするときは必ずプルリク→レビューの工程を経て行う

## 進捗のプルリクについて
- 作業を行う前に空コミットでプルリクを立てる
- 作業前に必ずgit pull
- 作業後にはgit push
- 進行中のプルリクについては[WIP]を頭につける

## ディレクトリ構成案
- componentsフォルダ直下にはファイルは置かない
- components - login （or top or utils）の直下にコンポーネントのディレクトリを作る
- その中にindex.tsxとindex.cssを配置する

以下イメージ
![ディレクト構成案](https://user-images.githubusercontent.com/60252699/140087069-8f49c564-ebcf-4370-be73-d555ce02fd07.png)

