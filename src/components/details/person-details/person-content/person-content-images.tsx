import type {Person, PersonProfiles} from "@/types";

import {Title} from "@/components/ui/title";
import {generateFullPath} from "@/lib/create-full-path";
import {MediaContainer} from "@/components/ui/media-container";
import {getPersonGallery} from "@/lib/services/person/get-person-gallery";
import {MediaGrid} from "@/components/media-grid";

export async function PersonContentImages({id, owner}: {id: Person["id"]; owner: Person["name"]}) {
  const {profiles} = (await getPersonGallery({id})) as PersonProfiles;

  return (
    <div>
      <Title>Profiles</Title>

      <MediaContainer mediaLength={profiles.length}>
        <MediaGrid>
          {profiles.map(({file_path}, index) => {
            const path = generateFullPath({profile: {path: file_path, size: "w185"}});

            return (
              <picture key={index} className="block overflow-hidden rounded-md">
                <img alt={`${owner} `} className="w-full" loading="lazy" src={path} />
              </picture>
            );
          })}
        </MediaGrid>
      </MediaContainer>
    </div>
  );
}