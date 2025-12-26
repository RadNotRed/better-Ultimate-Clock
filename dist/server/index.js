
// ESM shims for Node.js built-in modules
import { createRequire as DeskThingCreateRequire } from 'module';
import { fileURLToPath as DeskThingFileURLToPath } from 'url';
import { dirname as DeskThingDirname } from 'node:path';

const require = DeskThingCreateRequire(import.meta.url);
const __filename = DeskThingFileURLToPath(import.meta.url);
const __dirname = DeskThingDirname(__filename);


// node_modules/@deskthing/server/dist/index.js
import * as fs from "fs";
import * as path from "path";
import { Worker } from "worker_threads";
import { parentPort } from "worker_threads";
var SETTING_TYPES;
(function(SETTING_TYPES22) {
  SETTING_TYPES22["BOOLEAN"] = "boolean";
  SETTING_TYPES22["NUMBER"] = "number";
  SETTING_TYPES22["STRING"] = "string";
  SETTING_TYPES22["RANGE"] = "range";
  SETTING_TYPES22["SELECT"] = "select";
  SETTING_TYPES22["MULTISELECT"] = "multiselect";
  SETTING_TYPES22["LIST"] = "list";
  SETTING_TYPES22["RANKED"] = "ranked";
  SETTING_TYPES22["COLOR"] = "color";
  SETTING_TYPES22["FILE"] = "file";
})(SETTING_TYPES || (SETTING_TYPES = {}));
var STEP_TYPES;
(function(STEP_TYPES2) {
  STEP_TYPES2["ACTION"] = "action";
  STEP_TYPES2["SHORTCUT"] = "shortcut";
  STEP_TYPES2["SETTING"] = "setting";
  STEP_TYPES2["TASK"] = "task";
  STEP_TYPES2["EXTERNAL"] = "external";
  STEP_TYPES2["STEP"] = "step";
})(STEP_TYPES || (STEP_TYPES = {}));
var APP_REQUESTS;
(function(APP_REQUESTS2) {
  APP_REQUESTS2["DEFAULT"] = "default";
  APP_REQUESTS2["GET"] = "get";
  APP_REQUESTS2["SET"] = "set";
  APP_REQUESTS2["DELETE"] = "delete";
  APP_REQUESTS2["OPEN"] = "open";
  APP_REQUESTS2["SEND"] = "send";
  APP_REQUESTS2["TOAPP"] = "toApp";
  APP_REQUESTS2["LOG"] = "log";
  APP_REQUESTS2["KEY"] = "key";
  APP_REQUESTS2["ACTION"] = "action";
  APP_REQUESTS2["TASK"] = "task";
  APP_REQUESTS2["STEP"] = "step";
  APP_REQUESTS2["SONG"] = "song";
})(APP_REQUESTS || (APP_REQUESTS = {}));
var DESKTHING_DEVICE;
(function(DESKTHING_DEVICE22) {
  DESKTHING_DEVICE22["GLOBAL_SETTINGS"] = "global_settings";
  DESKTHING_DEVICE22["MAPPINGS"] = "button_mappings";
  DESKTHING_DEVICE22["CONFIG"] = "configuration";
  DESKTHING_DEVICE22["GET"] = "get";
  DESKTHING_DEVICE22["ERROR"] = "error";
  DESKTHING_DEVICE22["PONG"] = "pong";
  DESKTHING_DEVICE22["PING"] = "ping";
  DESKTHING_DEVICE22["SETTINGS"] = "settings";
  DESKTHING_DEVICE22["APPS"] = "apps";
  DESKTHING_DEVICE22["TIME"] = "time";
  DESKTHING_DEVICE22["HEARTBEAT"] = "heartbeat";
  DESKTHING_DEVICE22["META_DATA"] = "meta_data";
  DESKTHING_DEVICE22["MUSIC"] = "music";
  DESKTHING_DEVICE22["ICON"] = "icon";
})(DESKTHING_DEVICE || (DESKTHING_DEVICE = {}));
var DESKTHING_EVENTS;
(function(DESKTHING_EVENTS22) {
  DESKTHING_EVENTS22["MESSAGE"] = "message";
  DESKTHING_EVENTS22["DATA"] = "data";
  DESKTHING_EVENTS22["APPDATA"] = "appdata";
  DESKTHING_EVENTS22["CALLBACK_DATA"] = "callback-data";
  DESKTHING_EVENTS22["START"] = "start";
  DESKTHING_EVENTS22["STOP"] = "stop";
  DESKTHING_EVENTS22["PURGE"] = "purge";
  DESKTHING_EVENTS22["INPUT"] = "input";
  DESKTHING_EVENTS22["ACTION"] = "action";
  DESKTHING_EVENTS22["CONFIG"] = "config";
  DESKTHING_EVENTS22["SETTINGS"] = "settings";
  DESKTHING_EVENTS22["TASKS"] = "tasks";
  DESKTHING_EVENTS22["CLIENT_STATUS"] = "client_status";
})(DESKTHING_EVENTS || (DESKTHING_EVENTS = {}));
var EventFlavor;
(function(EventFlavor2) {
  EventFlavor2[EventFlavor2["KeyUp"] = 0] = "KeyUp";
  EventFlavor2[EventFlavor2["KeyDown"] = 1] = "KeyDown";
  EventFlavor2[EventFlavor2["ScrollUp"] = 2] = "ScrollUp";
  EventFlavor2[EventFlavor2["ScrollDown"] = 3] = "ScrollDown";
  EventFlavor2[EventFlavor2["ScrollLeft"] = 4] = "ScrollLeft";
  EventFlavor2[EventFlavor2["ScrollRight"] = 5] = "ScrollRight";
  EventFlavor2[EventFlavor2["SwipeUp"] = 6] = "SwipeUp";
  EventFlavor2[EventFlavor2["SwipeDown"] = 7] = "SwipeDown";
  EventFlavor2[EventFlavor2["SwipeLeft"] = 8] = "SwipeLeft";
  EventFlavor2[EventFlavor2["SwipeRight"] = 9] = "SwipeRight";
  EventFlavor2[EventFlavor2["PressShort"] = 10] = "PressShort";
  EventFlavor2[EventFlavor2["PressLong"] = 11] = "PressLong";
})(EventFlavor || (EventFlavor = {}));
var EventMode;
(function(EventMode3) {
  EventMode3[EventMode3["KeyUp"] = 0] = "KeyUp";
  EventMode3[EventMode3["KeyDown"] = 1] = "KeyDown";
  EventMode3[EventMode3["ScrollUp"] = 2] = "ScrollUp";
  EventMode3[EventMode3["ScrollDown"] = 3] = "ScrollDown";
  EventMode3[EventMode3["ScrollLeft"] = 4] = "ScrollLeft";
  EventMode3[EventMode3["ScrollRight"] = 5] = "ScrollRight";
  EventMode3[EventMode3["SwipeUp"] = 6] = "SwipeUp";
  EventMode3[EventMode3["SwipeDown"] = 7] = "SwipeDown";
  EventMode3[EventMode3["SwipeLeft"] = 8] = "SwipeLeft";
  EventMode3[EventMode3["SwipeRight"] = 9] = "SwipeRight";
  EventMode3[EventMode3["PressShort"] = 10] = "PressShort";
  EventMode3[EventMode3["PressLong"] = 11] = "PressLong";
})(EventMode || (EventMode = {}));
var isValidAction = (action) => {
  if (!action || typeof action !== "object") throw new Error("Action must be an object");
  const actionObj = action;
  if (typeof actionObj.id !== "string") throw new Error("Action id must be a string");
  if (typeof actionObj.version !== "string") {
    throw new Error("Action version must be a string");
  }
  if (typeof actionObj.enabled !== "boolean") {
    throw new Error("Action enabled must be a boolean");
  }
  if (typeof actionObj.name !== "string") {
    throw new Error("Action name must be a string");
  }
  if (typeof actionObj.version_code !== "number") {
    throw new Error("Action version_code must be a number");
  }
  if (actionObj.description !== void 0 && typeof actionObj.description !== "string") {
    throw new Error("Action description must be a string");
  }
  if (actionObj.value !== void 0 && typeof actionObj.value !== "string") {
    throw new Error("Action value must be a string");
  }
  if (actionObj.value_options !== void 0 && !Array.isArray(actionObj.value_options)) {
    throw new Error("Action value_options must be an array of strings");
  }
  if (actionObj.value_instructions !== void 0 && typeof actionObj.value_instructions !== "string") {
    throw new Error("Action value_instructions must be a string");
  }
  if (actionObj.icon !== void 0 && typeof actionObj.icon !== "string") {
    throw new Error("Action icon must be a string");
  }
  if (actionObj.tag !== void 0 && !["nav", "media", "basic"].includes(actionObj.tag)) {
    throw new Error("Action tag must be one of: nav, media, basic");
  }
};
var isValidActionReference = (action) => {
  if (typeof action !== "object" || !action) {
    throw new Error("validateActionReference: action is not a valid object");
  }
  const actionRef = action;
  if (typeof actionRef.id !== "string") {
    throw new Error("validateActionReference: id is not a valid string");
  }
  if (typeof actionRef.enabled !== "boolean") {
    action.enabled = true;
    console.warn(
      "validateActionReference: enabled was not set to a boolean value"
    );
  }
};
function isValidTask(task) {
  if (!task || typeof task !== "object")
    throw new Error("Task must be an object");
  const t = task;
  if (!t.id) {
    throw new Error("[ValidateTask] Tasks must have an ID");
  }
  if (!t.source) {
    throw new Error(`[ValidateTask] Task ${t.id} does not have a source`);
  }
  if (!t.version) {
    throw new Error(
      `[ValidateTask] Task ${t.id} from ${t.source} must have a specified version`
    );
  }
  if (!t.steps || typeof t.steps !== "object" || Object.values(t.steps).length === 0) {
    throw new Error(
      `[ValidateTask] Task ${t.id} from ${t.source} must have at least one specified step`
    );
  }
  for (const step of Object.values(t.steps)) {
    isValidStep(step);
  }
}
function isValidStep(step) {
  if (!step || typeof step !== "object")
    throw new Error("Step must be an object");
  const s = step;
  if (!s.id) {
    throw new Error("[ValidateStep] Step must have an ID");
  }
  if (!s.type) {
    throw new Error(`[ValidateStep] Step ${s.id} does not have a type`);
  }
  switch (s.type) {
    case STEP_TYPES.ACTION:
      isValidTaskAction(s);
      break;
    case STEP_TYPES.SHORTCUT:
      isValidTaskShortcut(s);
      break;
    case STEP_TYPES.SETTING:
      isValidTaskSetting(s);
      break;
    case STEP_TYPES.TASK:
      isValidTaskTask(s);
      break;
    case STEP_TYPES.EXTERNAL:
      isValidTaskExternal(s);
      break;
    case STEP_TYPES.STEP:
      isValidTaskStep(s);
      break;
    default:
      throw new Error(`[ValidateStep] Step ${s.id} has invalid type ${s.type}`);
  }
}
function validateStepBase(step, expectedType) {
  if (!step || typeof step !== "object")
    throw new Error("Step must be an object");
  const s = step;
  if (!s.type) {
    throw new Error("[ValidateStep] Step must have a type");
  }
  if (s.type !== expectedType) {
    throw new Error(`[ValidateStep] Step ${s.id} is not a ${expectedType}`);
  }
}
function isValidTaskAction(step) {
  validateStepBase(step, STEP_TYPES.ACTION);
  const s = step;
  if (!s.action) {
    throw new Error(
      `[ValidateTaskAction] Step ${s.id} does not have an action`
    );
  }
  const action = s.action;
  if (typeof action === "string") {
    return;
  }
  try {
    if (typeof action === "object" && "version" in action) {
      isValidAction(action);
    } else {
      isValidActionReference(action);
    }
  } catch (error) {
    console.error(`There was an error validating the task action`, error);
  }
}
function isValidTaskShortcut(step) {
  validateStepBase(step, STEP_TYPES.SHORTCUT);
  const s = step;
  if (!s.destination) {
    throw new Error(
      `[ValidateTaskShortcut] Step ${s.id} does not have a destination`
    );
  }
}
function isValidTaskSetting(step) {
  validateStepBase(step, STEP_TYPES.SETTING);
  const s = step;
  if (!s.setting) {
    throw new Error(
      `[ValidateTaskSetting] Step ${s.id} does not have a setting`
    );
  }
  if (!("type" in s.setting)) {
    if (!s.setting.id) throw new Error(`[ValidateTaskSetting] Setting reference does not have an id`);
    return;
  }
  const validTypes = Object.values(SETTING_TYPES);
  if (!s.setting.type || !validTypes.includes(s.setting.type)) {
    throw new Error(
      `[ValidateTaskSetting] Step ${s.id} has invalid setting type`
    );
  }
  if (!s.setting.label) {
    throw new Error(
      `[ValidateTaskSetting] Step ${s.id} setting does not have a label`
    );
  }
}
function isValidTaskTask(step) {
  validateStepBase(step, STEP_TYPES.TASK);
  const s = step;
  if (!s.taskReference?.id) {
    throw new Error(`[ValidateTaskTask] Step ${s.id} does not have a taskId`);
  }
}
function isValidTaskExternal(step) {
  validateStepBase(step, STEP_TYPES.EXTERNAL);
}
function isValidTaskStep(step) {
  validateStepBase(step, STEP_TYPES.STEP);
}
var isValidSettings = (setting) => {
  if (!setting) {
    throw new Error("[isValidSetting] Setting must be a valid object");
  }
  if (typeof setting !== "object") {
    throw new Error("[isValidSetting] Setting must be an object");
  }
  if ("type" in setting && typeof setting.type !== "string") {
    throw new Error("[isValidSetting] Setting type must be a string");
  }
  if ("label" in setting && typeof setting.label !== "string") {
    throw new Error("[isValidSetting] Setting label must be a string");
  }
  const typedSetting = setting;
  switch (typedSetting.type) {
    case SETTING_TYPES.NUMBER:
      if (typeof typedSetting.value !== "number") throw new Error("[isValidSetting] Number setting value must be a number");
      if (typedSetting.min && typeof typedSetting.min !== "number") throw new Error("[isValidSetting] Number setting min must be a number");
      if (typedSetting.max && typeof typedSetting.max !== "number") throw new Error("[isValidSetting] Number setting max must be a number");
      if (typedSetting.step && typeof typedSetting.step !== "number") throw new Error("[isValidSetting] Number setting max must be a number");
      break;
    case SETTING_TYPES.BOOLEAN:
      if (typeof typedSetting.value !== "boolean") throw new Error("[isValidSetting] Boolean setting value must be a boolean");
      break;
    case SETTING_TYPES.STRING:
      if (typeof typedSetting.value !== "string") throw new Error("[isValidSetting] String setting value must be a string");
      if (typedSetting.maxLength && typeof typedSetting.maxLength !== "number") throw new Error("[isValidSetting] String setting maxLength must be a number");
      break;
    case SETTING_TYPES.SELECT:
    case SETTING_TYPES.MULTISELECT:
    case SETTING_TYPES.RANKED:
    case SETTING_TYPES.LIST:
      if (!Array.isArray(typedSetting.options)) throw new Error(`[isValidSetting] ${typedSetting.type} setting must have options array`);
      typedSetting.options.forEach((option) => {
        if (typeof option.label !== "string") throw new Error("[isValidSetting] Option label must be a string");
        if (typeof option.value !== "string") throw new Error("[isValidSetting] Option value must be a string");
      });
      break;
    case SETTING_TYPES.RANGE:
      if (typeof typedSetting.value !== "number") throw new Error("[isValidSetting] Range setting value must be a number");
      if (typedSetting.min && typeof typedSetting.min !== "number") throw new Error("[isValidSetting] Range setting min must be a number");
      if (typedSetting.max && typeof typedSetting.max !== "number") throw new Error("[isValidSetting] Range setting max must be a number");
      if (typedSetting.step && typeof typedSetting.step !== "number") throw new Error("[isValidSetting] Range setting max must be a number");
      break;
    case SETTING_TYPES.COLOR:
      if (typedSetting.value && typeof typedSetting.value !== "string") throw new Error("[isValidSetting] Color setting value must be a string");
      break;
    case SETTING_TYPES.FILE:
      break;
    // nothing is needed technically speaking
    default:
      throw new Error(`[isValidSetting] Invalid setting type: ${JSON.stringify(typedSetting)}`);
  }
};
var sanitizeSettings = (setting) => {
  isValidSettings(setting);
  const commonSettings = {
    ...setting,
    disabled: setting.disabled,
    id: setting.id,
    label: setting.label || setting.id || "",
    value: setting.value,
    source: setting.source,
    description: setting.description || "No Description"
  };
  switch (setting.type) {
    case SETTING_TYPES.SELECT:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.SELECT,
        value: setting.value,
        label: setting.label,
        description: setting.description || "",
        placeholder: setting.placeholder,
        options: setting.options
      };
      break;
    case SETTING_TYPES.MULTISELECT:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.MULTISELECT,
        value: setting.value,
        label: setting.label,
        description: setting.description || "",
        placeholder: setting.placeholder,
        options: setting.options
      };
      break;
    case SETTING_TYPES.NUMBER:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.NUMBER,
        value: setting.value,
        label: setting.label,
        min: setting.min,
        max: setting.max,
        description: setting.description || ""
      };
      break;
    case SETTING_TYPES.BOOLEAN:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.BOOLEAN,
        value: setting.value,
        description: setting.description || "",
        label: setting.label
      };
      break;
    case SETTING_TYPES.STRING:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.STRING,
        description: setting.description || "",
        value: setting.value,
        label: setting.label
      };
      break;
    case SETTING_TYPES.RANGE:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.RANGE,
        value: setting.value,
        label: setting.label,
        min: setting.min,
        max: setting.max,
        step: setting.step || 1,
        description: setting.description || ""
      };
      break;
    case SETTING_TYPES.RANKED:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.RANKED,
        value: setting.value,
        label: setting.label,
        description: setting.description || "",
        options: setting.options
      };
      break;
    case SETTING_TYPES.LIST:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.LIST,
        value: setting.value,
        label: setting.label,
        unique: setting.unique,
        orderable: setting.orderable,
        placeholder: setting.placeholder,
        maxValues: setting.maxValues,
        description: setting.description || "",
        options: setting.options || []
      };
      break;
    case SETTING_TYPES.COLOR:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.COLOR,
        value: setting.value,
        label: setting.label,
        description: setting.description || ""
      };
      break;
    case SETTING_TYPES.FILE:
      setting = {
        ...commonSettings,
        type: SETTING_TYPES.FILE,
        value: setting.value,
        label: setting.label,
        fileTypes: setting.fileTypes || [],
        placeholder: setting.placeholder || ""
      };
      break;
    default:
      throw new Error(`[isValidSetting] Unknown setting type: ${setting}`);
  }
  return setting;
};
var settingHasOptions = (setting) => {
  if (!setting) throw new Error("[settingHasOptions] Setting must be defined");
  if (!setting.type) throw new Error("[settingHasOptions] Setting type must be defined");
  return setting.type === SETTING_TYPES.RANKED || setting.type === SETTING_TYPES.LIST || setting.type === SETTING_TYPES.SELECT || setting.type === SETTING_TYPES.MULTISELECT;
};
var isValidAppDataInterface = (app) => {
  if (!app) {
    throw new Error("App data interface is undefined");
  }
  if (typeof app !== "object") {
    throw new Error("App data interface is not an object");
  }
  if (!app.version) {
    throw new Error("App data interface version is undefined");
  }
  if (app.settings) {
    isValidAppSettings(app.settings);
  }
  if (app.tasks) {
    Object.values(app.tasks).forEach((task) => {
      isValidTask(task);
    });
  }
  if (app.actions) {
    Object.values(app.actions).forEach((action) => {
      isValidAction2(action);
    });
  }
  if (app.keys) {
    Object.values(app.keys).forEach((key) => {
      isValidKey(key);
    });
  }
};
var isValidAction2 = (action) => {
  if (!action || typeof action !== "object") throw new Error("Action must be an object");
  const actionObj = action;
  if (typeof actionObj.id !== "string") throw new Error("Action id must be a string");
  if (typeof actionObj.source !== "string") throw new Error("Action source must be a string");
  if (typeof actionObj.version !== "string") {
    actionObj.version = "0.0.0";
    console.warn("WARNING_MISSING_ACTION_VERSION");
  }
  if (typeof actionObj.enabled !== "boolean") {
    actionObj.enabled = true;
    console.warn("WARNING_MISSING_ACTION_ENABLED");
  }
};
var isValidKey = (key) => {
  if (!key || typeof key !== "object") throw new Error("Key must be an object");
  const keyObj = key;
  if (typeof keyObj.id !== "string") throw new Error("Key id must be a string");
  if (typeof keyObj.source !== "string")
    throw new Error("Key source must be a string");
  if (typeof keyObj.version !== "string")
    throw new Error("Key version must be a string");
  if (typeof keyObj.enabled !== "boolean")
    throw new Error("Key enabled must be a boolean");
  if (!Array.isArray(keyObj.modes))
    throw new Error("Key modes must be an array");
  if (!keyObj.modes.every((Mode) => Object.values(EventMode).includes(Mode))) {
    throw new Error("Key modes must all be valid EventMode values");
  }
};
var isValidAppSettings = (appSettings) => {
  if (typeof appSettings !== "object") {
    throw new Error("[sanitizeAppSettings] App settings must be an object");
  }
  Object.entries(appSettings).forEach(([key, setting]) => {
    if (typeof setting !== "object") {
      throw new Error("[sanitizeAppSettings] App settings must be an object");
    }
    try {
      isValidSettings(setting);
    } catch (error) {
      console.error(`Failed to validate settings!`, error);
    }
  });
};
var DeskThingClass = class _DeskThingClass {
  constructor() {
    this.manifest = null;
    this.imageUrls = {};
    this.Listeners = {};
    this.sysListeners = [];
    this.backgroundTasks = [];
    this.stopRequested = false;
    this.fetch = async (requestData, listenData, callback, timeoutMs = 500) => {
      if (!requestData.type) {
        console.warn(`[fetch]: Request Data doesn't have a "type" field`);
        return void 0;
      }
      this.sendToServer(requestData);
      if (!listenData) return void 0;
      try {
        const dataPromise = new Promise(
          (resolve2) => {
            let timeoutId = null;
            let isResolved = false;
            const handleResolve = (data) => {
              if (isResolved) return;
              isResolved = true;
              if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
              }
              resolve2(data);
            };
            timeoutId = setTimeout(() => {
              console.debug(`[fetch]: Request timed out after ${timeoutMs}ms for type: ${listenData.type}`);
              handleResolve(void 0);
            }, timeoutMs);
            try {
              this.once(
                listenData.type,
                (data) => handleResolve(data),
                listenData.request
              ).catch((error) => {
                console.warn(`[fetch]: Error during fetch listener! ${error}`);
                handleResolve(void 0);
              });
            } catch (error) {
              console.warn(`[fetch]: Error during fetch listener setup! ${error}`);
              handleResolve(void 0);
            }
          }
        );
        const response = await dataPromise;
        if (callback) {
          try {
            await callback(response);
          } catch (error) {
            console.warn(
              `[fetch]: Error during fetch callback! ${error instanceof Error ? error.message : error}`
            );
          }
        }
        return response;
      } catch (error) {
        console.warn(
          `[fetch]: Error during deskthing fetch! ${error instanceof Error ? error.message : error}`
        );
        if (callback) {
          try {
            await callback(void 0);
          } catch (error2) {
            console.warn(
              `[fetch]: Error during errored callback! ${error2 instanceof Error ? error2.message : error2}`
            );
          }
        }
        return void 0;
      }
    };
    this.setSettings = async (settings) => {
      const existingSettings = await this.getSettings() || {};
      if (!settings || typeof settings !== "object") {
        throw new Error("Settings must be a valid object");
      }
      Object.entries(settings).forEach(([id, setting]) => {
        if (!setting.type || !setting.label) {
          throw new Error(`Setting ${id} must have a type and label`);
        }
        try {
          existingSettings[id] = { ...sanitizeSettings(setting), id };
        } catch (error) {
          if (error instanceof Error) {
            console.error(
              `Error sanitizing setting with label "${setting.label}": ${error.message}`
            );
          } else {
            console.error(
              `Error sanitizing setting with label "${setting.label}": ${error}`
            );
          }
        }
      });
      this.saveSettings(existingSettings);
    };
    this.setSettingOptions = async (settingId, options) => {
      const existingSettings = await this.getSettings();
      if (!existingSettings?.[settingId]) {
        console.error(`Setting with id ${settingId} not found`);
        return;
      }
      try {
        settingHasOptions(existingSettings[settingId]);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Error setting option of setting: ${settingId}`, error.message);
        }
        return;
      }
      existingSettings[settingId].options = options;
      this.saveSettings(existingSettings);
    };
    this.tasks = {
      /**
       * Adds a new task.
       * @throws {Error} - when the data is invalid.
       * @param taskData - The data for the new task.
       * @example
       * deskthing.tasks.add({
       *    id: 'task-id',
       *    version: '1.0.0',
       *    available: true,
       *    completed: false,
       *    label: 'Task Name',
       *    started: false,
       *    currentStep: 'step-1',
       *    description: 'Task Description',
       *    steps: {
       *      'step-1': {
       *        id: 'step-1',
       *        type: STEP_TYPES.STEP,
       *        completed: false,
       *        label: 'Step 1',
       *        instructions: 'Step 1 instructions'
       *      }
       *    }
       * });
       */
      add: (taskData) => {
        try {
          const newTask = {
            ...taskData,
            source: this.manifest?.id || "unknown"
          };
          isValidTask(newTask);
          this.sendSocketData(APP_REQUESTS.TASK, { task: newTask }, "add");
        } catch (error) {
          if (error instanceof Error) {
            console.warn("Invalid task data:" + error.message);
          }
          throw error;
        }
      },
      /**
       * Initializes the tasks
       * @throws {Error} - when the data is invalid.
       */
      initTasks: async (taskData) => {
        try {
          const newTasks = Object.entries(taskData).reduce(
            (validatedTasks, [id, task]) => {
              try {
                const newTask = {
                  ...task,
                  id,
                  source: this.manifest?.id || "unknown",
                  steps: Object.fromEntries(Object.entries(task.steps).map(([stepId, step]) => [
                    stepId,
                    {
                      ...step,
                      id: step.id || stepId,
                      source: step.source || this.manifest?.id || "unknown"
                    }
                  ]))
                };
                isValidTask(newTask);
                return { ...validatedTasks, [newTask.id]: newTask };
              } catch (error) {
                console.warn(
                  `Task ${task.label || task.id} failed to be verified: ` + (error instanceof Error && error.message)
                );
                return validatedTasks;
              }
            },
            {}
          );
          this.sendSocketData(APP_REQUESTS.TASK, { tasks: newTasks }, "init");
        } catch (error) {
          console.warn(
            "Invalid task data:" + (error instanceof Error && error.message)
          );
        }
      },
      /**
       * Updates a specific step within a task
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to update
       * @param updates - The partial step data to update
       * @example
       * deskthing.tasks.update('task-id', 'step-1', {
       *   completed: true,
       *   label: 'Updated Step Label',
       *   instructions: 'New instructions'
       * });
       */
      update: (taskId, task) => {
        const validStepFields = [
          "id",
          "label",
          "completed",
          "currentStep",
          "started",
          "source",
          "version",
          "available",
          "description",
          "steps"
        ];
        const sanitizedUpdates = Object.fromEntries(
          Object.entries(task).filter(
            ([key]) => validStepFields.includes(key)
          )
        );
        this.sendSocketData(
          APP_REQUESTS.TASK,
          { taskId, task: { ...sanitizedUpdates, id: taskId } },
          "update"
        );
      },
      /**
       * Deletes a task by its ID
       * @param taskId - The ID of the task to delete
       * @example
       * deskthing.tasks.delete('task-id');
       */
      delete: (taskId) => {
        this.sendSocketData(APP_REQUESTS.TASK, { taskId }, "delete");
      },
      /**
       * Marks a task as completed
       * @param taskId - The ID of the task to complete
       * @example
       * deskthing.tasks.complete('task-id');
       */
      complete: (taskId) => {
        this.sendSocketData(APP_REQUESTS.TASK, { taskId }, "complete");
      },
      /**
       * Restarts a task, resetting its progress
       * @param taskId - The ID of the task to restart
       * @example
       * deskthing.tasks.restart('task-id');
       */
      restart: (taskId) => {
        this.sendSocketData(APP_REQUESTS.TASK, { taskId }, "restart");
      },
      /**
       * Marks a task as started
       * @param taskId - The ID of the task to start
       * @example
       * deskthing.tasks.start('task-id');
       */
      start: (taskId) => {
        this.sendSocketData(APP_REQUESTS.TASK, { taskId }, "start");
      },
      /**
       * Ends a task without completing it
       * @param taskId - The ID of the task to end
       * @example
       * deskthing.tasks.end('task-id');
       */
      end: (taskId) => {
        this.sendSocketData(APP_REQUESTS.TASK, { taskId }, "end");
      },
      /**
       * Retrieves task information
       * @param taskId - Optional ID of the specific task to get. If omitted, returns all tasks
       * @example
       * // Get all tasks
       * deskthing.tasks.get();
       *
       * // Later, listen for tasks
       * deskthing.on()
       */
      get: () => {
        this.sendSocketData(APP_REQUESTS.TASK, {}, "get");
      }
    };
    this.steps = {
      /**
       * Adds a new step to the specified task.
       * @param taskId - The unique identifier of the task to which the step belongs.
       * @param stepData - The data for the new step.
       * @example
       * // Basic step
       * deskthing.steps.add('task-id', {
       *    id: 'step-id',
       *    type: STEP_TYPES.STEP,
       *    label: 'Step Name',
       *    instructions: 'Step Description',
       *    completed: false,
       *    debug: false,
       *    strict: false,
       *    parentId: 'parent-task-id'
       * });
       *
       * // Action step
       * deskthing.steps.add('task-id', {
       *    id: 'action-step',
       *    type: STEP_TYPES.ACTION,
       *    label: 'Run Action',
       *    instructions: 'Execute this action',
       *    completed: false,
       *    action: {
       *      id: 'action-id',
       *      value: 'example-value',
       *      enabled: true,
       *      source: 'system'
       *    } as ActionReference
       * });
       *
       * // External step
       * deskthing.steps.add('task-id', {
       *    id: 'external-step',
       *    type: STEP_TYPES.EXTERNAL,
       *    label: 'External Task',
       *    instructions: 'Complete this external task',
       *    completed: false,
       *    url: 'https://example.com'
       * });
       *
       * // Task step
       * deskthing.steps.add('task-id', {
       *    id: 'task-step',
       *    type: STEP_TYPES.TASK,
       *    label: 'Complete Task',
       *    instructions: 'Complete the referenced task',
       *    completed: false,
       *    taskId: 'referenced-task-id'
       * });
       *
       * // Shortcut step
       * deskthing.steps.add('task-id', {
       *    id: 'shortcut-step',
       *    type: STEP_TYPES.SHORTCUT,
       *    label: 'Navigate',
       *    instructions: 'Go to location',
       *    completed: false,
       *    destination: 'settings/general'
       * });
       *
       * // Setting step
       * deskthing.steps.add('task-id', {
       *    id: 'setting-step',
       *    type: STEP_TYPES.SETTING,
       *    label: 'Configure Setting',
       *    instructions: 'Set up configuration',
       *    completed: false,
       *    setting: {
       *      value: 'example',
       *      type: 'string',
       *      label: 'Example Setting',
       *      description: 'An example string setting'
       *    } as SettingsString
       * });
       * @throws {Error} If the step data is invalid.
       */
      add: (taskId, stepData) => {
        try {
          isValidStep(stepData);
          this.sendSocketData(APP_REQUESTS.STEP, { taskId, step: stepData }, "add");
        } catch (error) {
          if (error instanceof Error) {
            console.warn("Invalid step data:" + error.message);
          }
        }
      },
      /**
       * Updates an existing step with the provided updates.
       * Only allows updating valid step fields and sanitizes the input.
       *
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to update
       * @param updates - Partial Step object containing the fields to update
       */
      update: (taskId, stepId, updates) => {
        const validStepFields = [
          "parentId",
          "id",
          "debug",
          "strict",
          "type",
          "label",
          "instructions",
          "completed",
          "debugging",
          "source",
          "action",
          "url",
          "taskId",
          "taskSource",
          "destination",
          "setting"
        ];
        const sanitizedUpdates = Object.fromEntries(
          Object.entries(updates).filter(([key]) => validStepFields.includes(key))
        );
        this.sendSocketData(
          APP_REQUESTS.STEP,
          { taskId, stepId, step: { ...sanitizedUpdates, id: stepId } },
          "update"
        );
      },
      /**
       * Deletes a step from a task.
       *
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to delete
       */
      delete: (taskId, stepId) => {
        this.sendSocketData(APP_REQUESTS.STEP, { taskId, stepId }, "delete");
      },
      /**
       * Marks a step as completed.
       *
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to complete
       */
      complete: (taskId, stepId) => {
        this.sendSocketData(APP_REQUESTS.STEP, { taskId, stepId }, "complete");
      },
      /**
       * Restarts a step by resetting its state.
       *
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to restart
       */
      restart: (taskId, stepId) => {
        this.sendSocketData(APP_REQUESTS.STEP, { taskId, stepId }, "restart");
      },
      /**
       * Retrieves a specific step from a task.
       *
       * @param taskId - The ID of the task containing the step
       * @param stepId - The ID of the step to retrieve
       */
      get: (taskId, stepId) => {
        this.sendSocketData(APP_REQUESTS.STEP, { taskId, stepId }, "get");
      }
    };
    this.sendToServer = async (data) => {
      this.postProcessMessage({
        version: _DeskThingClass.version,
        type: "data",
        payload: data
      });
    };
    this.postProcessMessage = async (data) => {
      if (parentPort?.postMessage) {
        parentPort.postMessage(data);
      } else {
        console.error("Parent port or postmessage is undefined!");
      }
    };
    this.loadManifest();
    this.initializeListeners();
  }
  static {
    this.version = "0.11.0";
  }
  initializeListeners() {
    parentPort?.on("message", async (data) => {
      switch (data.type) {
        case "data":
          this.handleServerMessage(data.payload);
          break;
        case "start":
          this.postProcessMessage({
            version: _DeskThingClass.version,
            type: "started"
          });
          this.stopRequested = false;
          await this.notifyListeners(DESKTHING_EVENTS.START, {
            type: DESKTHING_EVENTS.START
          });
          break;
        case "stop":
          try {
            await this.notifyListeners(DESKTHING_EVENTS.STOP, {
              type: DESKTHING_EVENTS.STOP
            });
            this.stopRequested = true;
            this.backgroundTasks.forEach((cancel) => cancel());
            this.backgroundTasks = [];
          } catch (error) {
            console.error("Error in stop:", error);
          }
          this.postProcessMessage({
            version: _DeskThingClass.version,
            type: "stopped"
          });
          break;
        case "purge":
          await this.purge();
          break;
      }
    });
  }
  /**
   * Singleton pattern: Ensures only one instance of DeskThing exists.
   *
   * @since 0.8.0
   * @example
   * const deskThing = DeskThing.getInstance();
   * deskthing.on('start', () => {
   *   // Your code here
   * });
   */
  static getInstance() {
    if (!this.instance) {
      this.instance = new _DeskThingClass();
    }
    return this.instance;
  }
  /**
   * Notifies all listeners of a particular event.
   *
   * @since 0.8.0
   * @example
   * deskThing.on('message', (msg) => console.log(msg));
   * deskThing.notifyListeners('message', 'Hello, World!');
   */
  async notifyListeners(event, data) {
    const callbacks = this.Listeners[event];
    if (callbacks) {
      await Promise.all(
        callbacks.map(async (callback) => {
          try {
            await callback(data);
          } catch (error) {
            console.log(
              "Encountered an error in notifyListeners" + (error instanceof Error ? error.message : error)
            );
          }
        })
      );
    }
  }
  /**
   * Registers an event listener for a specific incoming event. Events are either the "type" value of the incoming SocketData object or a special event like "start", "stop", or "data".
   *
   * @since 0.8.0
   * @param event - The event type to listen for.
   * @param callback - The function to call when the event occurs.
   * @returns A function to remove the listener.
   *
   * @example
   * const removeListener = deskThing.on('data', (data) => console.log(data));
   * removeListener(); // To remove the listener
   *
   * @example
   * const removeListener = deskThing.on('start', () => console.log('App is starting'));
   * removeListener(); // To remove the listener
   *
   * @example
   * // When {type: 'get'} is received from the server
   * const removeListener = deskThing.on('get', (socketData) => console.log(socketData.payload));
   * removeListener(); // To remove the listener
   *
   * @example
   * // When a setting is updated. Passes the updated settings object
   * const removeListener = deskThing.on('settings', (settings) => console.log(settings.some_setting.value));
   * removeListener(); // To remove the listener
   *
   * @example
   * // Listening to data from the client
   * // server
   * deskThing.on('set', async (socketData) => {
   *    if (socketData.request === 'loremIpsum') {
   *      handleData(socketData.payload);
   *    }
   * })
   *
   * // client
   * deskThing.send({ type: 'set', request: 'loremIpsum', payload: 'lorem ipsum' });
   *
   * @example
   * // Listening to data from the client
   * // server
   * deskThing.on('doSomething', async (socketData) => {
   *    doSomething()
   * })
   *
   * // client
   * deskThing.send({ type: 'doSomething' });
   */
  on(event, callback) {
    if (!this.Listeners[event]) {
      this.Listeners[event] = [];
    }
    this.Listeners[event].push(callback);
    return () => this.off(event, callback);
  }
  /**
   * Removes a specific event listener for a particular incoming event.
   *
   * @since 0.8.0
   * @param event - The event for which to remove the listener.
   * @param callback - The listener function to remove.
   *
   * @example
   * const dataListener = () => console.log('Data received');
   * deskthing.on('data', dataListener);
   * deskthing.off('data', dataListener);
   */
  off(event, callback) {
    if (!this.Listeners[event]) {
      return;
    }
    this.Listeners[event] = this.Listeners[event].filter(
      (cb) => cb !== callback
    );
  }
  /**
   * Registers a one-time listener for an incoming event. The listener will be automatically removed after the first occurrence of the event.
   *
   * Will destructure the response from the server and just return the "payload" field
   *
   * @since 0.10.0
   * @param event - The event to listen for. This is either the 'type' field of SocketData or special cases like 'get' or 'start'
   * @param callback - Optional callback function. If omitted, returns a promise.
   * @returns A promise that resolves with the event data if no callback is provided.
   *
   * @example
   * DeskThing.once('message').then(data => console.log('Received data:', data)); // prints 'hello'
   *
   * // elsewhere
   * send({ type: 'message', payload: 'hello' });
   * @example
   * const flagType = await DeskThing.once('flagType');
   * console.log('Flag type:', flagType);
   * @example
   * await DeskThing.once('flagType', someFunction);
   *
   *
   * @throws
   * if something goes wrong
   */
  async once(event, callback, request) {
    try {
      return new Promise(
        (resolve2) => {
          const onceWrapper = async (data) => {
            if (request && data.request !== request) {
              return;
            }
            this.off(event, onceWrapper);
            if (callback) {
              await callback(data);
            }
            resolve2(data);
          };
          this.on(event, onceWrapper);
        }
      );
    } catch (error) {
      console.warn("Failed to listen for event: " + event);
      throw new Error(
        `Error in once() for app ${this.manifest?.id || "unset"}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }
  /**
   * Sends data to the server with a specified event type.
   *
   * @since 0.8.0
   * @param event - The event type to send.
   * @param payload - The data to send.
   * @param request - Optional request string.
   *
   * @example
   * deskThing.sendSocketData('log', { message: 'Logging an event' });
   */
  sendSocketData(event, payload, request) {
    const appData = {
      type: event,
      request,
      payload
    };
    this.sendToServer(appData);
  }
  /**
   * Sends data to the client for the client to listen to
   *
   * @since 0.10.0
   * @param payload - { type: string, payload: any, request?: string }
   *
   * @example
   * // Server
   * deskThing.send({ type: 'message', payload: 'Hello from the Server!' });
   *
   * // Client
   * deskThing.on('message', (data: SocketData) => {
   *   console.log('Received message:', data.payload); // prints 'Hello from the Server!'
   * });
   * @example
   * // Server
   * deskThing.send({ type: 'someFancyData', payload: someDataObject });
   *
   * // Client
   * deskThing.on('someFancyData', (data: SocketData) => {
   *   const someData = data.payload;
   * });
   *
   * @example
   * // Server
   * deskThing.send({type: 'songData', payload: musicData });
   *
   * // Client
   * deskThing.on('songData', (data: SocketData) => {
   *   const musicData = data.payload as SongData;
   * });
   */
  send(payload) {
    const filledPayload = {
      app: this.manifest?.id,
      ...payload
    };
    this.sendSocketData(APP_REQUESTS.SEND, filledPayload);
  }
  sendSong(songData) {
    this.sendSocketData(APP_REQUESTS.SONG, songData);
  }
  /**
   * Routes request to another app running on the server.
   * Ensure that the app you are requesting data from is in your dependency array!
   *
   * @param appId - The ID of the target app.
   * @param data - The data to send to the target app.
   * @since 0.11.0
   * @example
   * deskThing.sendToApp('utility', { type: 'set', request: 'next', payload: { id: '' } });
   * @example
   * deskThing.sendToApp('spotify', { type: 'get', request: 'music' });
   */
  sendToApp(appId, payload) {
    this.sendSocketData(APP_REQUESTS.TOAPP, payload, appId);
  }
  /**
   * Requests the server to open a specified URL.
   *
   * @param url - The URL to open.
   *
   * @example
   * deskThing.openUrl('https://example.com');
   */
  openUrl(url) {
    this.sendSocketData(APP_REQUESTS.OPEN, url);
  }
  /**
   * Fetches data from the server if not already retrieved, otherwise returns the cached data.
   * This method also handles queuing requests while data is being fetched.
   *
   * @returns A promise that resolves with the data fetched or the cached data, or null if data is not available.
   *
   * @example
   * const data = await deskThing.getData();
   * console.log('Fetched data:', data);
   */
  async getData() {
    const data = await this.fetch(
      {
        type: APP_REQUESTS.GET,
        request: "data"
      },
      { type: DESKTHING_EVENTS.DATA }
    );
    if (!data) {
      console.error("[getData]: Data not available");
      return null;
    }
    return data.payload;
  }
  /**
   * Fetches data from the server if not already retrieved, otherwise returns the cached data.
   * This method also handles queuing requests while data is being fetched.
   *
   * @returns A promise that resolves with the data fetched or the cached data, or null if data is not available.
   *
   * @example
   * const data = await deskThing.getData();
   * console.log('Fetched data:', data);
   */
  async getAppData() {
    const data = await this.fetch(
      {
        type: APP_REQUESTS.GET,
        request: "appData"
      },
      {
        type: DESKTHING_EVENTS.APPDATA
      }
    );
    if (!data) {
      console.error("[getAppData]: Data not available");
      return null;
    }
    return data.payload;
  }
  /**
   * Asynchronously retrieves the current settings. If settings are not defined, it fetches them from the server.
   *
   * @returns The current settings or undefined if not set.
   *
   * @example
   * const settings = deskThing.getSettings();
   * console.log('Current settings:', settings);
   */
  async getSettings() {
    const socketData = await this.fetch(
      {
        type: APP_REQUESTS.GET,
        request: "settings"
      },
      {
        type: DESKTHING_EVENTS.SETTINGS
      },
      () => {
      },
      500
    );
    if (!socketData?.payload) {
      console.error("[getSettings]: Settings are not defined!");
      return null;
    }
    return socketData.payload;
  }
  /**
   * Initializes the settings and assumes the settings provided by the server are preferred over the passed settings.
   * Should be used for startup settings and only startup settings
   *
   * @param settings The settings object
   */
  async initSettings(settings) {
    this.sendSocketData(APP_REQUESTS.SET, settings, "settings-init");
  }
  /**
   * Deletes settings from the server
   *
   * @example
   * // Delete a single setting
   * server.deleteSetting('color');
   */
  async deleteSettings(settingIds) {
    this.sendSocketData(APP_REQUESTS.DELETE, settingIds, "settings");
  }
  /**
   * Deletes data from the server
   *
   * @example
   * // Delete a single data item
   * server.deleteData('client_id');
   *
   */
  async deleteData(dataIds) {
    this.sendSocketData(APP_REQUESTS.DELETE, dataIds, "data");
  }
  /**
   * Registers a new action to the server. This can be mapped to any key on the deskthingserver UI.
   *
   * @param action - The action object to register.
   * @throws {Error} If the action object is invalid.
   * @example
   * const action = {
   *      name: 'Like'
   *      description: 'Likes the currently playing song'
   *      id: 'likesong'
   *      value: 'toggle'
   *      value_options: ['like', 'dislike', 'toggle']
   *      value_instructions: 'Determines whether to like, dislike, or toggle the currently liked song'
   *      icon: 'likesongicon' // overrides "id" and instead looks in /public/icons/likesongicon.svg
   *      version: 'v0.10.1'
   *      tag: 'media'
   * }
   * DeskThing.registerAction(action)
   * DeskThing.on('action', (data) => {
   *      if (data.payload.id === 'likesong') {
   *          DeskThing.sendLog('Like Song value is set to: ', data.value)
   *      }
   * })
   * @example
   * // Super minimal action
   * const action = {
   *      id: 'trigger' // looks for icon in /public/icons/trigger.svg
   * }
   * DeskThing.registerAction(action)
   * DeskThing.on('action', (data) => {
   *      if (data.payload.id === 'trigger') {
   *          DeskThing.sendLog('An action was triggered!')
   *      }
   * })
   */
  registerAction(action) {
    if (!action || typeof action !== "object") {
      throw new Error("Invalid action object");
    }
    if (!action.id || typeof action.id !== "string") {
      throw new Error("Action must have a valid id");
    }
    this.sendSocketData(APP_REQUESTS.ACTION, action, "add");
  }
  /**
   * Registers a new action to the server. This can be mapped to any key on the deskthingserver UI.
   *
   * @param action - The action object to register.
   * @throws {Error} If the action object is invalid.
   * @example
   * const action = {
   *      name: 'Like'
   *      description: 'Likes the currently playing song'
   *      id: 'likesong'
   *      value: 'toggle'
   *      value_options: ['like', 'dislike', 'toggle']
   *      value_instructions: 'Determines whether to like, dislike, or toggle the currently liked song'
   *      icon: 'likesongicon' // overrides "id" and instead looks in /public/icons/likesongicon.svg
   *      version: 'v0.10.1'
   *      tag: 'media'
   * }
   * DeskThing.registerAction(action)
   * DeskThing.on('action', (data) => {
   *      if (data.payload.id === 'likesong') {
   *          DeskThing.sendLog('Like Song value is set to: ', data.value)
   *      }
   * })
   * @example
   * // Super minimal action
   * const action = {
   *      id: 'trigger' // looks for icon in /public/icons/trigger.svg
   * }
   * DeskThing.registerAction(action)
   * DeskThing.on('action', (data) => {
   *      if (data.payload.id === 'trigger') {
   *          DeskThing.sendLog('An action was triggered!')
   *      }
   * })
   */
  initActions(actions) {
    if (!actions || !Array.isArray(actions)) {
      throw new Error("Invalid action object");
    }
    this.sendSocketData(APP_REQUESTS.ACTION, actions, "init");
  }
  /**
   * Registers a new action to the server. This can be mapped to any key on the deskthingserver UI.
   *
   * @param action - The action object to register.
   * @throws {Error} If the action object is invalid.
   * @deprecated - Use {@link DeskThing.registerAction} instead.
   * @example
   * const action = {
   *      name: 'Like'
   *      description: 'Likes the currently playing song'
   *      id: 'likesong'
   *      value: 'toggle'
   *      value_options: ['like', 'dislike', 'toggle']
   *      value_instructions: 'Determines whether to like, dislike, or toggle the currently liked song'
   *      icon: 'likesong'
   *      version: 'v0.10.1'
   *      tag: 'media'
   * }
   * DeskThing.registerActionObject(action)
   * DeskThing.on('action', (data) => {
   *      if (data.payload.id === 'likesong') {
   *          DeskThing.sendLog('Like Song value is set to: ', data.value)
   *      }
   * })
   */
  registerActionObject(action) {
    this.registerAction(action);
  }
  /**
   * Updates the flair of a specified action id. This can be used to update the image of the button. Flair is appended to the end of the action name and thus the end of the SVG path as well
   * @param id action id
   * @param flair the updated flair
   * @example
   * // Previously using like.svg
   * deskthing.updateFlair('like', 'active')
   * // Now using likeactive.svg
   */
  updateIcon(actionId, newIcon) {
    this.sendSocketData(APP_REQUESTS.ACTION, { id: actionId, icon: newIcon }, "update");
  }
  /**
   * Registers a new key with the specified identifier. This can be mapped to any action. Use a keycode to map a specific keybind.
   * Possible keycodes can be found at https://www.toptal.com/developers/keycode and is listening for event.code
   *
   * Keys can also be considered "digital" like buttons on the screen.
   * The first number in the key will be passed to the action
   * @deprecated - Use {@link DeskThing.registerKeyObject} instead.
   * @throws {Error} If the key object is invalid.
   * @param id - The unique identifier for the key.
   * @param description - Description for the key.
   */
  registerKey(id, description, modes, version) {
    this.registerKeyObject({ id, description, modes, version });
  }
  /**
   * Registers a new key with the specified identifier. This can be mapped to any action. Use a keycode to map a specific keybind.
   * Possible keycodes can be found at https://www.toptal.com/developers/keycode and is listening for event.code
   *
   * Keys can also be considered "digital" like buttons on the screen.
   * @throws {Error} If the key object is invalid.
   * @param key - The key object to register.
   */
  registerKeyObject(key) {
    if (!key || typeof key !== "object") {
      throw new Error("Invalid key object");
    }
    if (!key.modes || !Array.isArray(key.modes) || key.modes.length === 0) {
      throw new Error("Key must have valid modes");
    }
    if (typeof key.id !== "string") {
      throw new Error("Key must have a valid id");
    }
    const newKey = {
      ...key,
      source: this.manifest?.id || "unknown",
      enabled: true
    };
    this.sendSocketData(APP_REQUESTS.KEY, newKey, "add");
  }
  /**
   * Removes an action with the specified identifier.
   *
   * @param id - The unique identifier of the action to be removed.
   */
  removeAction(id) {
    this.sendSocketData(APP_REQUESTS.ACTION, { id }, "remove");
  }
  /**
   * Removes a key with the specified identifier.
   *
   * @param id - The unique identifier of the key to be removed.
   */
  removeKey(id) {
    this.sendSocketData(APP_REQUESTS.KEY, { id }, "remove");
  }
  /**
   * Saves the provided data by merging it with the existing appdata and updating settings.
   * Sends the updated data to the server and notifies listeners.
   *
   * @param data - The data to be saved and merged with existing data.
   * @param sync - Whether to sync the data with the server.
   */
  saveAppData(data, sync = true) {
    sync && this.sendSocketData(APP_REQUESTS.SET, data, "appData");
    this.notifyListeners(DESKTHING_EVENTS.APPDATA, {
      type: DESKTHING_EVENTS.APPDATA,
      payload: data
    });
  }
  /**
   * Saves the provided data by merging it with the existing data and updating settings.
   * Sends the updated data to the server and notifies listeners.
   *
   * @param data - The data to be saved and merged with existing data.
   */
  saveData(data, sync = true) {
    this.notifyListeners(DESKTHING_EVENTS.DATA, {
      type: DESKTHING_EVENTS.DATA,
      payload: data
    });
    sync && this.sendSocketData(APP_REQUESTS.SET, data, "data");
  }
  /**
   * Saves settings to server - overwriting existing settings
   */
  saveSettings(settings) {
    this.sendSocketData(APP_REQUESTS.SET, settings, "settings");
  }
  /**
   * Adds a background task that will loop until either the task is cancelled or the task function returns true.
   * This is useful for tasks that need to run periodically or continuously in the background.
   *
   * Returning TRUE will end the loop and cancel the task
   * Returning FALSE will start another loop after the timeout is completed
   *
   * @param task () => boolean - The background task function to add. This function should return a Promise that resolves to a boolean or void.
   * @param timeout - Optional timeout in milliseconds between task iterations.
   * @returns A function to cancel the background task.
   *
   * @example
   * // Add a background task that logs a message every 5 seconds
   * const cancelTask = deskThing.scheduleTask(async () => {
   *   console.log('Performing periodic task...');
   *   await new Promise(resolve => setTimeout(resolve, 5000));
   *   return false; // Return false to continue the loop
   * });
   *
   * // Later, to stop the task:
   * cancelTask();
   *
   * @example
   * // Add a background task that runs until a condition is met
   * let count = 0;
   * deskThing.scheduleTask(async () => {
   *   console.log(`Task iteration ${++count}`);
   *   if (count >= 10) {
   *     console.log('Task completed');
   *     return true; // Return true to end the loop
   *   }
   *   return false; // Continue the loop
   * });
   *
   * @example
   * // Add a background task that runs every second
   * deskThing.scheduleTask(async () => {
   *   checkForUpdates();
   * }, 1000);
   */
  setInterval(task, timeout) {
    const cancelToken = { cancelled: false };
    const wrappedTask = async () => {
      let endToken = false;
      while (!cancelToken.cancelled && !endToken) {
        endToken = await task() || false;
        if (timeout) {
          await new Promise((resolve2) => setTimeout(resolve2, timeout));
        }
      }
    };
    this.backgroundTasks.push(() => {
      cancelToken.cancelled = true;
    });
    wrappedTask();
    return () => {
      cancelToken.cancelled = true;
    };
  }
  /**
   * Sets a timeout that delays the execution of code
   * The timeout will be cancelled if the app is purged / disabled
   *
   * @returns A function that can be called to cancel the timeout
   */
  setTimeout(fn, timeout) {
    const cancelToken = { cancelled: false };
    const timeoutId = setTimeout(async () => {
      if (!cancelToken.cancelled) {
        await fn();
      }
    }, timeout);
    this.backgroundTasks.push(() => {
      cancelToken.cancelled = true;
      clearTimeout(timeoutId);
    });
    return () => {
      cancelToken.cancelled = true;
      clearTimeout(timeoutId);
    };
  }
  /**
   * @deprecated Use {@link DeskThing.scheduleTask} instead for repeated tasks or {@link DeskThing.addThread} for single-use long-running tasks like websockets
   * @param task
   * @param timeout
   * @returns
   */
  addBackgroundTaskLoop(task, timeout) {
    return this.setInterval(task, timeout);
  }
  /**
   * Creates a new worker thread that runs independently and can be force-killed.
   * Thread is automatically terminated when app closes.
   *
   * @param workerPath - Path to the worker file relative to project root
   * @returns Object containing terminate function and worker instance
   *
   * @example
   * // Main thread
   * DeskThing.on('start', async () => {
   *    const [ remove, worker ] = DeskThing.addThread('./workers/websocket.js');
   *
   *    worker.on('message', (data) => {
   *      DeskThing.log(LOGGING_LEVELS.LOG, `Received message: ${data}`);
   *    });
   *
   *    worker.postMessage({ type: 'send', payload: 'Hello from the main thread!' });
   * })
   * // workers/websocket.ts
   * import { parentPort } from 'worker_threads'
   * import WebSocket from 'ws'
   *
   * const ws = new WebSocket('wss://your-websocket-server.com')
   *
   * ws.on('open', () => {
   *   parentPort?.postMessage({ type: 'connected' })
   * })
   *
   * ws.on('message', (data) => {
   *   parentPort?.postMessage({ type: 'message', data: data.toString() })
   * })
   *
   * ws.on('error', (error) => {
   *   parentPort?.postMessage({ type: 'error', error: error.message })
   * })
   *
   * ws.on('close', () => {
   *   parentPort?.postMessage({ type: 'disconnected' })
   * })
   *
   * // Handle messages from main thread
   * parentPort?.on('message', (message) => {
   *   if (message.type === 'send') {
   *     ws.send(message.payload) // Send message to WebSocket server with content 'Hello from the main thread!'
   *   }
   * })
   *
   * @example // Ex: How to pass data to worker thread
   * import { parentPort, workerData } from 'worker_threads';
   *
   * // Access passed data
   * console.log(workerData.someValue);
   *
   * // Use the data in your worker logic
   * parentPort?.postMessage({
   *     type: 'init',
   *     config: workerData
   * });
   *
   * // Main thread
   * const config = {
   *     interval: 1000,
   *     url: 'wss://example.com'
   * };
   *
   * const [worker, terminate] = DeskThing.addThread('./workers/websocket.js', config);
   */
  addThread(workerPath, workerData) {
    const resolvedPath = path.resolve(__dirname, workerPath);
    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`Worker file not found: ${workerPath}`);
    }
    const worker = new Worker(resolvedPath, { workerData });
    worker.on("error", (error) => {
      console.error(`Worker error: ${error.message}`);
    });
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
      }
      console.log(`Worker terminated`);
    });
    const terminate = () => {
      try {
        worker.removeAllListeners();
        worker.terminate();
      } catch (error) {
        if (error instanceof Error) {
          console.error(`Failed to terminate worker: ${error.message}`);
        } else {
          console.error(`Failed to terminate worker: ${error}`);
          console.error("[addThread - app]: Unknown error: ", error);
        }
      }
    };
    this.backgroundTasks.push(terminate);
    return [worker, terminate];
  }
  /**
   * -------------------------------------------------------
   * Deskthing Server Functions
   */
  /**
   * Fetches the manifest
   * @returns Manifest | null
   */
  loadManifest() {
    if (this.manifest) {
      return this.manifest;
    }
    const builtManifestPath = path.resolve(
      process.env.DESKTHING_ROOT_PATH || __dirname,
      "../manifest.json"
    );
    const devManifestPath = path.resolve(
      process.env.DESKTHING_ROOT_PATH || __dirname,
      "../deskthing/manifest.json"
    );
    const oldBuiltManifestPath = path.resolve(
      process.env.DESKTHING_ROOT_PATH || __dirname,
      "./manifest.json"
    );
    const oldDevManifestPath = path.resolve(
      process.env.DESKTHING_ROOT_PATH || __dirname,
      "../public/manifest.json"
    );
    const errors = [];
    if (fs.existsSync(builtManifestPath)) {
      try {
        const manifestData = fs.readFileSync(builtManifestPath, "utf-8");
        this.manifest = JSON.parse(manifestData);
        return this.manifest;
      } catch (error) {
        console.error("Failed to load built manifest:");
        errors.push(error);
      }
    }
    if (fs.existsSync(devManifestPath)) {
      try {
        const manifestData = fs.readFileSync(devManifestPath, "utf-8");
        this.manifest = JSON.parse(manifestData);
        return this.manifest;
      } catch (error) {
        console.error("Failed to load dev manifest:");
        errors.push(error);
      }
    }
    if (fs.existsSync(oldBuiltManifestPath)) {
      try {
        const manifestData = fs.readFileSync(oldBuiltManifestPath, "utf-8");
        this.manifest = JSON.parse(manifestData);
        return this.manifest;
      } catch (error) {
        console.error("Failed to load old built manifest:");
        errors.push(error);
      }
    }
    if (fs.existsSync(oldDevManifestPath)) {
      try {
        const manifestData = fs.readFileSync(oldDevManifestPath, "utf-8");
        this.manifest = JSON.parse(manifestData);
        return this.manifest;
      } catch (error) {
        console.error("Failed to load old dev manifest:");
        errors.push(error);
      }
    }
    console.error(
      "[loadManifest] Failed to load manifest from any location:",
      errors
    );
    console.log("[loadManifest]: Manifest not found in any location");
    return null;
  }
  /**
   * Returns the manifest in a Response structure
   * If the manifest is not found or fails to load, it returns a 500 status code.
   * It will attempt to read the manifest from file if the manifest does not exist in cache
   *
   * !! This method is not intended for use in client code.
   *
   * @example
   * const manifest = deskThing.getManifest();
   * console.log(manifest);
   */
  getManifest() {
    if (!this.manifest) {
      this.loadManifest();
      if (!this.manifest) {
        return;
      } else {
      }
    }
    return this.manifest;
  }
  /**
   * @returns
   */
  async purge() {
    try {
      await this.notifyListeners(DESKTHING_EVENTS.PURGE, {
        type: DESKTHING_EVENTS.PURGE,
        request: void 0
      });
      this.stopRequested = true;
      this.backgroundTasks.forEach((cancel) => cancel());
      this.clearCache();
    } catch (error) {
      console.error("Error in Purge:", error);
      return {
        data: { message: `Error in Purge: ${error}` },
        status: 500,
        statusText: "Internal Server Error",
        request: []
      };
    }
    return {
      data: { message: "App purged successfully!" },
      status: 200,
      statusText: "OK",
      request: []
    };
  }
  // Method to clear cached data
  clearCache() {
    this.Listeners = {};
    this.manifest = null;
    this.stopRequested = false;
    this.backgroundTasks = [];
    this.sysListeners.forEach((removeListener) => removeListener());
    this.sysListeners = [];
    Promise.all(
      Object.entries(this.imageUrls).map(async ([url, id]) => {
        try {
          const imagePath = path.join(__dirname, id);
          await fs.promises.unlink(imagePath);
          delete this.imageUrls[url];
        } catch (err) {
          console.warn(`Failed to delete image ${id}:`, err);
        }
      })
    );
  }
  /**
   * @returns
   */
  async handleServerMessage(data) {
    try {
      if (!data) return;
      if (process.env.DESKTHING_ENV == "development") {
      }
      switch (data.type) {
        case DESKTHING_EVENTS.APPDATA:
          try {
            if (!data.payload) throw new Error("No data payload");
            isValidAppDataInterface(data.payload);
            this.saveAppData(data.payload, false);
          } catch (error) {
            console.log("Received invalid data from server");
            console.error("Invalid app data interface:", error);
            console.debug("Data Received: " + JSON.stringify(data));
            return;
          }
          break;
        case DESKTHING_EVENTS.DATA:
          if (data.payload) {
            this.saveData(data.payload, false);
          }
          break;
        case DESKTHING_EVENTS.MESSAGE:
          console.log("Received message from server:" + data.payload);
          break;
        case DESKTHING_EVENTS.SETTINGS:
          if (!data.payload) {
            console.warn("Received invalid settings from server:", data);
          } else {
            const settings = data.payload;
            this.notifyListeners(DESKTHING_EVENTS.SETTINGS, {
              type: DESKTHING_EVENTS.SETTINGS,
              payload: settings
            });
          }
          break;
        default:
          this.notifyListeners(data.type, data);
          break;
      }
    } catch (error) {
      console.error(
        "Encountered an error in toClient" + (error instanceof Error ? error.message : error)
      );
    }
  }
};
function createDeskThing() {
  return DeskThingClass.getInstance();
}
var DeskThing = DeskThingClass.getInstance();

