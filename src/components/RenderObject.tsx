/**
 * Renders an object as a Json string with an optional title.
 * @param {Object} objectToRender - The object to be rendered.
 * @param {string} [title] - The optional title for the rendered object.
 * @returns {JSX.Element} - The rendered object.
 */
const RenderObject = ({
  objectToRender,
  title
}: {
  objectToRender: any;
  title?: string;
}) => {
  return (
    <div className="border border-gray-200 rounded">
      {title && <h2 className="text-xl font-bold">{title}</h2>}
      <pre>{JSON.stringify(objectToRender, null, 2)}</pre>
    </div>
  );
};

export { RenderObject };
