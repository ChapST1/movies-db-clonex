import {GENDERS} from "./services/config";

export function formatPersonGender(gender: keyof typeof GENDERS) {
  return GENDERS[gender];
}
