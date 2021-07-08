export enum UblModule {
  cbc = 'cbc',
  cac = 'cac',
  ext = 'ext',
  doc = 'doc'
}

export function mapModuleToEnum(module: UblModule | string): string {
  switch (module) {
    case 'cac': return 'TypeModule.cac'
    case 'cbc': return 'TypeModule.cbc'
    case 'doc': return 'TypeModule.doc'
    case 'ext': return 'TypeModule.ext'
    default: return 'unknown'
  }
}
