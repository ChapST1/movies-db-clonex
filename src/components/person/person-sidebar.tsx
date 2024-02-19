import type {Person} from "@/types";

import {generateFullPath} from "@/lib/create-full-path";
import {formatPersonGender} from "@/lib/format-person-gender";

import {Badge} from "../ui/badge";

export default function PersonSidebar({person}: {person: Person}) {
  const {profile_path, gender, birthday, place_of_birth, deathday, also_known_as, name} = person;

  const profilePath = generateFullPath({profile: {path: profile_path, size: "w185"}});
  const newGender = formatPersonGender(gender);

  return (
    <nav className=" sticky top-[120px] h-[calc(100dvh-120px)] overflow-hidden overflow-y-auto border-r border-border md:top-16 md:h-[calc(100dvh-64px)]">
      <picture className="m-auto my-4 block w-[max-content] rounded-md bg-accent p-2">
        <img alt={name} className="rounded-sm" src={profilePath} />
      </picture>

      <div>
        <h2 className="pb-4 text-xl font-bold">Información personal</h2>
        <div className="flex flex-col gap-2 *:*:font-normal *:font-semibold *:*:text-white/60">
          <p>
            Gender:
            <span className="px-1">{newGender}</span>
          </p>
          <p>
            Birthday:
            <span className="px-1">{birthday}</span>
          </p>
          <p>
            Place of birth:
            <span className="px-1">{place_of_birth}</span>
          </p>

          {deathday ? (
            <p>
              Birthday:
              <span className="px-1">{birthday}</span>
            </p>
          ) : null}
        </div>

        <div className="py-2">
          <p className="font-semibold">Also kwow as:</p>
          <div className="flex flex-wrap items-center justify-start gap-2 py-2 text-white/90">
            {also_known_as?.map((item) => {
              return <Badge key={item}>{item}</Badge>;
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
