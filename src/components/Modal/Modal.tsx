import { Button } from '../Button';

const Modal = () => {
  return (
    <div>
      <h2 className="text-2xl text-blue-600">Modal!</h2>
      <Button
        color="blue"
        onClick={() => {
          ZOHODESK.invoke('MODAL_CLOSE');
        }}
      >
        Close Modal
      </Button>
    </div>
  );
};

export { Modal };
