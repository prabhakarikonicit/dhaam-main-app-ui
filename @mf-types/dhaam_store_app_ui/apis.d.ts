
    export type RemoteKeys = 'dhaam_store_app_ui/StoreDiv';
    type PackageType<T> = T extends 'dhaam_store_app_ui/StoreDiv' ? typeof import('dhaam_store_app_ui/StoreDiv') :any;