export enum UblModule {
  ccts_cct = 'ccts-cct',
  udt = 'udt',
  cbc = 'cbc',
  cac = 'cac',
  ext = 'ext',
  doc = 'doc'
}

export function mapModuleToEnum(module: UblModule | string): string {
  switch (module) {
    case 'ccts-cct': return 'UblModule.ccts_cct'
    case 'udt': return 'UblModule.udt'
    case 'cac': return 'UblModule.cac'
    case 'cbc': return 'UblModule.cbc'
    case 'doc': return 'UblModule.doc'
    case 'ext': return 'UblModule.ext'
    default: return 'unknown'
  }
}
