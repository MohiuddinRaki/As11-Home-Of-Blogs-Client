import PropTypes from "prop-types";

const CommentSection = ({ specifyComment }) => {
  const { userName, userPhoto, comments } = specifyComment;
  return (
    <div className="gap-4 p-6 flex">
      <div>
        <img
          className="rounded-full h-14 w-14"
          src={userPhoto}
          alt={userName}
        />
      </div>

      <div className="bg-base-300 rounded-xl p-2">
        <h2 className="text-red-400">{userName}</h2>
        <h1>{comments}</h1>
      </div>
    </div>
  );
};

export default CommentSection;

CommentSection.propTypes = {
  specifyComment: PropTypes.object.isRequired,
};
