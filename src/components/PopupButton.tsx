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

  return (
    <div>
      <button
        className="inline-block m-1 bg-emerald-600 text-white rounded p-1 hover:bg-emerald-800"
        onClick={showPopup}
      >
        {props.title}
      </button>
    </div>
  );
};

export default PopupButton;
