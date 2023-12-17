const RenderObject = ({
  objectToRender,
  title
}: {
  objectToRender: any;
  title?: string;
}) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <pre>{JSON.stringify(objectToRender, null, 2)}</pre>
    </div>
  );
};

export { RenderObject };
