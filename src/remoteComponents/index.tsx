import React from "react";
import ErrorBoundary from "../errorBoundary";
const RemoteOrderDiv = React.lazy(() => import('dhaam_order_app_ui/OrderDiv'));

export const RemoteOrderDivComponent = () => {
    return (
      <ErrorBoundary errorMessage="Remote Order Div is not available">
        <React.Suspense fallback={<p>Loading Remote Component ...</p>}>
          <RemoteOrderDiv />
        </React.Suspense>
      </ErrorBoundary>
    );
  };