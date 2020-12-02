export function extractTypeName(typeName: string) {
  return typeName.replace(/Type$/, '')
}

export function capitalize(text: string) {
  return text.substr(0, 1).toUpperCase() + text.substr(1)
}

export function uncapitalize(text: string) {
  return text.substr(0, 1).toLowerCase() + text.substr(1)
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
