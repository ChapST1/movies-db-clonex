import {GENDERS} from "./services/config/person";

export function formatPersonGender(gender: keyof typeof GENDERS) {
  return GENDERS[gender];
}
