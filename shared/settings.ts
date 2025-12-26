
import { SettingsBoolean, SettingsColor, SettingsFile, SettingsMultiSelect, SettingsNumber, SettingsRange, SettingsRanked, SettingsSelect, SettingsString } from "@deskthing/types";

export enum ClockWidgets {
  STOPWATCH = 'stopwatch',
  COUNTDOWN = 'countdown',
  DATE = 'date',
  CONSTELLATION = 'constellation'
}

export enum ClockSettingIDs {
    // Color settings
    COLOR_OPTIONS = 'color_options',
    COLOR = 'color',
    GRADIENT_START = 'gradient_start',
    GRADIENT_END = 'gradient_end',
    
    // Font settings
    FONT = 'font',
    FONT_SELECTION = 'font_selection',
    FONT_WEIGHT = 'font_weight',
    
    // Background settings
    BACKGROUND = 'background',
    BACKGROUND_BLUR = 'background_blur',
    BACKGROUND_IMAGE = 'background_image',
    BACKGROUND_COLOR = 'background_color',
    BACKGROUND_BRIGHTNESS = 'background_dim',
    
    // Time display settings
    TIME_LAYOUT = 'time_layout',
    TIME_ALIGNMENT = 'time_alignment',
    MILITARY_TIME = 'military_time',
    SHOW_AMPM = 'show_ampm',
    DIGIT_SPACING = 'digit_spacing',
    LINE_SPACING = 'line_spacing',
    CLOCK_DIVIDER = 'clock_divider',
    LEADING_ZERO_HOURS = 'leading_zero_hours',
    
    // Clock positioning and sizing
    CLOCK_POSITION = 'clock_position',
    CLOCK_SIZE = 'clock_size',
    CLOCK_OPACITY = 'clock_transparency',
    CLOCK_POS_X = 'clock_pos_x',
    CLOCK_POS_Y = 'clock_pos_y',
    
    // Clock shadow settings
    CLOCK_SHADOW = 'clock_shadow',
    CLOCK_SHADOW_OPACITY = 'clock_shadow_opacity',
    CLOCK_SHADOW_DISTANCE = 'clock_shadow_distance',
    CLOCK_SHADOW_BLUR = 'clock_shadow_blur',
    
    // Date display settings
    SHOW_DATE = 'show_date',
    SHOW_DAY_NAME = 'show_day_name',
    DATE_FORMAT = 'date_format',
    DATE_SEPARATOR = 'date_separator',
    MONTH_FORMAT = 'month_format',
    DATE_LAYOUT = 'date_layout',
    DATE_POS_X = 'date_pos_x',
    DATE_POS_Y = 'date_pos_y',
    DATE_SIZE = 'date_size',
    DAY_SIZE = 'day_size',
    DAY_DATE_GAP = 'day_date_gap',
    DATE_OPACITY = 'date_opacity',
    DATE_ALIGNMENT = 'date_alignment',
    
    // Constellation settings
    SHOW_CONSTELLATION = 'show_constellation',
    CONSTELLATION_DISPLAY_MODE = 'constellation_display_mode',
    CONSTELLATION_POSITION = 'constellation_position',
    CONSTELLATION_SIZE = 'constellation_size',
    CONSTELLATION_OPACITY = 'constellation_opacity',
    CONSTELLATION_ANIMATION = 'constellation_animation',
    CONSTELLATION_POS_X = 'constellation_pos_x',
    CONSTELLATION_POS_Y = 'constellation_pos_y',
    
    // Layer control
    LAYER_ORDER = 'layer_order',
    
    // Widget settings (legacy support)
    WIDGETS = 'widgets',
    CLOCK_ORDERING = 'clock_ordering',
    CLOCK_JUSTIFY_CONTENT = 'clock_justify_content',
    
    // Timer widgets
    STOPWATCH_DEFAULT_TIME = 'stopwatch_default_time',
    COUNTDOWN_DEFAULT_TIME = 'countdown_default_time',
    
    // Presets
    ACTIVE_PRESET = 'active_preset',
}

