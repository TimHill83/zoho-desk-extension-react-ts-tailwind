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
  set: (key: string, value: any) => Promise<{ status: string }>; //Note: This was done using AI and may not be accurate or complete
  invoke: (
    //Note: This was done using AI and may not be accurate or complete
    action: string,
    target: string,
    options: { value: string; type?: string }
  ) => void;
};
