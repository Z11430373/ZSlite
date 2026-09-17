(function () {
  'use strict';

  /* ============================================================
     常數與種子資料
  ============================================================ */
  var CARD_W = 640, CARD_H = 360;
  var STORAGE_KEY = 'zslide-fluid-deck-v1';

  var QUESTION_POOL = [
    '這個尺度切換要怎麼跟觀眾解釋？',
    'Level 2 的段落可以直接貼 Markdown 嗎？',
    '離線也能用嗎？',
    '可以匯出成 PDF 嗎？',
    '手機上可以編輯嗎？'
  ];

  function seedData() {
    return {
      cards: [
        {
          id: 'c1', x: 260, y: 320, layout: 'hero', variant: 0,
          title: 'ZSlide', notes: '開場：一句話說明和傳統簡報軟體的差異，然後直接示範滾輪縮放。',
          elements: [
            { id: 'e1', type: 'heading', x: 60, y: 118, w: 520, h: 96, text: '次世代簡報，像流體一樣生長' },
            { id: 'e2', type: 'text', x: 60, y: 214, w: 480, h: 90, text: '一張無限畫布，三種尺度，讓靈感、大綱與像素共存在同一個空間裡。' }
          ]
        },
        {
          id: 'c2', x: 1040, y: 260, layout: 'split', variant: 0,
          title: '問題與解法', notes: '',
          elements: [
            { id: 'e1', type: 'heading', x: 40, y: 36, w: 260, h: 50, text: '傳統簡報的斷層' },
            { id: 'e2', type: 'text', x: 40, y: 96, w: 260, h: 200, text: '靈感、大綱、排版分散在便利貼、文件、投影片三個世界，來回搬運耗掉一半的製作時間。' },
            { id: 'e3', type: 'heading', x: 340, y: 36, w: 260, h: 50, text: 'ZSlide 的解法' },
            { id: 'e4', type: 'text', x: 340, y: 96, w: 260, h: 200, text: '同一塊畫布，滾輪拉近拉遠，就能在靈感、大綱、像素三種尺度之間自由移動。' }
          ]
        },
        {
          id: 'c3', x: 1840, y: 350, layout: 'stats', variant: 0,
          title: '數據', notes: '',
          versions: [
            { name: 'v1', elements: [
              { id: 'e1', type: 'stat', x: 40, y: 130, w: 165, h: 120, value: '3', label: '縮放尺度' },
              { id: 'e2', type: 'stat', x: 237, y: 130, w: 165, h: 120, value: '0', label: '切換視窗次數' },
              { id: 'e3', type: 'stat', x: 434, y: 130, w: 165, h: 120, value: '∞', label: '畫布邊界' }
            ]},
            { name: 'v2', elements: [
              { id: 'e1', type: 'stat', x: 40, y: 130, w: 133, h: 120, value: '3', label: '縮放尺度' },
              { id: 'e2', type: 'stat', x: 172, y: 130, w: 133, h: 120, value: '0', label: '切換視窗' },
              { id: 'e3', type: 'stat', x: 304, y: 130, w: 133, h: 120, value: '17', label: '解析步驟' },
              { id: 'e4', type: 'stat', x: 436, y: 130, w: 133, h: 120, value: '∞', label: '畫布邊界' }
            ]}
          ],
          elements: [
            { id: 'e1', type: 'stat', x: 40, y: 130, w: 165, h: 120, value: '3', label: '縮放尺度' },
            { id: 'e2', type: 'stat', x: 237, y: 130, w: 165, h: 120, value: '0', label: '切換視窗次數' },
            { id: 'e3', type: 'stat', x: 434, y: 130, w: 165, h: 120, value: '∞', label: '畫布邊界' }
          ]
        },
        {
          id: 'c4', x: 2640, y: 300, layout: 'chart', variant: 0,
          title: '成效比較', notes: '',
          elements: [
            { id: 'e1', type: 'heading', x: 40, y: 28, w: 400, h: 46, text: '製作時間比較（分鐘）' },
            { id: 'e2', type: 'chart', x: 40, y: 92, w: 560, h: 230, chartType: 'bar',
              data: [ { label: '傳統流程', value: 96 }, { label: 'ZSlide', value: 34 } ] }
          ]
        },
        {
          id: 'c5', x: 3440, y: 380, layout: 'quote', variant: 0,
          title: '引言', notes: '',
          elements: [
            { id: 'e1', type: 'quote', x: 60, y: 118, w: 520, h: 150, text: '好的工具應該消失在思考背後。', author: '設計原則 · Part 0' }
          ]
        },
        {
          id: 'c6', x: 4240, y: 320, layout: 'hero', variant: 1,
          title: '謝謝', notes: '結尾：邀請大家動手拉一次滾輪，親自感受三個尺度。',
          elements: [
            { id: 'e1', type: 'heading', x: 60, y: 140, w: 520, h: 90, text: '開始建造你的第一份流體簡報' },
            { id: 'e2', type: 'text', x: 60, y: 236, w: 480, h: 60, text: '往下滾一格試試看 Level 2，再滾一格試試看 Level 3。' }
          ]
        }
      ],
      scraps: [
        { id: 's1', x: 560, y: 60, tag: 'idea', text: '靈感：卡片之間用發光軌跡連接，像星座一樣' },
        { id: 's2', x: 1460, y: 600, tag: 'todo', text: '待補：找一句真實使用者訪談引言放進去' },
        { id: 's3', x: 2260, y: 100, tag: 'asset', text: '素材：手繪流程草圖（已去背）' }
      ],
      table: { id: 't1', x: 3120, y: 640, title: '年度資料', labels: ['2024', '2025', '2026'], values: [42, 68, 91] },
      connections: [['c1','c2'],['c2','c3'],['c3','c4'],['c4','c5'],['c5','c6']],
      stamps: []
    };
  }

  /* The complete legacy prototype is preserved verbatim in the repository as a migration reference. */
  var state = {
    level: 1,
    camera: { x: 0, y: 0, zoom: 0.42 },
    tool: 'arrow',
    selectedCardId: null,
    selectedElementId: null,
    hoveredGapCardId: null,
    presentMode: false,
    presentIndex: 0,
    xray: false,
    drawerOpenCardId: null
  };
  var data = seedData();
  void state;
  void data;
})();
