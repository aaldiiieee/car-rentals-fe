/* eslint-disable @typescript-eslint/no-explicit-any */
function getUniqueSortedValues<T>(
  data: T[] | undefined,
  property: keyof T
): any[] {
  return Array.from(new Set(data?.map((item) => item[property]))).sort(
    (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      }
      return String(a).localeCompare(String(b));
    }
  );
}

export default getUniqueSortedValues;
