export function extractTypeName(typeName: string) {
  return typeName.replace(/Type$/, '')
}

export function capitalize(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1)
}

export function uncapitalize(text: string) {
  if (text.startsWith('UBL')) {
    return text.substr(0, 3).toLowerCase() + text.substr(3)
  }
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

export function transformReserved(text: string) {
  return text === 'package' ? `${text}Value` : text
}

export function getPropertyName(typeName: string) {
  return transformReserved(uncapitalize(typeName))
}

const MAX_LINE_LENGTH = 120

export function formatComment(linePrefix: string, text?: string) {
  if (!text) {
    return ''
  }
  const lines = []
  const words = text.trim().split(' ')
  let line = linePrefix
  let firstWordOnLine = true
  for (const word of words) {
    const wouldBeLine = line + (firstWordOnLine ? '' : ' ') + word
    if (MAX_LINE_LENGTH < wouldBeLine.length && !firstWordOnLine) {
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

function getOptionalProps(isOptional: boolean) {
  return {
    optionalField: isOptional ? '?' : '',
    optionalUndefined: isOptional ? ' | undefined' : ''
  }
}

export function getUseOptionalProps(use: string) {
  return getOptionalProps(use === 'optional')
}

export function getMinOccurOptionalProps(minOccur: string) {
  return getOptionalProps(minOccur === '0')
}

export function singleQuoteEscape(text: string | undefined) {
  if (!text) {
    return `''`
  }
  const escaped = text.trim()
    .replace(/'/g, '\\\'')
    .replace(/\\n/g, ' ')
    .trim()
  return `'${escaped}'`
}

export function indent(text: string, count: number, indentation = '  ') {
  return text.replace(/^/gm, indentation.repeat(count))
}

export function mapCardinalityToEnum(cardinalityString: string): string {
  switch (cardinalityString) {
    case '1': return 'FieldCardinality.Uni'
    case '0..1': return 'FieldCardinality.UniOptional'
    case '1..n': return 'FieldCardinality.Multi'
    case '0..n': return 'FieldCardinality.MultiOptional'
    default: return 'FieldCardinality.UniOptional'
  }
}
