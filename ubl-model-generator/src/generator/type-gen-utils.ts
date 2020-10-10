export const MAX_LINE_LENGTH = 120

export function extractTypeName(typeName: string) {
  return typeName.replace(/Type$/, '')
}

export function mapPrimitiveType(primitiveType?: string): string {
  switch(primitiveType) {
    case 'decimal': return 'number'
    case 'binary': return 'string'
    default: return primitiveType ?? 'unknown'
  }
}

export function capitalize(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1)
}

export function uncapitalize(text: string) {
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

export function onNewLineIfDefined(prefix: string, text?: string) {
  if (!text) {
    return ''
  }
  return `\n${prefix}${text}`
}

export function formatLongComment(linePrefix: string, maxLength: number, text?: string) {
  if (!text) {
    return ''
  }
  const lines = []
  const words = text.split(' ')
  let line = linePrefix
  let firstWordOnLine = true
  for (const word of words) {
    const wouldBeLine = line + (firstWordOnLine ? '' : ' ') + word
    if (maxLength < wouldBeLine.length && !firstWordOnLine) {
      lines.push(line)
      line = linePrefix + word
      continue
    }
    line = wouldBeLine
    firstWordOnLine = false
  }
  if (0 < line.length) {
    lines.push(line)
  }
  return '\n' + lines.join('\n')
}
