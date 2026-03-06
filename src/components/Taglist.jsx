import "./TagList.css";

const Tag = ({ tag }) => {
  return (
    <span key={tag} className="tag">
      {tag}
    </span>
  );
};

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagList;
