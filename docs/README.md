     1	# SmartMeter Mobile App - デモサイト
     2	
     3	このディレクトリには、SmartMeterMobileAppのGitHub Pagesデモサイトが含まれています。
     4	
     5	## 📋 ファイル構成
     6	
     7	```
     8	docs/
     9	├── index.html           # メインデモサイト
    10	├── style.css            # スタイルシート
    11	├── script.js            # JavaScript
    12	├── RELEASE_NOTES.html   # リリースノート（HTML版）
    13	└── README.md            # このファイル
    14	```
    15	
    16	## 🌐 公開URL
    17	
    18	GitHub Pagesで公開後、以下のURLでアクセス可能になります：
    19	
    20	```
    21	https://YOUR_ORG.github.io/SmartMeterMobileApp/
    22	```
    23	
    24	## 🚀 GitHub Pagesの有効化手順
    25	
    26	### ステップ1: GitHubリポジトリにプッシュ
    27	
    28	```bash
    29	# プロジェクトルートで
    30	git add docs/
    31	git commit -m "Add GitHub Pages demo site"
    32	git push origin main
    33	```
    34	
    35	### ステップ2: GitHub Pagesを有効化
    36	
    37	1. GitHubリポジトリページにアクセス
    38	2. **Settings** タブをクリック
    39	3. 左サイドバーから **Pages** を選択
    40	4. **Source** セクションで以下を設定：
    41	   - Branch: `main`
    42	   - Folder: `/docs`
    43	5. **Save** をクリック
    44	
    45	### ステップ3: 公開確認
    46	
    47	数分後、以下のURLでアクセス可能：
    48	```
    49	https://YOUR_ORG.github.io/SmartMeterMobileApp/
    50	```
    51	
    52	## 📝 カスタマイズ方法
    53	
    54	### 1. ダウンロードリンクの更新
    55	
    56	`index.html` の以下の部分を編集：
    57	
    58	```html
    59	<!-- Line 279付近 -->
    60	<a href="https://github.com/YOUR_ORG/SmartMeterMobileApp/releases/download/v1.0.0/app-debug.apk" class="btn btn-download">
    61	```
    62	
    63	`YOUR_ORG` を実際の組織名に変更してください。
    64	
    65	### 2. GitHubリポジトリリンクの更新
    66	
    67	`index.html` の以下の部分を編集：
    68	
    69	```html
    70	<!-- Line 448付近 -->
    71	<li><a href="https://github.com/YOUR_ORG/SmartMeterMobileApp">
    72	```
    73	
    74	### 3. カラーテーマの変更
    75	
    76	`style.css` の先頭にある CSS変数を編集：
    77	
    78	```css
    79	:root {
    80	    --primary-color: #aa0000;  /* 大崎電気工業のコーポレートカラー */
    81	    --primary-dark: #880000;
    82	    --primary-light: #cc0000;
    83	    /* ... */
    84	}
    85	```
    86	
    87	### 4. スクリーンショットの追加
    88	
    89	実機テスト後、スクリーンショット画像を追加：
    90	
    91	```bash
    92	# docs/images/ ディレクトリを作成
    93	mkdir -p docs/images
    94	
    95	# スクリーンショットを配置
    96	# - home.png
    97	# - meter-info.png
    98	# - misconnection.png
    99	# - measurement.png
   100	```
   101	
   102	`index.html` のスクリーンショットセクションを更新：
   103	
   104	```html
   105	<!-- Line 227付近 -->
   106	<div class="screenshot-item">
   107	    <img src="images/home.png" alt="ホーム画面" style="width: 100%; border-radius: 8px;">
   108	    <p class="screenshot-caption">ホーム画面</p>
   109	</div>
   110	```
   111	
   112	## 🎨 デザイン特徴
   113	
   114	- **コーポレートカラー**: 大崎電気工業の赤色（#aa0000）を基調
   115	- **レスポンシブデザイン**: スマートフォン、タブレット、PC対応
   116	- **アニメーション**: スクロール時のフェードイン効果
   117	- **アクセシビリティ**: 適切なコントラスト比、フォントサイズ
   118	
   119	## 📱 モバイル対応
   120	
   121	- タッチ操作に最適化
   122	- 読みやすいフォントサイズ
   123	- 縦スクロールに最適化されたレイアウト
   124	
   125	## 🔧 ローカルでの確認方法
   126	
   127	### 方法1: 簡易HTTPサーバー（Python）
   128	
   129	```bash
   130	# docs ディレクトリで
   131	cd docs
   132	
   133	# Python 3
   134	python3 -m http.server 8000
   135	
   136	# ブラウザで開く
   137	open http://localhost:8000
   138	```
   139	
   140	### 方法2: VS Code Live Server
   141	
   142	1. VS Codeで `docs/index.html` を開く
   143	2. 右クリック → "Open with Live Server"
   144	
   145	### 方法3: ブラウザで直接開く
   146	
   147	```bash
   148	# macOS
   149	open docs/index.html
   150	
   151	# Windows
   152	start docs/index.html
   153	
   154	# Linux
   155	xdg-open docs/index.html
   156	```
   157	
   158	## 📊 ページ構成
   159	
   160	### index.html（メインページ）
   161	
   162	1. **ヘッダー** - アプリ名、サブタイトル
   163	2. **ヒーローセクション** - メインビジュアル、ダウンロードボタン
   164	3. **主要機能** - 4つの機能カード
   165	4. **技術スタック** - 使用技術の紹介
   166	5. **スクリーンショット** - アプリ画面のプレビュー
   167	6. **システム要件** - 対応環境
   168	7. **ダウンロード** - APKダウンロードセクション
   169	8. **インストール手順** - 4ステップガイド
   170	9. **プロジェクト情報** - 開発状況、統計、リソース
   171	10. **フッター** - コピーライト、開発者情報
   172	
   173	### RELEASE_NOTES.html
   174	
   175	- 詳細なリリースノート
   176	- 実装済み機能の詳細説明
   177	- 技術スタック
   178	- テスト状況
   179	- 今後の予定
   180	
   181	## 🎯 社内共有方法
   182	
   183	### メール文面例
   184	
   185	```
   186	件名: SmartMeterMobileApp デモサイト公開
   187	
   188	本文:
   189	お疲れ様です。
   190	SmartMeterMobileAppのデモサイトを公開しました。
   191	
   192	🌐 デモサイト:
   193	https://YOUR_ORG.github.io/SmartMeterMobileApp/
   194	
   195	以下の内容を確認できます:
   196	- プロジェクト概要と主要機能
   197	- 技術スタック
   198	- システム要件
   199	- APKダウンロード（準備完了次第）
   200	- インストール手順
   201	
   202	ご確認のほど、よろしくお願いいたします。
   203	
   204	---
   205	大崎電気工業株式会社 インキュベーション室
   206	梅澤優一
   207	```
   208	
   209	### Slack/Teams共有例
   210	
   211	```
   212	📱 SmartMeterMobileApp デモサイト公開 🎉
   213	
   214	CEM6誤結線検出モバイルアプリのデモサイトができました！
   215	
   216	🌐 https://YOUR_ORG.github.io/SmartMeterMobileApp/
   217	
   218	✨ 確認できること:
   219	• プロジェクト概要
   220	• 4つの主要機能の詳細
   221	• APKダウンロード
   222	• インストール手順
   223	
   224	フィードバックお待ちしています！
   225	```
   226	
   227	## 📈 アクセス解析（オプション）
   228	
   229	Google Analyticsを追加する場合、`index.html` の `</head>` タグ前に挿入：
   230	
   231	```html
   232	<!-- Google Analytics -->
   233	<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   234	<script>
   235	  window.dataLayer = window.dataLayer || [];
   236	  function gtag(){dataLayer.push(arguments);}
   237	  gtag('js', new Date());
   238	  gtag('config', 'GA_MEASUREMENT_ID');
   239	</script>
   240	```
   241	
   242	## 🔒 アクセス制限（オプション）
   243	
   244	社内限定公開にする場合：
   245	
   246	1. **Privateリポジトリにする**
   247	   - リポジトリ設定 → Danger Zone → Make private
   248	
   249	2. **Basic認証を追加**
   250	   - Cloudflare Pages等の外部サービスを利用
   251	
   252	3. **IP制限**
   253	   - 企業ファイアウォールで制限
   254	
   255	## 📝 メンテナンス
   256	
   257	### APK更新時
   258	
   259	1. GitHub Releasesに新しいAPKをアップロード
   260	2. `index.html` のバージョン番号を更新
   261	3. 変更をpush
   262	
   263	### スクリーンショット更新時
   264	
   265	1. 実機で新しいスクリーンショットを撮影
   266	2. `docs/images/` に配置
   267	3. `index.html` の該当部分を更新
   268	
   269	## 🆘 トラブルシューティング
   270	
   271	### GitHub Pagesが表示されない
   272	
   273	- リポジトリ設定 → Pages で設定を確認
   274	- `main` ブランチの `/docs` フォルダが選択されているか確認
   275	- 数分待ってからアクセス
   276	
   277	### CSSが適用されない
   278	
   279	- `style.css` のパスを確認
   280	- ブラウザのキャッシュをクリア
   281	- DevToolsでネットワークエラーを確認
   282	
   283	### リンクが404エラー
   284	
   285	- 相対パスを確認（`href="RELEASE_NOTES.html"`）
   286	- ファイル名の大文字小文字を確認
   287	
   288	## 🎓 学習リソース
   289	
   290	- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)
   291	- [HTML/CSS リファレンス](https://developer.mozilla.org/ja/)
   292	- [Font Awesome アイコン](https://fontawesome.com/icons)
   293	
   294	---
   295	
   296	**作成日:** 2025-01-07  
   297	**バージョン:** 1.0.0  
   298	**プロジェクト:** SmartMeterMobileApp Phase 1 (Android版)
   299	
