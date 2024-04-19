import type {Person as PersonType} from "@/types";

import {ModalContent, ModalContentSidebar} from "@/components/ui/modal";
import {getPersonInfo} from "@/lib/services/person/get-person-info";

import {PersonSidebar} from "../person-details/person-sidebar";
import {PersonContent} from "../person-details/person-content";

export async function PersonDetailModal({id}: {id: PersonType["id"]}) {
  const personInfo = (await getPersonInfo({id})) as PersonType;

  return (
    <ModalContent>
      <section className="grid grid-cols-1 gap-3 px-2 md:grid-cols-[300px,1fr]">
        <ModalContentSidebar className="md:border-l-0 md:border-r *:md:top-0 *:md:h-[calc(100dvh-64px)]">
          <PersonSidebar person={personInfo} />
        </ModalContentSidebar>
        <PersonContent person={personInfo} />
      </section>
    </ModalContent>
  );
}
