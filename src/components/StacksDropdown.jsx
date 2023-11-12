import CreateStack from "./CreateStack";
import StackCheck from "./StackCheck";

const StacksDropdown = ({ movie, stacks, setStacks }) => {
  return (
    <div className="dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className="btn btn-primary glass">Add</label>
      <ul tabIndex={0} className="dropdown-content w-[300px] rounded-lg menu z-[1] shadow bg-base-100">
        {stacks.map((stack) => (
          <StackCheck stack={stack} movieId={movie.id} key={stack._id} />
        ))}
        <CreateStack id={movie.id} setStacks={setStacks} />
      </ul>
    </div>
  )
}
export default StacksDropdown;