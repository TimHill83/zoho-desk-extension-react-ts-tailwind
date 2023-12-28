// It probably doesn't make sense to useReact for Background Widgets as they don't render anything.
window.onload = async function () {
  console.log('Sample Extension: background.js is running');

  try {
    const App = await ZOHODESK.extension.onload();

    console.log('Sample Extension: App', App);

    App.instance.on('ticket.reply', handleTicketReply);

    const User = await ZOHODESK.get('user');
    console.log('Sample Extension: User', User);

    // Register a listener for the pageChange event
    App.instance.on('pageChange', function (data: any) {
      console.log('Sample Extension: Page Change Event Fired', data);
    });

    const config = await ZOHODESK.get('extension.config');
    console.log('Sample Extension: Config', config);

    // Register a listener for the ticket_Shift event
    App.instance.on('ticket_Shift', async function (data: any) {
      try {
        const ticket = await ZOHODESK.get('ticket');
        console.log('Sample Extension:', ticket);

        // Show a popup with the ticket details
        console.log('Sample Extension: Showing Popup');
        await ZOHODESK.showpopup({
          title: 'This custom popup is triggered by the background widget.',
          content:
            '<div><p>If you can read this, the ticket details have been fetched.</p><p style="font-weight:bold;">The ticket subject is ' +
            ticket.ticket.subject +
            '.</p></div>',
          type: 'alert',
          contentType: 'html',
          color: 'blue'
        });

        console.log('Sample Extension: Popup Closed');

        console.log('Sample Extension: Opening the Left Tab Widget');

        await ZOHODESK.invoke('ROUTE_TO', {
          entity: 'extension',
          location: 'desk.ticket.detail.lefttab', //invoke location
          name: 'Sample Left Tab Widget' //name of the widget
        });

        console.log('Sample Extension: Opened the Left Tab Widget');
      } catch (err) {
        console.log('Sample Extension: Error getting ticket details');
      }
    });
  } catch (err) {
    console.log('Sample Extension: Error loading App');
  }
};

type TicketReplyData = {
  toAddress: string;
  ticketId: string;
  ticketSubject: string;
  threadId: string;
  fromAddress: string;
  ccAddress: string;
  content: string;
};

const handleTicketReply = async (data: TicketReplyData) => {
  const tableContent = `
  <style>
  th {min-width: 150px; text-align: left; padding-right: 10px;}
  </style>
  <table>
      <tr>
        <th>To Address</th>
        <td>${data.toAddress}</td>
      </tr>
      <tr>
        <th>Ticket ID</th>
        <td>${data.ticketId}</td>
      </tr>
      <tr>
        <th>Ticket Subject</th>
        <td>${data.ticketSubject}</td>
      </tr>
      <tr>
        <th>Thread ID</th>
        <td>${data.threadId}</td>
      </tr>
      <tr>
        <th>From Address</th>
        <td>${data.fromAddress}</td>
      </tr>
      <tr>
        <th>CC Address</th>
        <td>${data.ccAddress}</td>
      </tr>
      <tr>
        <th>Content</th>
        <td>${data.content}</td>
      </tr>
    </table>
  `;

  const result = await ZOHODESK.showpopup({
    type: 'confirmation',
    title: `Are you sure you want to send a response to Ticket?`,
    content: tableContent,
    okText: 'Send',
    cancelText: "Don't Send",
    contentType: 'html'
  });

  return result;
};
