import GalleryTable from "../features/gallery/GalleryTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Gallery() {
  return (
    <>
      <Row>
        <Heading>Gallery</Heading>
      </Row>
      <GalleryTable />
    </>
  );
}

export default Gallery;
