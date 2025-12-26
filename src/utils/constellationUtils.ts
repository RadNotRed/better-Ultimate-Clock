// Constellation utilities — zodiac dates and stylized patterns

export interface ZodiacSign {
  name: string;
  symbol: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  element: 'fire' | 'earth' | 'air' | 'water';
  unicode: string;
}

// Zodiac signs with their date ranges
export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Capricorn',
    symbol: '♑',
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: 'earth',
    unicode: '♑'
  },
  {
    name: 'Aquarius',
    symbol: '♒',
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: 'air',
    unicode: '♒'
  },
  {
    name: 'Pisces',
    symbol: '♓',
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: 'water',
    unicode: '♓'
  },
  {
    name: 'Aries',
    symbol: '♈',
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: 'fire',
    unicode: '♈'
  },
  {
    name: 'Taurus',
    symbol: '♉',
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: 'earth',
    unicode: '♉'
  },
  {
    name: 'Gemini',
    symbol: '♊',
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: 'air',
    unicode: '♊'
  },
  {
    name: 'Cancer',
    symbol: '♋',
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: 'water',
    unicode: '♋'
  },
  {
    name: 'Leo',
    symbol: '♌',
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: 'fire',
    unicode: '♌'
  },
  {
    name: 'Virgo',
    symbol: '♍',
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: 'earth',
    unicode: '♍'
  },
  {
    name: 'Libra',
    symbol: '♎',
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: 'air',
    unicode: '♎'
  },
  {
    name: 'Scorpio',
    symbol: '♏',
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: 'water',
    unicode: '♏'
  },
  {
    name: 'Sagittarius',
    symbol: '♐',
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: 'fire',
    unicode: '♐'
  }
];

/**
 * Get the zodiac sign for a given date
 * @param date - The date to check (defaults to current date)
 * @returns The zodiac sign for that date
 */
export function getZodiacSign(date: Date = new Date()): ZodiacSign {
  const month = date.getMonth() + 1; // JavaScript months are 0-indexed
  const day = date.getDate();

  for (const sign of ZODIAC_SIGNS) {
    // Handle Capricorn which spans December to January
    if (sign.startMonth > sign.endMonth) {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay)
      ) {
        return sign;
      }
    } else {
      if (
        (month === sign.startMonth && day >= sign.startDay) ||
        (month === sign.endMonth && day <= sign.endDay) ||
        (month > sign.startMonth && month < sign.endMonth)
      ) {
        return sign;
      }
    }
  }

  // Default fallback (should never happen)
  return ZODIAC_SIGNS[0];
}