// node_modules/@deskthing/types/dist/apps/appSettings.js
var SETTING_TYPES2;
(function(SETTING_TYPES3) {
  SETTING_TYPES3["BOOLEAN"] = "boolean";
  SETTING_TYPES3["NUMBER"] = "number";
  SETTING_TYPES3["STRING"] = "string";
  SETTING_TYPES3["RANGE"] = "range";
  SETTING_TYPES3["SELECT"] = "select";
  SETTING_TYPES3["MULTISELECT"] = "multiselect";
  SETTING_TYPES3["LIST"] = "list";
  SETTING_TYPES3["RANKED"] = "ranked";
  SETTING_TYPES3["COLOR"] = "color";
  SETTING_TYPES3["FILE"] = "file";
})(SETTING_TYPES2 || (SETTING_TYPES2 = {}));

// node_modules/@deskthing/types/dist/deskthing/deskthingTransit.js
var DESKTHING_DEVICE2;
(function(DESKTHING_DEVICE3) {
  DESKTHING_DEVICE3["GLOBAL_SETTINGS"] = "global_settings";
  DESKTHING_DEVICE3["MAPPINGS"] = "button_mappings";
  DESKTHING_DEVICE3["CONFIG"] = "configuration";
  DESKTHING_DEVICE3["GET"] = "get";
  DESKTHING_DEVICE3["ERROR"] = "error";
  DESKTHING_DEVICE3["PONG"] = "pong";
  DESKTHING_DEVICE3["PING"] = "ping";
  DESKTHING_DEVICE3["SETTINGS"] = "settings";
  DESKTHING_DEVICE3["APPS"] = "apps";
  DESKTHING_DEVICE3["TIME"] = "time";
  DESKTHING_DEVICE3["HEARTBEAT"] = "heartbeat";
  DESKTHING_DEVICE3["META_DATA"] = "meta_data";
  DESKTHING_DEVICE3["MUSIC"] = "music";
  DESKTHING_DEVICE3["ICON"] = "icon";
})(DESKTHING_DEVICE2 || (DESKTHING_DEVICE2 = {}));
var DESKTHING_EVENTS2;
(function(DESKTHING_EVENTS3) {
  DESKTHING_EVENTS3["MESSAGE"] = "message";
  DESKTHING_EVENTS3["DATA"] = "data";
  DESKTHING_EVENTS3["APPDATA"] = "appdata";
  DESKTHING_EVENTS3["CALLBACK_DATA"] = "callback-data";
  DESKTHING_EVENTS3["START"] = "start";
  DESKTHING_EVENTS3["STOP"] = "stop";
  DESKTHING_EVENTS3["PURGE"] = "purge";
  DESKTHING_EVENTS3["INPUT"] = "input";
  DESKTHING_EVENTS3["ACTION"] = "action";
  DESKTHING_EVENTS3["CONFIG"] = "config";
  DESKTHING_EVENTS3["SETTINGS"] = "settings";
  DESKTHING_EVENTS3["TASKS"] = "tasks";
  DESKTHING_EVENTS3["CLIENT_STATUS"] = "client_status";
})(DESKTHING_EVENTS2 || (DESKTHING_EVENTS2 = {}));

