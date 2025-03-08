import React from "react";
import ErrorBoundary from "../errorBoundary";
const RemoteOrderDiv = React.lazy(() => import('dhaam_order_app_ui/OrderDiv'));
const RemoteSettingsDiv = React.lazy(() => import('dhaam_settings_app_ui/SettingsDiv'));
const RemoteStoreDiv = React.lazy(() => import('dhaam_store_app_ui/StoreDiv'));
export const RemoteOrderDivComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Order Div is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteOrderDiv />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteSettingsDivComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Settings Div is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteSettingsDiv />
        </React.Suspense>
      </ErrorBoundary>
    );
  };

  export const RemoteStoreDivComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Store Div is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteStoreDiv />
        </React.Suspense>
      </ErrorBoundary>
    );
  };