import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ClauseType } from './ClauseMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { FinancialAccountType } from './FinancialAccountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TradeFinancingField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  FinancingInstrumentCode = 'FinancingInstrumentCode',
  ContractDocumentReference = 'ContractDocumentReference',
  DocumentReference = 'DocumentReference',
  FinancingParty = 'FinancingParty',
  FinancingFinancialAccount = 'FinancingFinancialAccount',
  Clause = 'Clause'
}

export const TradeFinancingFieldMetaUBLExtensions = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaID = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this trade financing instrument.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingInstrumentCode = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingInstrumentCode,
  'FinancingInstrumentCode',
  'Financing Instrument Code',
  CodeType.name,
  'A code signifying the type of this financing instrument.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Factoring , Invoice Financing , Pre-shipment Financing , Letter of Credit , Irrevocable Letter of Credit .'
)

export const TradeFinancingFieldMetaContractDocumentReference = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.ContractDocumentReference,
  'ContractDocumentReference',
  'Contract Document Reference',
  DocumentReferenceType.name,
  'A reference to a contract document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaDocumentReference = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this trade financing instrument.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingParty = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingParty,
  'FinancingParty',
  'Financing Party',
  PartyType.name,
  'The financing party (bank or other enabled party).',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaFinancingFinancialAccount = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.FinancingFinancialAccount,
  'FinancingFinancialAccount',
  'Financing Financial Account',
  FinancialAccountType.name,
  'An internal bank account used by the bank or its first agent to manage the line of credit granted to the financing requester.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeFinancingFieldMetaClause = new FieldMeta<TradeFinancingField>(
  TradeFinancingField.Clause,
  'Clause',
  'Clause',
  ClauseType.name,
  'A clause applicable to this trade financing instrument.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TradeFinancingFieldMeta {
  public static readonly UBLExtensions = TradeFinancingFieldMetaUBLExtensions
  public static readonly ID = TradeFinancingFieldMetaID
  public static readonly FinancingInstrumentCode = TradeFinancingFieldMetaFinancingInstrumentCode
  public static readonly ContractDocumentReference = TradeFinancingFieldMetaContractDocumentReference
  public static readonly DocumentReference = TradeFinancingFieldMetaDocumentReference
  public static readonly FinancingParty = TradeFinancingFieldMetaFinancingParty
  public static readonly FinancingFinancialAccount = TradeFinancingFieldMetaFinancingFinancialAccount
  public static readonly Clause = TradeFinancingFieldMetaClause
}

export const TradeFinancingFieldMap = new Map([
  [TradeFinancingField.UBLExtensions, TradeFinancingFieldMetaUBLExtensions],
  [TradeFinancingField.ID, TradeFinancingFieldMetaID],
  [TradeFinancingField.FinancingInstrumentCode, TradeFinancingFieldMetaFinancingInstrumentCode],
  [TradeFinancingField.ContractDocumentReference, TradeFinancingFieldMetaContractDocumentReference],
  [TradeFinancingField.DocumentReference, TradeFinancingFieldMetaDocumentReference],
  [TradeFinancingField.FinancingParty, TradeFinancingFieldMetaFinancingParty],
  [TradeFinancingField.FinancingFinancialAccount, TradeFinancingFieldMetaFinancingFinancialAccount],
  [TradeFinancingField.Clause, TradeFinancingFieldMetaClause]
])

export const TradeFinancingType: Type<TradeFinancingField> = {
  name: 'TradeFinancing',
  label: 'Trade Financing',
  module: TypeModule.cac,
  definition: 'A class to describe a trade financing instrument.',
  fields: TradeFinancingFieldMap,
}
