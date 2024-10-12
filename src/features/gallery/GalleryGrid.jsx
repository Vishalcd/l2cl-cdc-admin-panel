import GalleryCard from "./GalleryCard";

function GalleryGrid({ heading, gallery }) {
  return (
    <div className="mt-6 rounded-lg px-6 py-6 border dark:bg-stone-800 dark:border-stone-700 border-zinc-200 bg-zinc-50">
      <h2 className=" uppercase text-center text-xl font-bold mb-6 text-zinc-500  dark:text-stone-300 	py-1  relative border-b  dark:border-stone-700 border-zinc-200 pb-2">
        {heading}
      </h2>

      <div className="grid grid-cols-4  gap-6  mt-4">
        {gallery.map((gallery) => {
          return <GalleryCard key={gallery._id} gallery={gallery} />;
        })}
      </div>
    </div>
  );
}

export default GalleryGrid;
