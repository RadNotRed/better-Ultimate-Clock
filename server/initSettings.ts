import { SETTING_TYPES } from '@deskthing/types'
import { ClockSettings, ClockSettingIDs, ClockWidgets } from '../shared/settings'
import { DeskThing } from '@deskthing/server'

export const initializeSettings = async (): Promise<void> => {

  const settings: ClockSettings = {
    [ClockSettingIDs.COLOR_OPTIONS]: {
      id: ClockSettingIDs.COLOR_OPTIONS,
      type: SETTING_TYPES.SELECT,
      value: 'auto',
      label: 'Clock Color Options',
      options: [
        { label: 'Automatic', value: 'auto' },
        { label: 'Custom', value: 'custom' },
        { label: 'Gradient', value: 'gradient' }
      ]
    },
    [ClockSettingIDs.COLOR]: {
      id: ClockSettingIDs.COLOR,
      type: SETTING_TYPES.COLOR,
      label: 'Clock Color',
      value: '#ffffff',
      dependsOn: [
        {
          settingId: ClockSettingIDs.COLOR_OPTIONS,
          isValue: 'custom'
        }
      ]
    },
    [ClockSettingIDs.GRADIENT_START]: {
      id: ClockSettingIDs.GRADIENT_START,
      type: SETTING_TYPES.COLOR,
      label: 'Gradient Start Color',
      value: '#ff0000',
      dependsOn: [
        {
          settingId: ClockSettingIDs.COLOR_OPTIONS,
          isValue: 'gradient'
        }
      ]
    },
    [ClockSettingIDs.GRADIENT_END]: {
      id: ClockSettingIDs.GRADIENT_END,
      type: SETTING_TYPES.COLOR,
      label: 'Gradient End Color',
      value: '#0000ff',
      dependsOn: [
        {
          settingId: ClockSettingIDs.COLOR_OPTIONS,
          isValue: 'gradient'
        }
      ]
    },

    [ClockSettingIDs.FONT]: {
      id: ClockSettingIDs.FONT,
      type: SETTING_TYPES.FILE,
      label: 'Upload Font',
      value: '',
      description: 'Upload a custom font for the clock display. Hit Save after uploading then select it in FONT SELECTION',
      fileTypes: [
        {
          name: 'Font Files',
          extensions: ['ttf', 'otf', 'woff', 'woff2']
        }
      ]
    },
    [ClockSettingIDs.FONT_SELECTION]: {
      id: ClockSettingIDs.FONT_SELECTION,
      type: SETTING_TYPES.SELECT,
      label: 'Select Font',
      value: '',
      description: 'Select a font for the clock display. If you upload a new font, select it here.',
      options: [
        { label: 'GeistVF (Default)', value: 'GeistVF.ttf' },
        { label: 'GeistMonoVF', value: 'GeistMonoVF.ttf' },
        { label: 'HelveticaNeue', value: 'HelveticaNeue.ttf' },
        { label: 'THEBOLDFONT', value: 'THEBOLDFONT.ttf' }
      ]
    },
    [ClockSettingIDs.FONT_WEIGHT]: {
      id: ClockSettingIDs.FONT_WEIGHT,
      type: SETTING_TYPES.SELECT,
      label: 'Font Weight',
      value: 'normal',
      description: 'Adjust the weight/thickness of the clock font',
      options: [
        { label: 'Light', value: '300' },
        { label: 'Regular', value: 'normal' },
        { label: 'Medium', value: '500' },
        { label: 'Semi-Bold', value: '600' },
        { label: 'Bold', value: 'bold' },
        { label: 'Extra Bold', value: '800' }
      ]
    },

    [ClockSettingIDs.BACKGROUND]: {
      id: ClockSettingIDs.BACKGROUND,
      type: SETTING_TYPES.SELECT,
      value: 'color',
      label: 'Background Options',
      options: [
        { label: 'Color', value: 'color' },
        { label: 'Picture', value: 'picture' },
        { label: 'Thumbnail', value: 'thumbnail' }
      ]
    },
    [ClockSettingIDs.BACKGROUND_BLUR]: {
      id: ClockSettingIDs.BACKGROUND_BLUR,
      type: SETTING_TYPES.NUMBER,
      label: 'Background Blur',
      description: 'Adjust the blur effect on the background. Only applies to thumbnail backgrounds.',
      value: 12,
      min: 0,
      max: 100,
      step: 0.1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.BACKGROUND,
          isNot: 'color'
        },
      ]
    },
    [ClockSettingIDs.BACKGROUND_IMAGE]: {
      id: ClockSettingIDs.BACKGROUND_IMAGE,
      type: SETTING_TYPES.FILE,
      label: 'Background Image',
      value: '',
      description: 'Upload a custom background image.',
      fileTypes: [
        {
          name: 'Image Files',
          extensions: ['jpg', 'jpeg', 'png', 'webp', 'gif']
        }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.BACKGROUND,
          isValue: 'picture'
        }
      ]
    },
    [ClockSettingIDs.BACKGROUND_COLOR]: {
      id: ClockSettingIDs.BACKGROUND_COLOR,
      type: SETTING_TYPES.COLOR,
      label: 'Background Color',
      value: '#1A2232',
      dependsOn: [
        {
          settingId: ClockSettingIDs.BACKGROUND,
          isValue: 'color'
        }
      ]
    },
    [ClockSettingIDs.BACKGROUND_BRIGHTNESS]: {
      id: ClockSettingIDs.BACKGROUND_BRIGHTNESS,
      version: '0.11.3',
      type: SETTING_TYPES.RANGE,
      label: 'Background Brightness',
      description: 'Adjust the brightness of the background.',
      value: 1,
      min: 0,
      max: 1,
      step: 0.01
    },

    [ClockSettingIDs.TIME_LAYOUT]: {
      id: ClockSettingIDs.TIME_LAYOUT,
      type: SETTING_TYPES.SELECT,
      label: 'Time Layout',
      value: 'inline',
      description: 'Display time inline (12:05) or stacked vertically',
      options: [
        { label: 'Inline', value: 'inline' },
        { label: 'Stacked', value: 'stacked' }
      ]
    },
    [ClockSettingIDs.TIME_ALIGNMENT]: {
      id: ClockSettingIDs.TIME_ALIGNMENT,
      type: SETTING_TYPES.SELECT,
      label: 'Time Alignment',
      value: 'center',
      description: 'Alignment for stacked time layout',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.TIME_LAYOUT,
          isValue: 'stacked'
        }
      ]
    },
    [ClockSettingIDs.MILITARY_TIME]: {
      id: ClockSettingIDs.MILITARY_TIME,
      type: SETTING_TYPES.BOOLEAN,
      label: '24-Hour Format',
      value: false,
      description: 'Use 24-hour (military) time format'
    },
    [ClockSettingIDs.SHOW_AMPM]: {
      id: ClockSettingIDs.SHOW_AMPM,
      type: SETTING_TYPES.SELECT,
      label: 'AM/PM Display',
      value: 'normal',
      description: 'How to display AM/PM indicator',
      options: [
        { label: 'Show', value: 'normal' },
        { label: 'Small (Subtext)', value: 'small' },
        { label: 'Hide', value: 'off' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.MILITARY_TIME,
          isNot: true
        }
      ]
    },
    [ClockSettingIDs.DIGIT_SPACING]: {
      id: ClockSettingIDs.DIGIT_SPACING,
      type: SETTING_TYPES.RANGE,
      label: 'Digit Spacing',
      value: 0,
      min: -10,
      max: 50,
      step: 1,
      description: 'Adjust spacing between digits (letter-spacing)'
    },
    [ClockSettingIDs.LINE_SPACING]: {
      id: ClockSettingIDs.LINE_SPACING,
      type: SETTING_TYPES.RANGE,
      label: 'Line Spacing',
      value: 0,
      min: -50,
      max: 100,
      step: 1,
      description: 'Adjust spacing between stacked lines',
      dependsOn: [
        {
          settingId: ClockSettingIDs.TIME_LAYOUT,
          isValue: 'stacked'
        }
      ]
    },
    [ClockSettingIDs.CLOCK_DIVIDER]: {
      id: ClockSettingIDs.CLOCK_DIVIDER,
      type: SETTING_TYPES.STRING,
      label: 'Clock Divider',
      value: ':',
      description: 'Character used to separate hours and minutes',
      dependsOn: [
        {
          settingId: ClockSettingIDs.TIME_LAYOUT,
          isValue: 'inline'
        }
      ]
    },
    [ClockSettingIDs.LEADING_ZERO_HOURS]: {
      id: ClockSettingIDs.LEADING_ZERO_HOURS,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Leading Zero for Hours',
      value: false,
      description: 'Display hours with leading zero (01, 02... 09). Only applies to 12-hour mode.',
    },

    [ClockSettingIDs.CLOCK_SIZE]: {
      id: ClockSettingIDs.CLOCK_SIZE,
      type: SETTING_TYPES.NUMBER,
      label: 'Clock Size (px)',
      value: 180,
      min: 5,
      max: 500,
      step: 1,
      description: 'Adjust the size of the clock display font in pixels'
    },
    [ClockSettingIDs.CLOCK_OPACITY]: {
      id: ClockSettingIDs.CLOCK_OPACITY,
      type: SETTING_TYPES.RANGE,
      label: 'Clock Opacity',
      value: 1,
      min: 0,
      max: 1,
      step: 0.01
    },
    [ClockSettingIDs.CLOCK_POSITION]: {
      id: ClockSettingIDs.CLOCK_POSITION,
      type: SETTING_TYPES.SELECT,
      label: 'Clock Position',
      description: 'Set the position of the clock on the screen.',
      options: [
        { label: 'Top Left', value: 'top-left' },
        { label: 'Top Right', value: 'top-right' },
        { label: 'Bottom Left', value: 'bottom-left' },
        { label: 'Bottom Right', value: 'bottom-right' },
        { label: 'Top', value: 'top' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Bottom', value: 'bottom' },
        { label: 'Center', value: 'center' }
      ],
      value: 'center'
    },
    [ClockSettingIDs.CLOCK_POS_X]: {
      id: ClockSettingIDs.CLOCK_POS_X,
      type: SETTING_TYPES.NUMBER,
      label: 'Clock X Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
    },
    [ClockSettingIDs.CLOCK_POS_Y]: {
      id: ClockSettingIDs.CLOCK_POS_Y,
      type: SETTING_TYPES.NUMBER,
      label: 'Clock Y Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
    },

    [ClockSettingIDs.CLOCK_SHADOW]: {
      id: ClockSettingIDs.CLOCK_SHADOW,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Clock Shadow',
      value: true,
      description: 'Enable or disable shadow effect on the clock text.'
    },
    [ClockSettingIDs.CLOCK_SHADOW_OPACITY]: {
      id: ClockSettingIDs.CLOCK_SHADOW_OPACITY,
      type: SETTING_TYPES.RANGE,
      label: 'Clock Shadow Opacity',
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
      dependsOn: [
        {
          settingId: ClockSettingIDs.CLOCK_SHADOW,
        }
      ]
    },
    [ClockSettingIDs.CLOCK_SHADOW_DISTANCE]: {
      id: ClockSettingIDs.CLOCK_SHADOW_DISTANCE,
      type: SETTING_TYPES.RANGE,
      label: 'Clock Shadow Distance',
      value: 2,
      min: 0,
      max: 10,
      step: 0.1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.CLOCK_SHADOW,
        }
      ]
    },
    [ClockSettingIDs.CLOCK_SHADOW_BLUR]: {
      id: ClockSettingIDs.CLOCK_SHADOW_BLUR,
      type: SETTING_TYPES.RANGE,
      label: 'Clock Shadow Blur',
      value: 4,
      min: 0,
      max: 20,
      step: 0.1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.CLOCK_SHADOW,
        }
      ]
    },

    [ClockSettingIDs.SHOW_DATE]: {
      id: ClockSettingIDs.SHOW_DATE,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Show Date',
      value: true,
      description: 'Toggle date display on or off'
    },
    [ClockSettingIDs.SHOW_DAY_NAME]: {
      id: ClockSettingIDs.SHOW_DAY_NAME,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Show Day Name',
      value: false,
      description: 'Display the day of the week (e.g., Thursday)',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_FORMAT]: {
      id: ClockSettingIDs.DATE_FORMAT,
      type: SETTING_TYPES.SELECT,
      label: 'Date Format',
      value: 'MMMM DD YYYY',
      description: 'Choose the date format',
      options: [
        { label: 'December 26 2025', value: 'MMMM DD YYYY' },
        { label: 'December 26th 2025', value: 'MMMM DDth YYYY' },
        { label: '26 December 2025', value: 'DD MMMM YYYY' },
        { label: '2025.12.26', value: 'YYYY.MM.DD' },
        { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
        { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
        { label: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
        { label: 'MMM DD YYYY', value: 'MMM DD YYYY' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_SEPARATOR]: {
      id: ClockSettingIDs.DATE_SEPARATOR,
      type: SETTING_TYPES.SELECT,
      label: 'Date Separator',
      value: '-',
      description: 'Character used between date components (for numeric formats)',
      options: [
        { label: 'Dash (-)', value: '-' },
        { label: 'Dash Spaced ( - )', value: ' - ' },
        { label: 'Dot (.)', value: '.' },
        { label: 'Dot Spaced (. )', value: '. ' },
        { label: 'Slash (/)', value: '/' },
        { label: 'Slash Spaced ( / )', value: ' / ' },
        { label: 'Space', value: ' ' },
        { label: 'None', value: '' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.MONTH_FORMAT]: {
      id: ClockSettingIDs.MONTH_FORMAT,
      type: SETTING_TYPES.SELECT,
      label: 'Month Format',
      value: 'full',
      description: 'How to display the month',
      options: [
        { label: 'Numeric (12)', value: 'numeric' },
        { label: 'Abbreviated (Dec)', value: 'abbreviated' },
        { label: 'Full Name (December)', value: 'full' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_LAYOUT]: {
      id: ClockSettingIDs.DATE_LAYOUT,
      type: SETTING_TYPES.SELECT,
      label: 'Date Layout',
      value: 'inline',
      description: 'How the date is positioned relative to time',
      options: [
        { label: 'Inline', value: 'inline' },
        { label: 'Stacked Under Time', value: 'stacked' },
        { label: 'Compact (Single Line)', value: 'compact' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_POS_X]: {
      id: ClockSettingIDs.DATE_POS_X,
      type: SETTING_TYPES.NUMBER,
      label: 'Date X Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_POS_Y]: {
      id: ClockSettingIDs.DATE_POS_Y,
      type: SETTING_TYPES.NUMBER,
      label: 'Date Y Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_SIZE]: {
      id: ClockSettingIDs.DATE_SIZE,
      type: SETTING_TYPES.RANGE,
      label: 'Date Size Scale',
      value: 0.3,
      min: 0.1,
      max: 1,
      step: 0.05,
      description: 'Date text size relative to clock size',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DAY_SIZE]: {
      id: ClockSettingIDs.DAY_SIZE,
      type: SETTING_TYPES.RANGE,
      label: 'Day Name Size Scale',
      value: 0.25,
      min: 0.1,
      max: 1,
      step: 0.05,
      description: 'Day name size relative to clock size (e.g., FRIDAY)',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        },
        {
          settingId: ClockSettingIDs.SHOW_DAY_NAME,
        }
      ]
    },
    [ClockSettingIDs.DAY_DATE_GAP]: {
      id: ClockSettingIDs.DAY_DATE_GAP,
      type: SETTING_TYPES.RANGE,
      label: 'Day/Date Gap',
      value: 8,
      min: -500,
      max: 500,
      step: 1,
      description: 'Spacing between day name and date (in pixels). Negative values overlap.',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        },
        {
          settingId: ClockSettingIDs.SHOW_DAY_NAME,
        }
      ]
    },
    [ClockSettingIDs.DATE_OPACITY]: {
      id: ClockSettingIDs.DATE_OPACITY,
      type: SETTING_TYPES.RANGE,
      label: 'Date Opacity',
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },
    [ClockSettingIDs.DATE_ALIGNMENT]: {
      id: ClockSettingIDs.DATE_ALIGNMENT,
      type: SETTING_TYPES.SELECT,
      label: 'Date Alignment',
      value: 'center',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_DATE,
        }
      ]
    },

    [ClockSettingIDs.SHOW_CONSTELLATION]: {
      id: ClockSettingIDs.SHOW_CONSTELLATION,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Show Constellation',
      value: false,
      description: 'Display zodiac constellation based on current date'
    },
    [ClockSettingIDs.CONSTELLATION_DISPLAY_MODE]: {
      id: ClockSettingIDs.CONSTELLATION_DISPLAY_MODE,
      type: SETTING_TYPES.SELECT,
      label: 'Constellation Display',
      value: 'graphic_name',
      description: 'How to display the constellation',
      options: [
        { label: 'Decorative Only', value: 'decorative' },
        { label: 'Name Only', value: 'name' },
        { label: 'Graphic + Name', value: 'graphic_name' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_POSITION]: {
      id: ClockSettingIDs.CONSTELLATION_POSITION,
      type: SETTING_TYPES.SELECT,
      label: 'Constellation Position',
      value: 'right',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' }
      ],
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_SIZE]: {
      id: ClockSettingIDs.CONSTELLATION_SIZE,
      type: SETTING_TYPES.RANGE,
      label: 'Constellation Size',
      value: 0.5,
      min: 0.1,
      max: 2,
      step: 0.05,
      description: 'Scale of the constellation graphic',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_OPACITY]: {
      id: ClockSettingIDs.CONSTELLATION_OPACITY,
      type: SETTING_TYPES.RANGE,
      label: 'Constellation Opacity',
      value: 0.8,
      min: 0,
      max: 1,
      step: 0.01,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_ANIMATION]: {
      id: ClockSettingIDs.CONSTELLATION_ANIMATION,
      type: SETTING_TYPES.BOOLEAN,
      label: 'Subtle Animation',
      value: false,
      description: 'Enable subtle animation on constellation',
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_POS_X]: {
      id: ClockSettingIDs.CONSTELLATION_POS_X,
      type: SETTING_TYPES.NUMBER,
      label: 'Constellation X Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },
    [ClockSettingIDs.CONSTELLATION_POS_Y]: {
      id: ClockSettingIDs.CONSTELLATION_POS_Y,
      type: SETTING_TYPES.NUMBER,
      label: 'Constellation Y Offset',
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.SHOW_CONSTELLATION,
        }
      ]
    },

    [ClockSettingIDs.LAYER_ORDER]: {
      id: ClockSettingIDs.LAYER_ORDER,
      type: SETTING_TYPES.RANKED,
      label: 'Layer Order',
      value: ['time', 'date', 'constellation'],
      description: 'Drag to reorder the display layers',
      options: [
        { label: 'Time', value: 'time' },
        { label: 'Date', value: 'date' },
        { label: 'Constellation', value: 'constellation' }
      ]
    },

    [ClockSettingIDs.WIDGETS]: {
      id: ClockSettingIDs.WIDGETS,
      type: SETTING_TYPES.MULTISELECT,
      label: 'Additional Widgets',
      value: [],
      options: [
        { label: 'Stopwatch', value: ClockWidgets.STOPWATCH },
        { label: 'Countdown', value: ClockWidgets.COUNTDOWN }
      ]
    },
    [ClockSettingIDs.CLOCK_ORDERING]: {
      id: ClockSettingIDs.CLOCK_ORDERING,
      type: SETTING_TYPES.RANKED,
      label: 'Widget Ordering',
      value: ['clock', ClockWidgets.DATE, ClockWidgets.CONSTELLATION, ClockWidgets.STOPWATCH, ClockWidgets.COUNTDOWN],
      options: [
        { label: 'Clock', value: 'clock' },
        { label: 'Date', value: ClockWidgets.DATE },
        { label: 'Constellation', value: ClockWidgets.CONSTELLATION },
        { label: 'Stopwatch', value: ClockWidgets.STOPWATCH },
        { label: 'Countdown', value: ClockWidgets.COUNTDOWN }
      ],
    },
    [ClockSettingIDs.CLOCK_JUSTIFY_CONTENT]: {
      id: ClockSettingIDs.CLOCK_JUSTIFY_CONTENT,
      type: SETTING_TYPES.SELECT,
      label: 'Content Alignment',
      value: 'center',
      options: [
        { label: 'Start', value: 'flex-start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'flex-end' },
        { label: 'Space Between', value: 'space-between' }
      ]
    },
    [ClockSettingIDs.STOPWATCH_DEFAULT_TIME]: {
      id: ClockSettingIDs.STOPWATCH_DEFAULT_TIME,
      type: SETTING_TYPES.NUMBER,
      label: 'Stopwatch Default Time',
      value: 0,
      min: 0,
      max: 86400,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.WIDGETS,
          isValue: 'stopwatch'
        }
      ]
    },
    [ClockSettingIDs.COUNTDOWN_DEFAULT_TIME]: {
      id: ClockSettingIDs.COUNTDOWN_DEFAULT_TIME,
      type: SETTING_TYPES.NUMBER,
      label: 'Countdown Default Time',
      value: 60,
      min: 1,
      max: 86400,
      step: 1,
      dependsOn: [
        {
          settingId: ClockSettingIDs.WIDGETS,
          isValue: 'countdown'
        }
      ]
    },

    [ClockSettingIDs.ACTIVE_PRESET]: {
      id: ClockSettingIDs.ACTIVE_PRESET,
      type: SETTING_TYPES.SELECT,
      label: 'Quick Preset',
      value: 'custom',
      description: 'Apply a preset layout configuration',
      options: [
        { label: 'Custom', value: 'custom' },
        { label: 'Minimal Clock', value: 'minimal' },
        { label: 'Time + Full Date', value: 'time_date' },
        { label: 'Time + Date + Constellation', value: 'full' },
        { label: 'Night Mode', value: 'night' },
        { label: 'Stacked Vertical', value: 'stacked' }
      ]
    }
  }

  await DeskThing.initSettings(settings)
}