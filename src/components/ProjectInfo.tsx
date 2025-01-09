export const ProjectInfo = ({
  title,
  content,
}: {
  title?: string;
  content?: string | string[] | undefined;
}) => {
  return (
    <div className="mb-1 flex items-center text-[18px]">
      <strong className="text-warning-msg-text mr-1">{title}: </strong>{" "}
      {content}
    </div>
  );
};
