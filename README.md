# ZSlite

ZSlite 是 ZSlide 的網頁版實作：以 ZMD 為唯一真相來源，逐步建立語義簡報、三層空間化編輯器、Canvas 元件樹與物理動畫系統。

## Project status

- **Stage:** Pre-alpha
- **Current phase:** Phase 0 completed
- **Next phase:** Phase 1 — Camera Foundation
- **Production readiness:** Not ready; the current app is a foundation scaffold

目前 `main` 已包含 React 18、TypeScript strict、Vite、Zustand、基本 AST contract 與測試。完整的 ZMD parser、camera behavior、renderer、Level 1/2/3 editor 尚未完成。

## Start locally

```bash
npm ci
npm run dev
```

驗證目前版本：

```bash
npm run test
npm run build
```

## Delivery workflow

1. 從 GitHub Issue 取得一個有明確驗收條件的工作。
2. 建立短生命週期 branch，依規則完成實作。
3. 開 Pull Request，填寫 PR template。
4. CI 必須通過 `npm run test` 與 `npm run build`。
5. 先檢查 PR 的 preview deployment，再合併到 `main`。
6. 合併後由 hosting provider 自動部署 production。
7. 更新 `PROJECT.md`、`ROADMAP.md` 或相關決策紀錄。

## Documentation map

- [`PROJECT.md`](PROJECT.md) — 真實的目前狀態與接手資訊
- [`ROADMAP.md`](ROADMAP.md) — Phase 順序、範圍與完成條件
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — 不可違反的架構原則
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — Issue、branch、PR 與驗證流程
- [`docs/deployment.md`](docs/deployment.md) — GitHub 到公開網站的部署流程
- [`docs/decisions/`](docs/decisions/) — Architecture Decision Records
- [`docs/specs/`](docs/specs/) — 各 Phase 的可執行規格
- [`ZMD-spec.md`](ZMD-spec.md) — ZMD 語言規格
- [`ZSlide-design.md`](ZSlide-design.md) — ZSlide 系統設計藍圖

## Scope discipline

完整藍圖中的 WebGL、協作、AI、匯出與 `.zpack` 功能不是目前 Phase 0/1 的交付範圍。請先閱讀 `PROJECT.md` 與 `ROADMAP.md`，不要因為設計文件描述了長期功能就提前擴大當前工作。

## License

尚未決定。請在正式發布前補上授權條款。