// server/initSettings.ts
var initializeSettings = async () => {
  const settings = {
    ["color_options" /* COLOR_OPTIONS */]: {
      id: "color_options" /* COLOR_OPTIONS */,
      type: SETTING_TYPES2.SELECT,
      value: "auto",
      label: "Clock Color Options",
      options: [
        { label: "Automatic", value: "auto" },
        { label: "Custom", value: "custom" },
        { label: "Gradient", value: "gradient" }
      ]
    },
    ["color" /* COLOR */]: {
      id: "color" /* COLOR */,
      type: SETTING_TYPES2.COLOR,
      label: "Clock Color",
      value: "#ffffff",
      dependsOn: [
        {
          settingId: "color_options" /* COLOR_OPTIONS */,
          isValue: "custom"
        }
      ]
    },
    ["gradient_start" /* GRADIENT_START */]: {
      id: "gradient_start" /* GRADIENT_START */,
      type: SETTING_TYPES2.COLOR,
      label: "Gradient Start Color",
      value: "#ff0000",
      dependsOn: [
        {
          settingId: "color_options" /* COLOR_OPTIONS */,
          isValue: "gradient"
        }
      ]
    },
    ["gradient_end" /* GRADIENT_END */]: {
      id: "gradient_end" /* GRADIENT_END */,
      type: SETTING_TYPES2.COLOR,
      label: "Gradient End Color",
      value: "#0000ff",
      dependsOn: [
        {
          settingId: "color_options" /* COLOR_OPTIONS */,
          isValue: "gradient"
        }
      ]
    },
    ["clock_size" /* CLOCK_SIZE */]: {
      id: "clock_size" /* CLOCK_SIZE */,
      type: SETTING_TYPES2.NUMBER,
      label: "Clock Size (px)",
      value: 180,
      min: 5,
      max: 500,
      step: 1,
      description: "Adjust the size of the clock display font in pixels"
    },
    ["clock_transparency" /* CLOCK_OPACITY */]: {
      id: "clock_transparency" /* CLOCK_OPACITY */,
      type: SETTING_TYPES2.RANGE,
      label: "Clock Opacity",
      value: 1,
      min: 0,
      max: 1,
      step: 0.01
    },
    ["clock_divider" /* CLOCK_DIVIDER */]: {
      id: "clock_divider" /* CLOCK_DIVIDER */,
      type: SETTING_TYPES2.STRING,
      label: "Clock Divider",
      value: ":",
      description: "Character used to separate time components (e.g., hours, minutes, seconds)."
    },
    ["military_time" /* MILITARY_TIME */]: {
      id: "military_time" /* MILITARY_TIME */,
      type: SETTING_TYPES2.BOOLEAN,
      label: "Military Time",
      value: false
    },
    ["font" /* FONT */]: {
      id: "font" /* FONT */,
      type: SETTING_TYPES2.FILE,
      label: "Upload Font",
      value: "",
      description: "Upload a custom font for the clock display. Hit Save after uploading then select it in FONT SELECTION",
      fileTypes: [
        {
          name: "Font Files",
          extensions: ["ttf", "otf", "woff", "woff2"]
        }
      ]
    },
    ["font_selection" /* FONT_SELECTION */]: {
      id: "font_selection" /* FONT_SELECTION */,
      type: SETTING_TYPES2.SELECT,
      label: "Select Font",
      value: "",
      description: "Select a font for the clock display. If you upload a new font, select it here.",
      options: [
        {
          label: "GeistVF (Default)",
          value: "GeistVF.ttf"
        },
        { label: "GeistMonoVF", value: "GeistMonoVF.ttf" },
        { label: "HelveticaNeue", value: "HelveticaNeue.ttf" },
        { label: "THEBOLDFONT", value: "THEBOLDFONT.ttf" }
      ]
    },
    ["background" /* BACKGROUND */]: {
      id: "background" /* BACKGROUND */,
      type: SETTING_TYPES2.SELECT,
      value: "color",
      label: "Background Options",
      options: [
        { label: "Color", value: "color" },
        { label: "Picture", value: "picture" },
        { label: "Thumbnail", value: "thumbnail" }
      ]
    },
    ["background_blur" /* BACKGROUND_BLUR */]: {
      id: "background_blur" /* BACKGROUND_BLUR */,
      type: SETTING_TYPES2.NUMBER,
      label: "Background Blur",
      description: "Adjust the blur effect on the background. Only applies to thumbnail backgrounds.",
      value: 12,
      min: 0,
      max: 100,
      step: 0.1,
      dependsOn: [
        {
          settingId: "background" /* BACKGROUND */,
          isNot: "color"
        }
      ]
    },
    ["background_image" /* BACKGROUND_IMAGE */]: {
      id: "background_image" /* BACKGROUND_IMAGE */,
      type: SETTING_TYPES2.FILE,
      label: "Background Image",
      value: "",
      description: "Upload a custom background image.",
      fileTypes: [
        {
          name: "Image Files",
          extensions: ["jpg", "jpeg", "png", "webp", "gif"]
        }
      ],
      dependsOn: [
        {
          settingId: "background" /* BACKGROUND */,
          isValue: "picture"
        }
      ]
    },
    ["background_color" /* BACKGROUND_COLOR */]: {
      id: "background_color" /* BACKGROUND_COLOR */,
      type: SETTING_TYPES2.COLOR,
      label: "Background Color",
      value: "#1A2232",
      dependsOn: [
        {
          settingId: "background" /* BACKGROUND */,
          isValue: "color"
        }
      ]
    },
    ["background_dim" /* BACKGROUND_BRIGHTNESS */]: {
      id: "background_dim" /* BACKGROUND_BRIGHTNESS */,
      version: "0.11.3",
      // set version so it updates if someone improperly downloaded this 
      type: SETTING_TYPES2.RANGE,
      label: "Background Brightness",
      description: "Adjust the brightness of the background.",
      value: 1,
      min: 0,
      max: 1,
      step: 0.01
    },
    ["clock_position" /* CLOCK_POSITION */]: {
      id: "clock_position" /* CLOCK_POSITION */,
      type: SETTING_TYPES2.SELECT,
      label: "Clock Position",
      description: "Set the position of the clock on the screen.",
      options: [
        { label: "Top Left", value: "top-left" },
        { label: "Top Right", value: "top-right" },
        { label: "Bottom Left", value: "bottom-left" },
        { label: "Bottom Right", value: "bottom-right" },
        { label: "Top", value: "top" },
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
        { label: "Bottom", value: "bottom" },
        { label: "Center", value: "center" }
      ],
      value: "center"
    },
    ["clock_pos_x" /* CLOCK_POS_X */]: {
      id: "clock_pos_x" /* CLOCK_POS_X */,
      type: SETTING_TYPES2.NUMBER,
      label: "Clock X Position",
      value: 0,
      min: -100,
      max: 100,
      step: 1
    },
    ["clock_pos_y" /* CLOCK_POS_Y */]: {
      id: "clock_pos_y" /* CLOCK_POS_Y */,
      type: SETTING_TYPES2.NUMBER,
      label: "Clock Y Position",
      value: 0,
      min: -100,
      max: 100,
      step: 1
    },
    ["widgets" /* WIDGETS */]: {
      id: "widgets" /* WIDGETS */,
      type: SETTING_TYPES2.MULTISELECT,
      label: "Enabled Widgets",
      value: ["date" /* DATE */],
      options: [
        { label: "Stopwatch", value: "stopwatch" /* STOPWATCH */ },
        { label: "Countdown", value: "countdown" /* COUNTDOWN */ },
        { label: "Date", value: "date" /* DATE */ }
      ]
    },
    ["date_pos_x" /* DATE_POS_X */]: {
      id: "date_pos_x" /* DATE_POS_X */,
      type: SETTING_TYPES2.NUMBER,
      label: "Date X Offset",
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: "widgets" /* WIDGETS */,
          isValue: "date"
        }
      ]
    },
    ["date_pos_y" /* DATE_POS_Y */]: {
      id: "date_pos_y" /* DATE_POS_Y */,
      type: SETTING_TYPES2.NUMBER,
      label: "Date Y Offset",
      value: 0,
      min: -500,
      max: 500,
      step: 1,
      dependsOn: [
        {
          settingId: "widgets" /* WIDGETS */,
          isValue: "date"
        }
      ]
    },
    ["date_format" /* DATE_FORMAT */]: {
      id: "date_format" /* DATE_FORMAT */,
      type: SETTING_TYPES2.SELECT,
      label: "Date Format",
      value: "MM/DD/YYYY",
      options: [
        { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
        { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
        { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
        { label: "MMMM DD YYYY", value: "MMMM DD YYYY" },
        { label: "MMM DD YYYY", value: "MMM DD YYYY" }
      ],
      dependsOn: [
        {
          settingId: "widgets" /* WIDGETS */,
          isValue: "date"
        }
      ]
    },
    ["stopwatch_default_time" /* STOPWATCH_DEFAULT_TIME */]: {
      id: "stopwatch_default_time" /* STOPWATCH_DEFAULT_TIME */,
      type: SETTING_TYPES2.NUMBER,
      label: "Stopwatch Default Time",
      value: 0,
      min: 0,
      max: 86400,
      step: 1,
      dependsOn: [
        {
          settingId: "widgets" /* WIDGETS */,
          isValue: "stopwatch"
        }
      ]
    },
    ["countdown_default_time" /* COUNTDOWN_DEFAULT_TIME */]: {
      id: "countdown_default_time" /* COUNTDOWN_DEFAULT_TIME */,
      type: SETTING_TYPES2.NUMBER,
      label: "Countdown Default Time",
      value: 60,
      min: 1,
      max: 86400,
      step: 1,
      dependsOn: [
        {
          settingId: "widgets" /* WIDGETS */,
          isValue: "countdown"
        }
      ]
    },
    ["clock_ordering" /* CLOCK_ORDERING */]: {
      id: "clock_ordering" /* CLOCK_ORDERING */,
      type: SETTING_TYPES2.RANKED,
      label: "Clock Ordering",
      value: ["clock", "date" /* DATE */, "stopwatch" /* STOPWATCH */, "countdown" /* COUNTDOWN */],
      options: [
        { label: "Clock", value: "clock" },
        { label: "Date", value: "date" /* DATE */ },
        { label: "Stopwatch", value: "stopwatch" /* STOPWATCH */ },
        { label: "Countdown", value: "countdown" /* COUNTDOWN */ }
      ]
    },
    ["clock_justify_content" /* CLOCK_JUSTIFY_CONTENT */]: {
      id: "clock_justify_content" /* CLOCK_JUSTIFY_CONTENT */,
      type: SETTING_TYPES2.SELECT,
      label: "Clock Justify Content",
      value: "center",
      options: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Space Between", value: "space-between" }
      ]
    },
    ["clock_shadow" /* CLOCK_SHADOW */]: {
      id: "clock_shadow" /* CLOCK_SHADOW */,
      type: SETTING_TYPES2.BOOLEAN,
      label: "Clock Shadow",
      value: true,
      description: "Enable or disable shadow effect on the clock text."
    },
    ["clock_shadow_opacity" /* CLOCK_SHADOW_OPACITY */]: {
      id: "clock_shadow_opacity" /* CLOCK_SHADOW_OPACITY */,
      type: SETTING_TYPES2.RANGE,
      label: "Clock Shadow Opacity",
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
      dependsOn: [
        {
          settingId: "clock_shadow" /* CLOCK_SHADOW */
        }
      ]
    },
    ["clock_shadow_distance" /* CLOCK_SHADOW_DISTANCE */]: {
      id: "clock_shadow_distance" /* CLOCK_SHADOW_DISTANCE */,
      type: SETTING_TYPES2.RANGE,
      label: "Clock Shadow Distance",
      value: 2,
      min: 0,
      max: 10,
      step: 0.1,
      dependsOn: [
        {
          settingId: "clock_shadow" /* CLOCK_SHADOW */
        }
      ]
    },
    ["clock_shadow_blur" /* CLOCK_SHADOW_BLUR */]: {
      id: "clock_shadow_blur" /* CLOCK_SHADOW_BLUR */,
      type: SETTING_TYPES2.RANGE,
      label: "Clock Shadow Blur",
      value: 4,
      min: 0,
      max: 20,
      step: 0.1,
      dependsOn: [
        {
          settingId: "clock_shadow" /* CLOCK_SHADOW */
        }
      ]
    }
  };
  await DeskThing.initSettings(settings);
};

