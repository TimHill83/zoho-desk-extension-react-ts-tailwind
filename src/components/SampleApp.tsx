import { useCallback, useEffect, useState } from 'react';
import PopupButton from './PopupButton';
import { RenderObject } from './RenderObject';
import { Button } from './Button';
import { useContext } from 'react';
import { ZohoDeskContext } from '../ZohoDeskContext/ZohoDeskContext';
import { OpenLocationButton } from './OpenLocationButton/OpenLocationButton';

const SampleApp = () => {
  const [ticket, setTicket] = useState({});

  const { app, loading } = useContext(ZohoDeskContext);
  const instance = app?.instance;
  //Get the ticket details

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const ticket = await ZOHODESK.get('ticket');
        setTicket(ticket);
      } catch (error) {
        // Handle error
      }
    };

    fetchTicket();
  }, []);

  useEffect(() => {
    if (!instance) return;
    console.log('Sample Extension: Adding Comment Listener');
    instance.on('ticket_comment.add', function (data: any) {
      console.log('Sample Extension: ticket_comment.add', data);
    });
  }, [instance]);

  const setDeskData = useCallback(async (key: string, value: any) => {
    try {
      await ZOHODESK.set(key, value);
      // Handle response
    } catch (error) {
      // Handle error
    }
  }, []);

  const setTicketComment = useCallback(
    () => setDeskData('ticket.comment', { comment: 'Test comment' }),
    [setDeskData]
  );

  const setTicketReply = useCallback(() => {
    console.log('Sample Extension: setTicketReply');
    ZOHODESK.invoke('INSERT', 'ticket.replyEditor', {
      value:
        '<div style="border: 1px solid #cccccc; border-radius:5px; padding:5px;"><h1 style="font-size: 24px">Here is some HTML Formatted Content</h1><p style="font-size:16px">Here is a sub paragraph</p></div>',
      type: 'replace'
    });
  }, []);

  const openModal = useCallback(async () => {
    if (!instance) return;
    try {
      const modalInfo = await instance.modal({
        url: '/app/modal.html',
        title: 'Modal box'
      });
      var modalInstance = instance.getWidgetInstance(modalInfo.widgetID);
      modalInstance.on('modal.opened', function (data: any) {
        console.log('Sample Extension: modal opened ++++++++++++++++++');
        console.log('Sample Extension: modal instance data', modalInstance);
      });
    } catch (error) {
      // Handle error
    }
  }, [instance]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <h2 className="text-xl font-bold p-1 bg-blue-200 text-center">
          React Extension with Tailwind Samples
        </h2>

        <div className="flex flex-wrap gap-1 my-1">
          <PopupButton
            title="Alert Button"
            content="This is an Alert Botton"
            type="alert"
            contentType={'html'}
            color="emerald"
            okButtonColor="red"
            okText="OK"
          />
          <PopupButton
            title="Confirmation Button"
            content="This is a Confirmation Button"
            type="confirmation"
            contentType={'html'}
            color="emerald"
            okButtonColor="blue"
            okText="Carry On"
            cancelText="Stop"
          />
          <Button color="blue" onClick={openModal}>
            Open a Modal
          </Button>
          <Button color="blue" onClick={setTicketComment}>
            Set Ticket Comment
          </Button>
          <Button color="slate" onClick={setTicketReply}>
            Set Ticket Reply
          </Button>
          <OpenLocationButton
            location={{
              entity: 'extension',
              location: 'desk.ticket.detail.lefttab',
              name: 'Sample Left Tab Widget'
            }}
          >
            Open Left Tab
          </OpenLocationButton>
          <OpenLocationButton
            location={{
              entity: 'extension',
              location: 'desk.ticket.detail.rightpanel',
              name: 'Sample Right Panel Widget'
            }}
            color="emerald"
          >
            Open Right Panel
          </OpenLocationButton>
          <RenderObject objectToRender={ticket} title="Ticket" />
        </div>
      </>
    );
  }
};

export default SampleApp;
