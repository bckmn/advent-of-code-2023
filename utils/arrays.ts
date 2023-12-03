export function count<T>(items: T[], match: (item: T) => boolean): number {
  return items.filter(match).length;
}
