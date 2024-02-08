export async function fetcher<T>(...args) {
  try {
    const res = await fetch(...args);
    const data = (await res.json()) as T;

    return data;
  } catch (error) {
    return [];
  }
}
