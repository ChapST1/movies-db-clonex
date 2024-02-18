import type {Person} from "@/types";

import PersonSidebar from "./person-sidebar";
import {PersonContent} from "./person-content";

export function Person({person}: {person: Person}) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[300px,1fr]">
      <PersonSidebar person={person} />
      <PersonContent person={person} />
    </div>
  );
}
