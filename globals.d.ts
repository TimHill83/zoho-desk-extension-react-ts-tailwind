type PopupType = 'alert' | 'confirmation';

type ShowPopupOptions = {
  title: string;
  content?: string;
  type: PopupType;
  contentType: 'html';
  color?: 'red' | 'blue';
  okText?: string;
  cancelText?: string;
};

declare const ZOHODESK: {
  get(object: string): Promise<any>;
  extension: any;
  showpopup(options: ShowPopupOptions): Promise<void>;
};
