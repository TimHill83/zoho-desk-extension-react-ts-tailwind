import { ZohoDeskProvider } from '../../ZohoDeskContext/ZohoDeskProvider';
import { Button } from '../Button';
import PopupButton from '../PopupButton';
import { RenderObject } from '../RenderObject';
import { ZohoDeskContext } from '../../ZohoDeskContext/ZohoDeskContext';
import { useContext } from 'react';

const Modal = () => {
  return (
    <div>
      <h2 className="text-2xl text-blue-600">Modal!</h2>
      <Button
        color="red"
        onClick={() => {
          ZOHODESK.invoke('MODAL_CLOSE');
        }}
      >
        Close Modal
      </Button>
      <ShowAppDetails />
      <ZohoDeskProvider>
        <PopupButton
          title="Alert Button"
          content="This is an Alert Botton"
          type="alert"
          contentType={'html'}
          okButtonColor="red"
          okText="OK"
        />
      </ZohoDeskProvider>
    </div>
  );
};

export { Modal };

const ShowAppDetails = () => {
  const { app } = useContext(ZohoDeskContext);

  if (!app) {
    return (
      <div>
        Error: ShowAppDetails component must be within a ZohoDeskProvider
        context provider.
      </div>
    );
  }

  console.log('Sample Extension: app', app);
  app.instance.on('ticket_comment.add', function (data: any) {
    console.log('Sample Extension: ticket_comment.add', data);
  });

  return (
    <div>
      <h2 className="text-2xl text-blue-600">App Details</h2>
      <RenderObject objectToRender={app.meta.userPreferences} />
    </div>
  );
};
