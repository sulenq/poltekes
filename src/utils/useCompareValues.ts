const useCompareValues = (key: string, order: "asc" | "desc") => {
  return (a: any, b: any): number => {
    const valueA = key === "harga" ? a[key] : a[key].toLowerCase();
    const valueB = key === "harga" ? b[key] : b[key].toLowerCase();

    if (typeof valueA === "string" && typeof valueB === "string") {
      return order === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return order === "asc" ? valueA - valueB : valueB - valueA;
  };
};

export default useCompareValues;
