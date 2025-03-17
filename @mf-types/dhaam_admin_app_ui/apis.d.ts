
    export type RemoteKeys = 'dhaam_admin_app_ui/AdminDiv';
    type PackageType<T> = T extends 'dhaam_admin_app_ui/AdminDiv' ? typeof import('dhaam_admin_app_ui/AdminDiv') :any;