// server/fontHandler.ts
import * as fs2 from "fs";
import * as path2 from "path";
var fontPath = process.env.NODE_ENV == "development" ? path2.join(process.cwd(), "public", "fonts") : path2.join(__dirname, "..", "client", "fonts");
var VALID_FONT_EXTENSIONS = [".ttf", ".otf", ".woff", ".woff2"];
var initFontHandling = () => {
  console.log(`Font path: ${fontPath}`);
  if (!fs2.existsSync(fontPath)) {
    fs2.mkdirSync(fontPath, { recursive: true });
  }
  updateFontOptions();
};
var updateFontOptions = async (newFontUrl) => {
  try {
    const files = fs2.readdirSync(fontPath);
    const fontFiles = files.filter(
      (file) => VALID_FONT_EXTENSIONS.includes(path2.extname(file).toLowerCase())
    );
    const fontOptions = fontFiles.map((file) => {
      const label = path2.basename(file, path2.extname(file)).replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
      return {
        label,
        value: `./fonts/${file}`
      };
    });
    const recentlyAddedFont = newFontUrl ? `./fonts/${path2.basename(newFontUrl)}` : null;
    if (recentlyAddedFont) {
      await DeskThing.setSettings({
        ["font_selection" /* FONT_SELECTION */]: {
          id: "font_selection" /* FONT_SELECTION */,
          type: SETTING_TYPES2.SELECT,
          description: "Select a font for the clock display. If you upload a new font, select it here.",
          label: "Select Font",
          value: recentlyAddedFont,
          // Default to recently added font if available
          options: fontOptions
        }
      });
    } else {
      DeskThing.setSettingOptions("font_selection" /* FONT_SELECTION */, fontOptions);
    }
  } catch (error) {
    console.error("Error updating font options:", error);
  }
};
DeskThing.on(DESKTHING_EVENTS2.SETTINGS, async (setting) => {
  const fontFile = setting.payload["font" /* FONT */]?.value;
  if (fontFile && typeof fontFile == "string" && fontFile !== "") {
    await DeskThing.setSettings({
      ...setting.payload,
      ["font" /* FONT */]: {
        id: "font" /* FONT */,
        type: SETTING_TYPES2.FILE,
        label: "Upload Font",
        value: "",
        // Resets the value of the setting after upload
        fileTypes: [
          {
            name: "Font Files",
            extensions: ["ttf", "otf", "woff", "woff2"]
            //
          }
        ]
      }
    });
    await handleFontUpload(fontFile);
  }
});
var handleFontUpload = async (fontFilePath) => {
  try {
    if (!fs2.existsSync(fontFilePath)) {
      console.error("Font file does not exist:", fontFilePath);
      return;
    }
    let fileName = path2.basename(fontFilePath);
    fileName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
    const ext = path2.extname(fileName).toLowerCase();
    if (!VALID_FONT_EXTENSIONS.includes(ext)) {
      console.error("Invalid font format:", ext);
      return;
    }
    const destinationPath = path2.join(fontPath, fileName);
    fs2.copyFileSync(fontFilePath, destinationPath);
    console.log(`Font copied to: ${destinationPath}`);
    await updateFontOptions(destinationPath);
  } catch (error) {
    console.error("Error handling font upload:", error);
  }
};

