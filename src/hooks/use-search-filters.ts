import type {SearchFilters} from "@/types";

import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export function useSearchFilters(paramsKey: SearchFilters) {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState(() => {
    return params.has(paramsKey);
  });

  useEffect(() => {
    const newSearchParams = new URLSearchParams(params.toString());

    if (!active) {
      newSearchParams.delete(paramsKey);
      router.push(`${pathname}?${newSearchParams.toString()}`);

      return;
    }

    newSearchParams.set(paramsKey, "true");

    router.push(`${pathname}?${newSearchParams.toString()}`, {scroll: false});
  }, [active, paramsKey, pathname, router]);//eslint-disable-line

  return {
    active,
    setActive,
  };
}
