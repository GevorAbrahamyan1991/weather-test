export default function Container({ content, customStyle }) {
  return (
    <div className={`${customStyle} container mx-auto py-12`}>{content}</div>
  );
}