// server/images/utils.ts
import { existsSync as existsSync3 } from "node:fs";
import { copyFile, mkdir } from "node:fs/promises";
import { join as join3 } from "node:path";
var IMAGE_PATH = process.env.DESKTHING_ENV == "development" ? join3(process.cwd(), "public", "images") : join3(__dirname, "../images");
var saveImageReferenceFromURL = async (url) => {
  try {
    if (url.startsWith("https")) {
      return url;
    }
    return await handleFile(url);
  } catch (error) {
    console.error("Error saving image reference: ", error);
    return;
  }
};
var ensureFileExists = () => {
  if (!existsSync3(IMAGE_PATH)) {
    console.debug("Creating images directory");
    mkdir(IMAGE_PATH, { recursive: true });
  }
};
var handleFile = async (filePath) => {
  ensureFileExists();
  if (!existsSync3(filePath)) {
    console.debug(`Unable to find image path at ${filePath}`);
    return "";
  }
  const fileExtension = filePath.split(".").pop()?.toLowerCase();
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff"];
  if (!fileExtension || !imageExtensions.includes(fileExtension)) {
    console.error(`File is not a supported image format: ${fileExtension}. Only supports ${imageExtensions.join(", ")}`);
    return "";
  }
  const originalName = filePath.split(/[\\/]/).pop() || "";
  const sanitizedName = originalName.replace(/[^a-zA-Z0-9.-]/g, "_");
  const uniqueName = `${sanitizedName}`;
  const destinationPath = join3(IMAGE_PATH, uniqueName);
  await copyFile(filePath, destinationPath);
  return `http://localhost:8891/resource/image/ultimateclock/${uniqueName}`;
};

