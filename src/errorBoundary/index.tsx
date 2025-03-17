import React , { Component, ErrorInfo, ReactNode}from 'react';

interface Props {
    children: ReactNode;
    errorMessage:string
  }
  
  interface State {
    hasError: boolean;
  }
  

class ErrorBoundary extends Component<Props, State>{
    public state: State = {
        hasError: false
      };
    
    static getDerivedStateFromError(_:Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
      // You can also log the error to an error reporting service
      console.log("Error Catched by ErrorBoundary: ", error, errorInfo);
    }
  
    render() {
      
        if (this.state.hasError) {
        // You can render any custom fallback UI
        
        return <p>{this.props.errorMessage}</p>;
     
      }
      
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary;