type Names = ({ [className: string]: boolean } | string) []

export function classNames(...names: Names): string {
  return names.map(item => {
    if (typeof item === 'string') {
      return item
    } else {
      Object.entries(names)
        .filter(([_, isIncluded]) => isIncluded)
        .map(([className, _]) => className)
        .join(' ')
    }
  }).join(' ')
}
