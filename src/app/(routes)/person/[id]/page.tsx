import type {Person as PersonType} from "@/types";

import {ErrorBoundary} from "next/dist/client/components/error-boundary";

import {getPersonInfo} from "@/lib/services/person/get-person-info";
import {Person} from "@/components/details/person-details";
import {Error} from "@/components/error";

export default async function PeoplePage({params: {id}}: {params: {id: PersonType["id"]}}) {
  const person = (await getPersonInfo({id})) as PersonType;

  return (
    <ErrorBoundary errorComponent={Error}>
      <Person person={person} />
    </ErrorBoundary>
  );
}
