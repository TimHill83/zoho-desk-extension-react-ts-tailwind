import { useEffect, useState } from 'react';
import PopupButton from './PopupButton';
import { RenderObject } from './RenderObject';
import { Button } from './Button';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('not set!');
  const [ticket, setTicket] = useState({});
  const [app, setApp] = useState<any>(null);

  useEffect(() => {
    // waiting the ZOHODESK extension loading using it
    ZOHODESK.extension.onload().then((App: any) => {
      setLoading(false);
      ZOHODESK.get('ticket.email').then((data) => {
        setEmail(data['ticket.email']);
      });
      ZOHODESK.get('ticket').then((data) => {
        setTicket(data['ticket']);
      });
      setApp(App);

      /*	
					//To Set data in Desk UI Client
					ZOHODESK.set('ticket.comment', { 'content': "Test comment" }).then(function (res) {
						//response Handling
					}).catch(function (err) {
						//error Handling
					});
		
					//Access Data Storage for an extension
					//Get the saved data of an extension from data storage
					ZOHODESK.get('database', { 'key': 'key1', 'queriableValue': 'value1' }).then(function (response) {
						//response Handling
					}).catch(function (err) {
						//error Handling
					})            
					
					//Save data in to data staorage
					ZOHODESK.set('database', { 'key': 'key_1', 'value': { 'id': 123 }, 'queriableValue': 'value1' }).then(function (response) {
						//response Handling
					}).catch(function (err) {
						//error Handling
					})
		
					//Change tabs in ticket detailview
					ZOHODESK.invoke('ROUTE_TO', 'ticket.attachments');
		
					//To Insert the content in the current opened reply editor from extension
					ZOHODESK.invoke('Insert', 'ticket.replyEditor', { content: "<p>your content</p>" });
		
					//To listen to an event in desk
					App.instance.on('comment_Added', function(data){
						//data handling 
					});
		
					//To access locale
					App.locale;
		
					//To access localresources
					App.localeResource            
						
					//To Know more on these, please read the documentation
				*/
    });
  });

  const setTicketComment = () => {
    console.log('setTicketComment');
    //To Set data in Desk UI Client
    ZOHODESK.set('ticket.comment', { comment: 'Test comment' })
      .then(function (res) {
        //response Handling
      })
      .catch(function (err) {
        //error Handling
      });
  };

  const setTicketReply = () => {
    console.log('setTicketReply');
    ZOHODESK.invoke('INSERT', 'ticket.replyEditor', {
      value:
        '<div style="border: 1px solid #cccccc; border-radius:5px; padding:5px;"><h1 style="font-size: 24px">Here is some HTML Formatted Content</h1><p style="font-size:16px">Here is a sub paragraph</p></div>',
      type: 'replace'
    });

    //To Set data in Desk UI Client
    // ZOHODESK.set('ticket.reply', {
    //   //value: '<h1>Hello</h1><p>THis is an HTML Reply</p>',
    //   reply: 'This is a plain text reply'
    //   //type: 'replace'
    // })
    //   .then(function (res) {
    //     console.log('success', res); //response Handling
    //   })
    //   .catch(function (err) {
    //     //error Handling
    //     console.log('fail', err);
    //   });
  };

  const openModal = () => {
    if (!app?.instance) return;
    app.instance
      .modal({
        url: '/app/modal.html',
        title: 'Modal box'
      })
      .then(function (modalInfo: any) {
        var modalInstance = app.instance.getWidgetInstance(modalInfo.widgetID);
        modalInstance.on('modal.opened', function (data: any) {
          console.log('modal opened ++++++++++++++++++');
          console.log('modal instance data', modalInstance);
        });
      })
      .catch(function (err: any) {
        console.log(err, 'Modal error');
      });
  };

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
        <button
          className="inline-block m-1 bg-blue-600 text-white rounded p-1 hover:bg-blue-800"
          onClick={setTicketReply}
        >
          Set Ticket Reply
        </button>
        <RenderObject objectToRender={ticket} title="Ticket" />
      </>
    );
  }
};

export default App;
