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

type RouteToLocation = {
  entity: 'ticket' | 'contact' | 'account' | 'call' | 'task' | 'event';
};

declare const ZOHODESK: {
  get(object: string): Promise<any>;
  extension: any;
  showpopup(options: ShowPopupOptions): Promise<void>;
  set: (key: string, value: any) => Promise<{ status: string }>; //Note: This was done using AI and may not be accurate or complete
  invoke: {
    (action: 'INSERT', target: string, options: InsertOptions): void;
    (action: 'ROUTE_TO', options: RouteToOptions): void;
    (action: 'MODAL_CLOSE'): void;
  };
};

type InsertOptions = {
  value: string;
  type?: string;
};
type RouteToOptions =
  | {
      entity: 'ticket' | 'contact' | 'account' | 'call' | 'task' | 'event';
      id: string;
      page?: 'add' | 'edit' | 'dv';
    }
  | {
      entity: 'extension';
      location:
        | 'desk.ticket.detail.rightpanel'
        | 'desk.topband'
        | 'desk.ticket.detail.subtab'
        | 'desk.ticket.detail.lefttab'
        | 'desk.bottomband'
        | 'desk.extension.telephony';
      name: string;
    };
