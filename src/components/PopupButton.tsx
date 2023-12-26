import { Button, ButtonColor } from './Button';

type PopupButtonProps = {
  title: string;
  content: string;
  type: 'alert' | 'confirmation';
  contentType: 'html';
  color?: ButtonColor;
  okButtonColor: 'red' | 'blue';
  okText?: string;
  cancelText?: string;
};

const PopupButton = (props: PopupButtonProps) => {
  const showPopup = () => {
    ZOHODESK.showpopup({
      title: props.title,
      content: props.content,
      type: props.type,
      color: props.okButtonColor,
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
    <Button color={props.color ?? 'blue'} onClick={showPopup}>
      {props.title}
    </Button>
  );
};

export default PopupButton;
