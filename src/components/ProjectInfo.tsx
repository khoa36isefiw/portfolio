export const ProjectInfo = ({
  title,
  content,
}: {
  title?: string;
  content?: string | string[] | undefined;
}) => {
  return (
    <div className="mb-1 flex  items-center text-[18px]">
      <strong className="mr-1 text-warning-msg-text">{title}: </strong>{" "}
      {content}
    </div>
  );
};
