import { FieldMeta } from '../../FieldMeta'

export enum TradeFinancingField {
  ID = 'ID',
  FinancingInstrumentCode = 'FinancingInstrumentCode',
  ContractDocumentReference = 'ContractDocumentReference',
  DocumentReference = 'DocumentReference',
  FinancingParty = 'FinancingParty',
  FinancingFinancialAccount = 'FinancingFinancialAccount',
  Clause = 'Clause'
}

export const TradeFinancingFieldMetaID = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this trade financing instrument.',
  '0..1',
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingInstrumentCode = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingInstrumentCode,
  'FinancingInstrumentCode',
  'Financing Instrument Code',
  'Code',
  'A code signifying the type of this financing instrument.',
  '0..1',
  undefined,
  'Factoring , Invoice Financing , Pre-shipment Financing , Letter of Credit , Irrevocable Letter of Credit .'
)

export const TradeFinancingFieldMetaContractDocumentReference = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.ContractDocumentReference,
  'ContractDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a contract document.',
  '0..1',
  undefined,
  undefined
)

export const TradeFinancingFieldMetaDocumentReference = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this trade financing instrument.',
  '0..n',
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingParty = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingParty,
  'FinancingParty',
  'Party',
  'Party',
  'The financing party (bank or other enabled party).',
  '1',
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingFinancialAccount = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingFinancialAccount,
  'FinancingFinancialAccount',
  'Financial Account',
  'FinancialAccount',
  'An internal bank account used by the bank or its first agent to manage the line of credit granted to the financing requester.',
  '0..1',
  undefined,
  undefined
)

export const TradeFinancingFieldMetaClause = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.Clause,
  'Clause',
  'Clause',
  'Clause',
  'A clause applicable to this trade financing instrument.',
  '0..n',
  undefined,
  undefined
)

export class TradeFinancingFieldMeta {
  public static readonly ID = TradeFinancingFieldMetaID
  public static readonly FinancingInstrumentCode = TradeFinancingFieldMetaFinancingInstrumentCode
  public static readonly ContractDocumentReference = TradeFinancingFieldMetaContractDocumentReference
  public static readonly DocumentReference = TradeFinancingFieldMetaDocumentReference
  public static readonly FinancingParty = TradeFinancingFieldMetaFinancingParty
  public static readonly FinancingFinancialAccount = TradeFinancingFieldMetaFinancingFinancialAccount
  public static readonly Clause = TradeFinancingFieldMetaClause
}

export const TradeFinancingFieldMap = new Map([
  [TradeFinancingField.ID, TradeFinancingFieldMetaID],
  [TradeFinancingField.FinancingInstrumentCode, TradeFinancingFieldMetaFinancingInstrumentCode],
  [TradeFinancingField.ContractDocumentReference, TradeFinancingFieldMetaContractDocumentReference],
  [TradeFinancingField.DocumentReference, TradeFinancingFieldMetaDocumentReference],
  [TradeFinancingField.FinancingParty, TradeFinancingFieldMetaFinancingParty],
  [TradeFinancingField.FinancingFinancialAccount, TradeFinancingFieldMetaFinancingFinancialAccount],
  [TradeFinancingField.Clause, TradeFinancingFieldMetaClause]
])