// server/images/index.ts
var DeskThing2 = createDeskThing();
var sendImageToClient = async (imagePath) => {
  try {
    const imageUrl = await saveImageReferenceFromURL(imagePath);
    if (!imageUrl) {
      console.debug("Error saving image reference");
      return;
    }
    console.debug("Sending Image " + imageUrl + " to client");
    DeskThing2.send({
      type: "image",
      request: "data",
      payload: imageUrl
    });
  } catch (error) {
    console.error("Error reading image file: " + error);
  }
};
DeskThing2.on(DESKTHING_EVENTS2.SETTINGS, async (setting) => {
  if (setting.payload["background_image" /* BACKGROUND_IMAGE */].value && setting.payload["background_image" /* BACKGROUND_IMAGE */].type == SETTING_TYPES2.FILE) {
    await sendImageToClient(setting.payload["background_image" /* BACKGROUND_IMAGE */].value);
  }
});
DeskThing2.on("image", async (data) => {
  if (data.type == null) {
    console.warn("No args provided!");
    return;
  }
  switch (data.request) {
    case "request": {
      const Data = await DeskThing2.getSettings();
      if (Data?.["background_image" /* BACKGROUND_IMAGE */].value && Data["background_image" /* BACKGROUND_IMAGE */].type == SETTING_TYPES2.FILE) {
        await sendImageToClient(Data?.["background_image" /* BACKGROUND_IMAGE */].value);
      } else {
        console.debug("No image source found!");
      }
      break;
    }
    default:
      console.debug(`Unknown request: ${data.request}`);
      break;
  }
});

// server/index.ts
var start = async () => {
  console.log("Started the server");
  await initializeSettings();
  await initFontHandling();
};
var stop = async () => {
  console.log("Stopped the server");
};
DeskThing.on(DESKTHING_EVENTS2.START, start);
DeskThing.on(DESKTHING_EVENTS2.STOP, stop);
//# sourceMappingURL=index.js.map
