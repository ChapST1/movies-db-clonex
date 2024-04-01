import type {Person as PersonType} from "@/types";

import {getPersonInfo} from "@/lib/services/person/get-person-info";
import {Person} from "@/components/details/person-details";

export default async function PeoplePage({params: {id}}: {params: {id: PersonType["id"]}}) {
  const person = (await getPersonInfo({id})) as PersonType;

  return <Person person={person} />;
}
