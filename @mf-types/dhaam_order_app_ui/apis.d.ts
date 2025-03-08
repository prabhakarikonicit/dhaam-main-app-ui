
    export type RemoteKeys = 'dhaam_order_app_ui/OrderDiv';
    type PackageType<T> = T extends 'dhaam_order_app_ui/OrderDiv' ? typeof import('dhaam_order_app_ui/OrderDiv') :any;