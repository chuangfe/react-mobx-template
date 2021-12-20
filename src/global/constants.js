// 過場影片
import videoQ01A01 from '../assets/videos/Q01_耀眼南島陽光海岸，白沙上海風輕.mp4';
import videoQ01A02 from '../assets/videos/Q01_薄霧繚繞中海拔森林，青苔泥土氣息.mp4';

import videoQ02A01 from '../assets/videos/Q02_焦糖、可可、鳳梨果乾、煙燻甘草香氣.mp4';
import videoQ02A02 from '../assets/videos/Q02_百香果、芬多精、淡淡蜜桃、白色花香氣.mp4';

import videoQ03A01 from '../assets/videos/Q03_濃郁流心熔岩的布朗尼.mp4';
import videoQ03A02 from '../assets/videos/Q03_橙花糖霜的水果冰淇淋.mp4';

import videoQ04A01 from '../assets/videos/Q04_渾厚嗓音，大山子民對山林表達的敬畏.mp4';
import videoQ04A02 from '../assets/videos/Q04_清澈提琴聲，輕巧的旋律蔓延整座天際.mp4';

import videoQ05A01 from '../assets/videos/Q05_倒在陶土材質的淺杯裡，冒著裊裊熱氣.mp4';
import videoQ05A02 from '../assets/videos/Q05_澆淋在裝滿冰塊的玻璃杯，冰塊清脆碎裂.mp4';

import videoQ06A01 from '../assets/videos/Q06_渾厚濃郁、奶油般綿密質地.mp4';
import videoQ06A02 from '../assets/videos/Q06_輕盈水感、果汁般清爽質地.mp4';

import videoQ07A01 from '../assets/videos/Q07_秋葉緩緩落下的紅褐色調.mp4';
import videoQ07A02 from '../assets/videos/Q07_春風吹拂搖擺的青綠色調.mp4';

import videoQ08A01 from '../assets/videos/Q08_安穩吃草圓滾滾的野兔.mp4';
import videoQ08A02 from '../assets/videos/Q08_雀躍跳動小小的綠繡眼.mp4';

import videoQ09A01 from '../assets/videos/Q09_願你每個工作日裡，都能輕快忙裡偷閒.mp4';
import videoQ09A02 from '../assets/videos/Q09_願你每個假日時光，都有開心豐富體驗.mp4';

import videoQ10A01 from '../assets/videos/Q10_給你舒緩放鬆的平靜.mp4';
import videoQ10A02 from '../assets/videos/Q10_給你精力充沛的能量.mp4';

export const questionsClassX = [
  {
    id: 1,
    class: 'x',
    question: '你在陌生的國度醒來，肌膚感受這裡的氣候是....',
    answers: [
      {
        fraction: 0,
        content: '耀眼南島陽光海岸，白沙上海風輕拂',
        video: videoQ01A01
      },
      {
        fraction: 1,
        content: '薄霧繚繞中海拔森林，青苔泥土氣息',
        video: videoQ01A02
      }
    ]
  },

  {
    id: 2,
    class: 'x',
    question: '還來不及睜開眼，就先聞到大地物產的香氣襲來...',
    answers: [
      {
        fraction: 0,
        content: '焦糖、可可、鳳梨果乾、煙燻甘草香氣',
        video: videoQ02A01
      },
      {
        fraction: 1,
        content: '百香果、芬多精、淡淡蜜桃、白色花香氣',
        video: videoQ02A02
      }
    ]
  },

  {
    id: 3,
    class: 'x',
    question: '終於願意醒來，在這屬於自己的時光裡享用的甜點，會是...',
    answers: [
      {
        fraction: 0,
        content: '濃郁流心熔岩的布朗尼',
        video: videoQ03A01
      },
      {
        fraction: 1,
        content: '橙花糖霜的水果冰淇淋',
        video: videoQ03A02
      }
    ]
  },

  {
    id: 4,
    class: 'x',
    question: '遠處傳來悠悠的旋律，你覺得是...',
    answers: [
      {
        fraction: 0,
        content: '渾厚嗓音，大山子民對山林表達的敬畏',
        video: videoQ04A01
      },
      {
        fraction: 1,
        content: '清澈提琴聲，輕巧的旋律蔓延整座天際',
        video: videoQ04A02
      }
    ]
  },

  {
    id: 5,
    class: 'x',
    question: '朝著聲音方向前進的路上，口渴了，為自己倒一杯茶飲...',
    answers: [
      {
        fraction: 0,
        content: '倒在陶土材質的淺杯裡，冒著裊裊熱氣',
        video: videoQ05A01
      },
      {
        fraction: 1,
        content: '澆淋在裝滿冰塊的玻璃杯，冰塊清脆碎裂',
        video: videoQ05A02
      }
    ]
  },

  {
    id: 6,
    class: 'x',
    question: '啜一口茶湯，與舌尖相遇的質感是',
    answers: [
      {
        fraction: 0,
        content: '渾厚濃郁、奶油般綿密質地',
        video: videoQ06A01
      },
      {
        fraction: 1,
        content: '輕盈水感、果汁般清爽質地',
        video: videoQ06A02
      }
    ]
  },

  {
    id: 7,
    class: 'x',
    question: '這樣的氣氛讓你感到心情安定，現在的情緒是什麼顏色呢...',
    answers: [
      {
        fraction: 0,
        content: '秋葉緩緩落下的紅褐色調',
        video: videoQ07A01
      },
      {
        fraction: 1,
        content: '春風吹拂搖擺的青綠色調',
        video: videoQ07A02
      }
    ]
  }
];