// Stylized constellation patterns (coordinates normalized to 100x100)
export const CONSTELLATION_PATTERNS: Record<string, { stars: [number, number][]; lines: [number, number][] }> = {
  // Capricornus - Based on α Cap (20h18m), β Cap (20h21m), δ Cap (21h47m), γ Cap (21h40m)
  // Forms a distinctive triangle/wedge shape
  // Capricornus - triangle/wedge
  Capricorn: {
    stars: [
      [85, 25],
      [82, 32],
      [70, 55],
      [55, 68],
      [35, 60],
      [18, 45],
      [22, 35],
      [45, 28],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]]
  },


  // Aquarius - Water bearer with urn and water streams
  // Main stars: α Aqr (Sadalmelik), β Aqr (Sadalsuud), δ Aqr (Skat)
  // Aquarius - zigzag/waves
  Aquarius: {
    stars: [
      [75, 18],
      [68, 22],
      [55, 30],
      [48, 38],
      [42, 45],
      [35, 55],
      [28, 68],
      [52, 52],
      [60, 62],
      [22, 78],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 9], [3, 7], [7, 8]]
  },


  // Pisces - Two fish connected by ribbon at α Psc (Alrescha)
  // Pisces - two fish with knot
  Pisces: {
    stars: [
      [50, 45],
      [62, 38],
      [72, 32],
      [82, 25],
      [88, 18],
      [38, 52],
      [28, 58],
      [18, 65],
      [12, 72],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8]]
  },


  // Aries - Simple ram's head, just 3-4 main stars
  // Aries - simple arc
  Aries: {
    stars: [
      [25, 45],
      [42, 38],
      [55, 42],
      [72, 50],
    ],
    lines: [[0, 1], [1, 2], [2, 3]]
  },

  // Taurus - V-shaped Hyades face with Aldebaran, horns extending
  // Taurus - V-shaped face with horns
  Taurus: {
    stars: [
      [50, 48],
      [58, 40],
      [65, 32],
      [72, 25],
      [42, 38],
      [28, 22],
      [78, 15],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [3, 6]]
  },


  // Gemini - Twin figures of Castor and Pollux
  // Gemini - twin parallel figures
  Gemini: {
    stars: [
      [22, 12],
      [30, 15],
      [28, 28],
      [38, 25],
      [35, 42],
      [45, 38],
      [42, 58],
      [55, 55],
      [52, 72],
      [62, 68],
    ],
    lines: [[0, 2], [2, 4], [4, 6], [6, 8], [1, 3], [3, 5], [5, 7], [7, 9], [0, 1]]
  },


  // Cancer - Faint constellation with upside-down Y, Beehive cluster (M44) at center
  // Cancer - Y-shaped with central cluster
  Cancer: {
    stars: [
      [45, 42],
      [28, 28],
      [62, 28],
      [32, 62],
      [58, 62],
    ],
    lines: [[1, 0], [0, 2], [0, 3], [0, 4]]
  },


  // Leo - Distinctive sickle (head) and triangle (body)
  // Leo - sickle mane + body
  Leo: {
    stars: [
      [25, 35],
      [28, 22],
      [38, 15],
      [48, 12],
      [55, 18],
      [35, 45],
      [52, 55],
      [68, 48],
      [82, 38],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [0, 5], [5, 6], [6, 7], [7, 8]]
  },


  // Virgo - Large Y-shape with bright Spica at bottom
  // Virgo - branching Y shape
  Virgo: {
    stars: [
      [52, 78],
      [48, 58],
      [42, 42],
      [35, 28],
      [55, 38],
      [68, 32],
      [62, 52],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [1, 6]]
  },


  // Libra - Scales/balance shape - diamond
  // Libra - scale/diamond shape
  Libra: {
    stars: [
      [32, 42],
      [65, 42],
      [48, 55],
      [38, 72],
      [58, 72],
    ],
    lines: [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4]]
  },

  // Scorpius - Distinctive S-curve with bright Antares, curved tail with stinger
  // Scorpio - long S-curve with stinger
  Scorpio: {
    stars: [
      [85, 18],
      [78, 22],
      [70, 28],
      [62, 35],
      [55, 42],
      [48, 52],
      [42, 62],
      [35, 72],
      [28, 78],
      [22, 85],
      [18, 78],
      [15, 70],
      [12, 62],
      [18, 58],
      [25, 65],
    ],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 7]]
  },


  // Sagittarius - The famous "Teapot" asterism
  // Sagittarius - teapot/arrow asterism
  Sagittarius: {
    stars: [
      [55, 65],
      [62, 52],
      [68, 38],
      [48, 48],
      [45, 55],
      [52, 42],
      [38, 35],
      [42, 65],
      [35, 75],
    ],
    lines: [[0, 1], [1, 2], [2, 5], [5, 0], [0, 4], [4, 3], [5, 6], [0, 7], [7, 8]]
  }
};

/**
 * Get the element color for a zodiac sign
 */
export function getElementColor(element: ZodiacSign['element']): string {
  switch (element) {
    case 'fire':
      return '#FF6B35';
    case 'earth':
      return '#7CB342';
    case 'air':
      return '#64B5F6';
    case 'water':
      return '#26C6DA';
    default:
      return '#FFFFFF';
  }
}
