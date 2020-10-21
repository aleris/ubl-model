import { FieldMeta } from '../../FieldMeta'

export enum ProcurementProjectLotField {
  ID = 'ID',
  TenderingTerms = 'TenderingTerms',
  ProcurementProject = 'ProcurementProject'
}

export const ProcurementProjectLotFieldMetaID = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this procurement project lot.',
  '1',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaTenderingTerms = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  'TenderingTerms',
  'Tendering terms for this procurement project lot.',
  '0..1',
  undefined,
  undefined
)

export const ProcurementProjectLotFieldMetaProcurementProject = new FieldMeta<ProcurementProjectLotField>(
  ProcurementProjectLotField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'A description of the procurement project to be divided.',
  '0..1',
  undefined,
  undefined
)

export class ProcurementProjectLotFieldMeta {
  public static readonly ID = ProcurementProjectLotFieldMetaID
  public static readonly TenderingTerms = ProcurementProjectLotFieldMetaTenderingTerms
  public static readonly ProcurementProject = ProcurementProjectLotFieldMetaProcurementProject
}

export const ProcurementProjectLotFieldMap = new Map([
  [ProcurementProjectLotField.ID, ProcurementProjectLotFieldMetaID],
  [ProcurementProjectLotField.TenderingTerms, ProcurementProjectLotFieldMetaTenderingTerms],
  [ProcurementProjectLotField.ProcurementProject, ProcurementProjectLotFieldMetaProcurementProject]
])
