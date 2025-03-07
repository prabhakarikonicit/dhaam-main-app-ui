
    export type RemoteKeys = 'dhaam_order_app_ui/OrderButton';
    type PackageType<T> = T extends 'dhaam_order_app_ui/OrderButton' ? typeof import('dhaam_order_app_ui/OrderButton') :any;