import Tasks from "./Tasks";

function TaskItems({ todoitemslist, ondelclick }) {
  return (
    <>
      {todoitemslist.map((item) => (
        <Tasks
          key={item.name}
          Task={item.name}
          Date={item.date}
          onDelclick={ondelclick}
        ></Tasks>
      ))}
    </>
  );
}
export default TaskItems;
