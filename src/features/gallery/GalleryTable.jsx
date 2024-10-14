import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import GalleryGrid from "./GalleryGrid";
import useGallerys from "./useGallery";

function GalleryTable() {
  const { isLoading, gallerys } = useGallerys();

  if (isLoading) return <Spinner />;

  if (!gallerys || !gallerys.length) return <Empty resource="Gallery Images" />;

  const sliderGallery = gallerys?.filter((gallery) => gallery.galleryType === "sliderGallery");
  const gallery = gallerys?.filter((gallery) => gallery.galleryType === "gallery");

  return (
    <>
      <GalleryGrid heading="Memories of L2CL" gallery={gallery} />
      <GalleryGrid heading="Slider Gallery" gallery={sliderGallery} />
    </>
  );
}

export default GalleryTable;
