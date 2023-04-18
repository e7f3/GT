export type Mods = Record<string, string | boolean>

export function classNames(
  baseClass = '',
  mods: Mods = {},
  additionalClasses: Array<string | undefined> = []
): string {
  return [
    baseClass,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
    ...additionalClasses.filter(Boolean),
  ]
    .filter(Boolean)
    .join(' ')
}
