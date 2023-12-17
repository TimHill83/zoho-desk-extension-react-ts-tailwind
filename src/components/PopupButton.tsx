type PopupButtonProps = {
  title: string;
  content: string;
  type: 'alert' | 'confirmation';
  contentType: 'html';
  color?: 'red' | 'blue';
  okText?: string;
  cancelText?: string;
};

const PopupButton = (props: PopupButtonProps) => {
  const showPopup = () => {
    ZOHODESK.showpopup({
      title: props.title,
      content: props.content,
      type: props.type,
      color: props.color,
      okText: props.okText,
      cancelText: props.cancelText,
      contentType: 'html'
    }).then(
      (res) => {
        console.log('success');
      },
      (err) => {
        console.log('err');
      }
    );
  };

  //   title: props.title,,
  //   content: 'This is a Popup —check it out!',
  //   type: 'alert',
  //   contentType: 'html',
  //   color: 'blue',
  //   okText: 'proceed'
  //cancelText: 'stop'
  //     ).then(
  //       (res) => {
  //         console.log('success');
  //       },
  //       (err) => {
  //         console.log('err');
  //       }
  //     );
  //   };

  return (
    <div>
      <button onClick={showPopup}>{props.title}</button>
    </div>
  );
};

export default PopupButton;
