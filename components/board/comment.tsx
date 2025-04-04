import Profile from "../common/Profile";
import { EditSelect } from "../Select";

interface Props {
  comment: Comment;
}
export default function Comment({ comment }: Props) {
  const handleSelect = () => {};
  return (
    <div>
      <div>
        {comment.content}
        <EditSelect onChange={handleSelect} />
      </div>
      <div>
        <Profile value={comment} />
      </div>
    </div>
  );
}
