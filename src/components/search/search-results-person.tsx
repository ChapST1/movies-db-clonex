import type {DbResponse, Person} from "@/types";

import {Title} from "../ui/title";
import {Badge} from "../ui/badge";
import {MediaGrid} from "../media-grid";
import {PersonItem} from "../person/person-item";

import {SearchPagination} from "./search-pagination";

interface CurrentProps {
  page: string;
  q: string;
  response: DbResponse<Person>;
}

export function SearchResultsPerson({page, q, response}: CurrentProps) {
  const {results, total_results, total_pages} = response;

  return (
    <>
      <Title className="static flex items-center justify-center gap-2 ">
        <Badge>{total_results}</Badge>
        Results for {q}
      </Title>

      <MediaGrid>
        {results.map((item) => {
          return <PersonItem key={item.id} person={item} />;
        })}
      </MediaGrid>

      <SearchPagination current={Number(page)} totalPages={total_pages} />
    </>
  );
}
