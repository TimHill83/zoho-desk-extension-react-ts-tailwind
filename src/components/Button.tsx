export type ButtonColor = 'emerald' | 'blue' | 'red' | 'slate';

export type ButtonProps<T extends () => void> = {
  onClick: T;
  color: ButtonColor;
  children?: React.ReactNode;
};
export function Button<T extends () => void>(props: ButtonProps<T>) {
  const { onClick, color, children } = props;

  let buttonColorClass = '';
  switch (color) {
    case 'emerald':
      buttonColorClass = 'bg-emerald-600 hover:bg-emerald-800';
      break;
    case 'blue':
      buttonColorClass = 'bg-blue-600 hover:bg-blue-800';
      break;
    case 'red':
      buttonColorClass = 'bg-red-600 hover:bg-red-800';
      break;
    case 'slate':
      buttonColorClass = 'bg-slate-600 hover:bg-slate-800';
      break;
    default:
      break;
  }

  return (
    <button
      className={`inline-block  text-white rounded px-2 py-1 ${buttonColorClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
