import { useCallback, useEffect, useState } from 'react';
import PopupButton from './PopupButton';
import { RenderObject } from './RenderObject';
import { Button } from './Button';
import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import { useContext } from 'react';
import { ZohoDeskContext } from '../ZohoDeskContext/ZohoDeskContext';

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
    console.log('Adding Comment Listener');
    instance.on('ticket_comment.add', function (data: any) {
      console.log('ticket_comment.add', data);
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
    console.log('setTicketReply');
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
        console.log('modal opened ++++++++++++++++++');
        console.log('modal instance data', modalInstance);
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
        <h2 className="text-xl font-bold">
          React Extension with Tailwind Samples
        </h2>
        <PopupButton
          title="Alert Button"
          content="This is an Alert Botton"
          type="alert"
          contentType={'html'}
          color="red"
          okText="OK"
        />
        <PopupButton
          title="Confirmation Button"
          content="This is a Confirmation Button"
          type="confirmation"
          contentType={'html'}
          color="blue"
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
        <RenderObject objectToRender={ticket} title="Ticket" />
      </>
    );
  }
};

export default SampleApp;
