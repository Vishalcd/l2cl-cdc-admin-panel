import AddNotes from "./AddNotes";
import NoteCard from "./NoteCard";
import Spinner from "../../ui/Spinner";
import useNotes from "./useNotes";
import Empty from "../../ui/Empty";

function NotesTable() {
  const { notes, isLoading } = useNotes();

  const allNotes = notes;

  if (isLoading) return <Spinner />;

  if (!allNotes || !allNotes.length) return <Empty resource="Notes" />;

  return (
    <>
      <div className="mt-6 grid grid-cols-3 gap-3 mb-4">
        {allNotes.map((note) => {
          return <NoteCard note={note} key={note._id} />;
        })}
      </div>

      <AddNotes />
    </>
  );
}

export default NotesTable;
