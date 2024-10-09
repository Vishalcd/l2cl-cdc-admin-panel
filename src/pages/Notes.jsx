import NotesTable from "../features/notes/NotesTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Notes() {
  return (
    <>
      <Row>
        <Heading>All Notes</Heading>
      </Row>
      <NotesTable />
    </>
  );
}

export default Notes;
