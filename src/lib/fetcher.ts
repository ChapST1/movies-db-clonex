export async function fetcher<T>(input: string | URL | globalThis.Request, init?: RequestInit) {
  try {
    const res = await fetch(input, init);
    const data = (await res.json()) as T;

    return data;
  } catch (error) {
    return [];
  }
}
