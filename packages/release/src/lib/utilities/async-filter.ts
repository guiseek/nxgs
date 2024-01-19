export const asyncFilter = async <T>(
  arr: T[],
  predicate: (item: T) => Promise<boolean>
) => {
  const chunkSize = 2000;

  const chunks = new Array(Math.ceil(arr.length / chunkSize))
    .fill(null)
    .map((_, index) => arr.slice(index * chunkSize, (index + 1) * chunkSize));

  const results = [];

  for (const chunk of chunks) {
    const chunkResults = await Promise.all(
      chunk.map((item) => predicate(item).then((result) => ({ item, result })))
    );

    const filteredResults = chunkResults.filter(({ result }) => result);
    results.push(...filteredResults.map(({ item }) => item));
  }

  return results;
};
