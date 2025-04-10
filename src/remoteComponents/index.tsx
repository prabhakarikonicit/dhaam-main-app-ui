import React from "react";
import ErrorBoundary from "../errorBoundary";
const RemoteOrders = React.lazy(() => import('dhaam_order_app_ui/Orders'));
const RemoteStores = React.lazy(() => import('dhaam_store_app_ui/Stores'));
const RemoteSettingsConfigs = React.lazy(() => import('dhaam_settings_app_ui/ConfigurationsComponent'));
const RemoteSettingsMarketPlaceDesign = React.lazy(() => import('dhaam_settings_app_ui/MarketPlaceDesignComponent'));
const RemoteSettingsIntegration = React.lazy(() => import('dhaam_settings_app_ui/IntegrationComponent'));
const RemoteSettingsGeneral = React.lazy(() => import('dhaam_settings_app_ui/GeneralComponent'));
// const RemoteAdminDiv = React.lazy(() => import('dhaam_admin_app_ui/AdminDiv'));
export const RemoteOrdersComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Orders is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteOrders />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteStoresComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Stores is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteStores />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteSettingsConfigsComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Settings Configs is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteSettingsConfigs />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteSettingsMarketPlaceDesignComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Settings Market Place Design is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteSettingsMarketPlaceDesign />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteSettingsIntegrationComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Settings Integration is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteSettingsIntegration />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteSettingsGeneralComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Settings General is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteSettingsGeneral />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  // export const RemoteAdminDivComponent = () => {
  //   return (
  //     <ErrorBoundary errorMessage="Remote Admin Div is not available">
  //       <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
  //         <RemoteAdminDiv />
  //       </React.Suspense>
  //     </ErrorBoundary>
  //   );
  // };