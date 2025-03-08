
    export type RemoteKeys = 'dhaam_settings_app_ui/SettingsDiv';
    type PackageType<T> = T extends 'dhaam_settings_app_ui/SettingsDiv' ? typeof import('dhaam_settings_app_ui/SettingsDiv') :any;