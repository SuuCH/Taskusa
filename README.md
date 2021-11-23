READMEv2.0
# Taskusa
タスクを管理するアプリ。Githubの草みたいにタスクを完了させたら草が生えることで、
モチベーションアップを図る

**追記**  
現状、サインアップ機能を制限中.  

## 技術選定
フロントエンド: React  
バックエンド: Firebase

## システム構成
![システム構成](https://user-images.githubusercontent.com/60252699/140090142-b4dc5217-1736-4623-823f-8a4a4ec31a2e.png)

## 現UI
![現UI](https://user-images.githubusercontent.com/60252699/142938888-a52b2c55-2f20-4b2b-8119-aa7d44ef875f.png)
# 以下開発ルール
## コミットメッセージについて
ex:[feat] ヘッダーの追加
- [〜〜]にはコミットの種類を記載。（feat/fix/refactor/chore/style）
  - feat:機能の追加
  - fix:バグの修正
  - refactor:コードリファクタリング
  - chore:雑用系の事項（Readmeの編集やライブラリのverアップなど）
  - style:スタイルのみの変更
- 追加した内容を書く。一目でわかるようにする
- issueがない場合は基本的にissueを立てる（雑用性の高いものは例外）
## ブランチ戦略
ex:feat/add-header
- ~~/:ブランチで行う対応の種類を記載（feat/fix/refactor/chore/style）
- mainブランチからブランチを切る
- mainにマージするときは必ずプルリク→レビューの工程を経て行う
  - マージの際には基本的にSquash and Mergeを行う
- 大きな開発(1ページの開発などを行うときなど)にはdevelop/~~というブランチを作る
- その開発に関連することはdevelop/~~ブランチを親として子ブランチを切り分ける
- 子 → develop/~ブランチにはSquash and Mergeを行い、develop/~ブランチ　→  mainには通常のMergeを行う

## 進捗のプルリクについて
- 作業を行う前に空コミットでプルリクを立てる
- 作業前に必ずgit pull
- 作業後にはgit push
- 進行中のプルリクについてはdraftでプルリクを立てる
  - 他の開発者に進捗がわかるようにする

## ディレクトリ構成案
- componentsフォルダ直下にはファイルは置かない
- components - login （or top or utils）の直下にコンポーネントのディレクトリを作る
- その中にindex.tsxとindex.cssを配置する

以下イメージ
![ディレクト構成案](https://user-images.githubusercontent.com/60252699/140087069-8f49c564-ebcf-4370-be73-d555ce02fd07.png)

