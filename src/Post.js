const Post = (props) => {
  const data = props.data;

  return (
    <div className="post">
      <ol>
        {data.map((note) => (
          <li key={note.id}>
            <button
              className="deletebutton"
              onClick={() => props.delete(note.id)}
            >
              Delete
            </button>
            <button className="editbutton" onClick={() => props.update(note)}>
              Edit
            </button>
            {note.firstname} - {note.lastname} - {note.phone} - {note.dropdown}{" "}
            - {note.message}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Post;
