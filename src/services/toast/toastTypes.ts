export type ToastType = 'success' | 'error';
export type ToastPosition = 'top' | 'bottom';

// Regra de como meu toast vai parecer
export interface Toast {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  action?: {
    title: 'string';
    onPress: () => void;
  };
}

// Como eu vou utilizar meu toast
export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
