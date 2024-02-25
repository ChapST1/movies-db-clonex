"use client";

import {usePathname, useSearchParams} from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {createPagination} from "@/lib/create-pagination";

export function SearchPagination({current, totalPages}: {current: number; totalPages: number}) {
  const pathname = usePathname();
  const params = useSearchParams();

  const searchParams = new URLSearchParams(params.toString());
  const pagination = createPagination(current, totalPages);

  if (totalPages <= 1) return null;

  const prevPage = () => {
    searchParams.set("page", `${current - 1 || 1}`);

    return `${pathname}?${searchParams.toString()}`;
  };

  const nextPage = () => {
    searchParams.set("page", `${current + 1 > pagination.length ? current : current + 1}`);

    return `${pathname}?${searchParams.toString()}`;
  };

  return (
    <Pagination className="my-4 w-[max-content]  rounded-md border border-border p-2">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className="hidden md:flex" href={prevPage()} />
        </PaginationItem>

        {pagination.map((item: string | number) => {
          if (item === "...") {
            return (
              <PaginationItem key={item}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          // set page
          searchParams.set("page", `${item}`);
          const newUrl = `${pathname}?${searchParams.toString()}`;

          return (
            <PaginationItem key={item}>
              <PaginationLink href={newUrl} isActive={current === item}>
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext className="hidden md:flex" href={nextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
