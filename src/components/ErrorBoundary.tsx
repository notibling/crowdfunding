import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 text-center">
          <div className="max-w-md">
            <h1 className="text-slate-900 dark:text-white text-2xl font-black mb-4 uppercase tracking-tighter">
              Algo no salió como esperábamos
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
              Estamos trabajando para que la experiencia sea fluida. Por favor, intenta recargar la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#0070BA] text-slate-900 dark:text-white font-black text-xs tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-white hover:text-[#0070BA] transition-all"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
