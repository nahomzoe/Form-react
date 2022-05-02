const Post = (props) => {
  const data = props.data;

  return (
    <div className="post">
      <ol>
        {data.map((note) => (
          <li key={note.id}>
            {note.firstname} | {note.lastname} | {note.phone} | {note.dropdown}{" "}
            | {note.message}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Post;