export type ClockSettings = {
  // Color settings
  [ClockSettingIDs.COLOR_OPTIONS]: SettingsSelect & { id: ClockSettingIDs.COLOR_OPTIONS; value: 'auto' | 'custom'; options: { label: string; value: 'auto' | 'custom' | 'gradient' }[] };
  [ClockSettingIDs.COLOR]: SettingsColor & { id: ClockSettingIDs.COLOR };
  [ClockSettingIDs.GRADIENT_START]: SettingsColor & { id: ClockSettingIDs.GRADIENT_START };
  [ClockSettingIDs.GRADIENT_END]: SettingsColor & { id: ClockSettingIDs.GRADIENT_END };
  
  // Font settings
  [ClockSettingIDs.FONT]: SettingsFile & { id: ClockSettingIDs.FONT };
  [ClockSettingIDs.FONT_SELECTION]: SettingsSelect & { id: ClockSettingIDs.FONT_SELECTION };
  [ClockSettingIDs.FONT_WEIGHT]: SettingsSelect & { id: ClockSettingIDs.FONT_WEIGHT };
  
  // Background settings
  [ClockSettingIDs.BACKGROUND]: SettingsSelect & { id: ClockSettingIDs.BACKGROUND };
  [ClockSettingIDs.BACKGROUND_BLUR]: SettingsNumber & { id: ClockSettingIDs.BACKGROUND_BLUR };
  [ClockSettingIDs.BACKGROUND_IMAGE]: SettingsFile & { id: ClockSettingIDs.BACKGROUND_IMAGE };
  [ClockSettingIDs.BACKGROUND_COLOR]: SettingsColor & { id: ClockSettingIDs.BACKGROUND_COLOR };
  [ClockSettingIDs.BACKGROUND_BRIGHTNESS]: SettingsRange & { id: ClockSettingIDs.BACKGROUND_BRIGHTNESS };
  
  // Time display settings
  [ClockSettingIDs.TIME_LAYOUT]: SettingsSelect & { id: ClockSettingIDs.TIME_LAYOUT };
  [ClockSettingIDs.TIME_ALIGNMENT]: SettingsSelect & { id: ClockSettingIDs.TIME_ALIGNMENT };
  [ClockSettingIDs.MILITARY_TIME]: SettingsBoolean & { id: ClockSettingIDs.MILITARY_TIME };
  [ClockSettingIDs.SHOW_AMPM]: SettingsSelect & { id: ClockSettingIDs.SHOW_AMPM };
  [ClockSettingIDs.DIGIT_SPACING]: SettingsRange & { id: ClockSettingIDs.DIGIT_SPACING };
  [ClockSettingIDs.LINE_SPACING]: SettingsRange & { id: ClockSettingIDs.LINE_SPACING };
  [ClockSettingIDs.CLOCK_DIVIDER]: SettingsString & { id: ClockSettingIDs.CLOCK_DIVIDER };
  [ClockSettingIDs.LEADING_ZERO_HOURS]: SettingsBoolean & { id: ClockSettingIDs.LEADING_ZERO_HOURS };
  
  // Clock positioning and sizing
  [ClockSettingIDs.CLOCK_POSITION]: SettingsSelect & { id: ClockSettingIDs.CLOCK_POSITION };
  [ClockSettingIDs.CLOCK_SIZE]: SettingsNumber & { id: ClockSettingIDs.CLOCK_SIZE };
  [ClockSettingIDs.CLOCK_OPACITY]: SettingsRange & { id: ClockSettingIDs.CLOCK_OPACITY };
  [ClockSettingIDs.CLOCK_POS_X]: SettingsNumber & { id: ClockSettingIDs.CLOCK_POS_X };
  [ClockSettingIDs.CLOCK_POS_Y]: SettingsNumber & { id: ClockSettingIDs.CLOCK_POS_Y };
  
  // Clock shadow settings
  [ClockSettingIDs.CLOCK_SHADOW]: SettingsBoolean & { id: ClockSettingIDs.CLOCK_SHADOW };
  [ClockSettingIDs.CLOCK_SHADOW_OPACITY]: SettingsRange & { id: ClockSettingIDs.CLOCK_SHADOW_OPACITY };
  [ClockSettingIDs.CLOCK_SHADOW_DISTANCE]: SettingsRange & { id: ClockSettingIDs.CLOCK_SHADOW_DISTANCE };
  [ClockSettingIDs.CLOCK_SHADOW_BLUR]: SettingsRange & { id: ClockSettingIDs.CLOCK_SHADOW_BLUR };
  
  // Date display settings
  [ClockSettingIDs.SHOW_DATE]: SettingsBoolean & { id: ClockSettingIDs.SHOW_DATE };
  [ClockSettingIDs.SHOW_DAY_NAME]: SettingsBoolean & { id: ClockSettingIDs.SHOW_DAY_NAME };
  [ClockSettingIDs.DATE_FORMAT]: SettingsSelect & { id: ClockSettingIDs.DATE_FORMAT };
  [ClockSettingIDs.DATE_SEPARATOR]: SettingsSelect & { id: ClockSettingIDs.DATE_SEPARATOR };
  [ClockSettingIDs.MONTH_FORMAT]: SettingsSelect & { id: ClockSettingIDs.MONTH_FORMAT };
  [ClockSettingIDs.DATE_LAYOUT]: SettingsSelect & { id: ClockSettingIDs.DATE_LAYOUT };
  [ClockSettingIDs.DATE_POS_X]: SettingsNumber & { id: ClockSettingIDs.DATE_POS_X };
  [ClockSettingIDs.DATE_POS_Y]: SettingsNumber & { id: ClockSettingIDs.DATE_POS_Y };
  [ClockSettingIDs.DATE_SIZE]: SettingsRange & { id: ClockSettingIDs.DATE_SIZE };
  [ClockSettingIDs.DAY_SIZE]: SettingsRange & { id: ClockSettingIDs.DAY_SIZE };
  [ClockSettingIDs.DAY_DATE_GAP]: SettingsRange & { id: ClockSettingIDs.DAY_DATE_GAP };
  [ClockSettingIDs.DATE_OPACITY]: SettingsRange & { id: ClockSettingIDs.DATE_OPACITY };
  [ClockSettingIDs.DATE_ALIGNMENT]: SettingsSelect & { id: ClockSettingIDs.DATE_ALIGNMENT };
  
  // Constellation settings
  [ClockSettingIDs.SHOW_CONSTELLATION]: SettingsBoolean & { id: ClockSettingIDs.SHOW_CONSTELLATION };
  [ClockSettingIDs.CONSTELLATION_DISPLAY_MODE]: SettingsSelect & { id: ClockSettingIDs.CONSTELLATION_DISPLAY_MODE };
  [ClockSettingIDs.CONSTELLATION_POSITION]: SettingsSelect & { id: ClockSettingIDs.CONSTELLATION_POSITION };
  [ClockSettingIDs.CONSTELLATION_SIZE]: SettingsRange & { id: ClockSettingIDs.CONSTELLATION_SIZE };
  [ClockSettingIDs.CONSTELLATION_OPACITY]: SettingsRange & { id: ClockSettingIDs.CONSTELLATION_OPACITY };
  [ClockSettingIDs.CONSTELLATION_ANIMATION]: SettingsBoolean & { id: ClockSettingIDs.CONSTELLATION_ANIMATION };
  [ClockSettingIDs.CONSTELLATION_POS_X]: SettingsNumber & { id: ClockSettingIDs.CONSTELLATION_POS_X };
  [ClockSettingIDs.CONSTELLATION_POS_Y]: SettingsNumber & { id: ClockSettingIDs.CONSTELLATION_POS_Y };
  
  // Layer control
  [ClockSettingIDs.LAYER_ORDER]: SettingsRanked & { id: ClockSettingIDs.LAYER_ORDER };
  
  // Widget settings (legacy support)
  [ClockSettingIDs.WIDGETS]: SettingsMultiSelect & { id: ClockSettingIDs.WIDGETS };
  [ClockSettingIDs.CLOCK_ORDERING]: SettingsRanked & { id: ClockSettingIDs.CLOCK_ORDERING };
  [ClockSettingIDs.CLOCK_JUSTIFY_CONTENT]: SettingsSelect & { id: ClockSettingIDs.CLOCK_JUSTIFY_CONTENT };
  
  // Timer widgets
  [ClockSettingIDs.STOPWATCH_DEFAULT_TIME]: SettingsNumber & { id: ClockSettingIDs.STOPWATCH_DEFAULT_TIME };
  [ClockSettingIDs.COUNTDOWN_DEFAULT_TIME]: SettingsNumber & { id: ClockSettingIDs.COUNTDOWN_DEFAULT_TIME };
  
  // Presets
  [ClockSettingIDs.ACTIVE_PRESET]: SettingsSelect & { id: ClockSettingIDs.ACTIVE_PRESET };
};

export type CondensedClockSettings<K extends ClockSettingIDs = ClockSettingIDs> = {
  [P in K]: ClockSettings[P]['value']
}