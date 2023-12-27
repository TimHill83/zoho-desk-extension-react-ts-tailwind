import { Button, ButtonColor } from '../Button';

export type OpenLocationButtonProps = {
  location: RouteToOptions;
  children?: React.ReactNode;
  color?: ButtonColor;
};

export const OpenLocationButton = ({
  location,
  children = 'Open Location',
  color = 'blue'
}: OpenLocationButtonProps) => {
  const openLocation = () => {
    ZOHODESK.invoke('ROUTE_TO', location);
  };

  return (
    <Button color="blue" onClick={openLocation}>
      {children}
    </Button>
  );
};
