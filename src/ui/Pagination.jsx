import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ButtonNavigation from "./ButtonNavigation";
import Row from "./Row";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/helper";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1 || currentPage > pageCount || currentPage < 1) return null;

  return (
    <Row moreClasses=" px-4 py-2 border-t dark:border-stone-700 border-zinc-200">
      <p className="text-sm">
        Showing <b>{(currentPage - 1) * PAGE_SIZE + 1}</b> to{" "}
        <b>{currentPage === pageCount ? count : currentPage * PAGE_SIZE}</b> of {count} results
      </p>

      <Row moreClasses="gap-2">
        <ButtonNavigation onClick={prevPage} disabled={currentPage === 1}>
          <IconChevronLeft width={20} height={20} stroke={1.5} />
          Previous
        </ButtonNavigation>
        <ButtonNavigation onClick={nextPage} disabled={currentPage === pageCount}>
          Next
          <IconChevronRight width={20} height={20} stroke={1.5} />
        </ButtonNavigation>
      </Row>
    </Row>
  );
}

export default Pagination;