export const questionsClassY = [
  {
    id: 8,
    class: 'y',
    question: '忽然有一隻小動物停在身邊，思緒被拉了回來，你覺得牠是...',
    answers: [
      {
        fraction: 0,
        content: '安穩吃草圓滾滾的野兔',
        video: videoQ08A01
      },
      {
        fraction: 1,
        content: '雀躍跳動小小的綠繡眼',
        video: videoQ08A02
      }
    ]
  },

  {
    id: 9,
    class: 'y',
    question: '抵達了旋律的源頭，有兩個寶箱，上面寫著對你的祝福...',
    answers: [
      {
        fraction: 0,
        content: '願你每個工作日裡，都能輕快忙裡偷閒',
        video: videoQ09A01
      },
      {
        fraction: 1,
        content: '願你每個假日時光，都有開心豐富體驗',
        video: videoQ09A02
      }
    ]
  },

  {
    id: 10,
    class: 'y',
    question: '寶箱裡裝的原來是一瓶神奇藥水，你覺得它可以...',
    answers: [
      {
        fraction: 0,
        content: '給你舒緩放鬆的平靜',
        video: videoQ10A01
      },
      {
        fraction: 1,
        content: '給你精力充沛的能量',
        video: videoQ10A02
      }
    ]
  }
];

export const personalityTraits = [
  {
    fractionMinClassX: 0,
    fractionMaxClassX: 1,
    fractionMinClassY: 2,
    fractionMaxClassY: 3,
    answer: '大山大海的子民'
  },

  {
    fractionMinClassX: 0,
    fractionMaxClassX: 1,
    fractionMinClassY: 0,
    fractionMaxClassY: 1,
    answer: '有故事的溫柔職人'
  },

  {
    fractionMinClassX: 2,
    fractionMaxClassX: 3,
    fractionMinClassY: 2,
    fractionMaxClassY: 3,
    answer: '天真無邪的自由小孩'
  },

  {
    fractionMinClassX: 2,
    fractionMaxClassX: 3,
    fractionMinClassY: 0,
    fractionMaxClassY: 1,
    answer: '奢華古典的皇室成員'
  },

  {
    fractionMinClassX: 4,
    fractionMaxClassX: 5,
    fractionMinClassY: 2,
    fractionMaxClassY: 3,
    answer: '散發魅力的鬼靈精'
  },

  {
    fractionMinClassX: 4,
    fractionMaxClassX: 5,
    fractionMinClassY: 0,
    fractionMaxClassY: 1,
    answer: '山林裡的個性智者'
  },

  {
    fractionMinClassX: 6,
    fractionMaxClassX: 7,
    fractionMinClassY: 2,
    fractionMaxClassY: 3,
    answer: '擁有銀鈴笑聲的小仙子'
  },

  {
    fractionMinClassX: 6,
    fractionMaxClassX: 7,
    fractionMinClassY: 0,
    fractionMaxClassY: 1,
    answer: '甜美如蜜的小不點'
  }
];

export const pages = {
  Questions: '/questions',
  Traits: '/traits'
};
