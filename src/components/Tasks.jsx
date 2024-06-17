import { MdAutoDelete } from "react-icons/md";
function Tasks({ Task, Date, onDelclick }) {
  return (
    <div className="container">
      <div className="row myrow">
        <div className="col-6">{Task}</div>
        <div className="col-4">{Date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger mybutton"
            onClick={() => onDelclick(Task)}
          >
           <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
