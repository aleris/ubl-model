import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ProcessJustificationField {
  UBLExtensions = 'UBLExtensions',
  PreviousCancellationReasonCode = 'PreviousCancellationReasonCode',
  ProcessReasonCode = 'ProcessReasonCode',
  ProcessReason = 'ProcessReason',
  Description = 'Description'
}

export const ProcessJustificationFieldMetaUBLExtensions = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaPreviousCancellationReasonCode = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.PreviousCancellationReasonCode,
  'PreviousCancellationReasonCode',
  'Previous Cancellation Reason Code',
  CodeType.name,
  'A code signifying the type of the previous tendering process (which is now being cancelled).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaProcessReasonCode = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.ProcessReasonCode,
  'ProcessReasonCode',
  'Process Reason Code',
  CodeType.name,
  'The reason why the contracting authority has followed a particular tendering procedure for the awarding of a contract, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaProcessReason = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.ProcessReason,
  'ProcessReason',
  'Process Reason',
  TextType.name,
  'The reason why the contracting authority has followed a particular tendering procedure for the awarding of a contract, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaDescription = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text providing justification for the selection of this process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ProcessJustificationFieldMeta {
  public static readonly UBLExtensions = ProcessJustificationFieldMetaUBLExtensions
  public static readonly PreviousCancellationReasonCode = ProcessJustificationFieldMetaPreviousCancellationReasonCode
  public static readonly ProcessReasonCode = ProcessJustificationFieldMetaProcessReasonCode
  public static readonly ProcessReason = ProcessJustificationFieldMetaProcessReason
  public static readonly Description = ProcessJustificationFieldMetaDescription
}

export const ProcessJustificationFieldMap = new Map([
  [ProcessJustificationField.UBLExtensions, ProcessJustificationFieldMetaUBLExtensions],
  [ProcessJustificationField.PreviousCancellationReasonCode, ProcessJustificationFieldMetaPreviousCancellationReasonCode],
  [ProcessJustificationField.ProcessReasonCode, ProcessJustificationFieldMetaProcessReasonCode],
  [ProcessJustificationField.ProcessReason, ProcessJustificationFieldMetaProcessReason],
  [ProcessJustificationField.Description, ProcessJustificationFieldMetaDescription]
])

export const ProcessJustificationType: Type<ProcessJustificationField> = {
  name: 'ProcessJustification',
  label: 'Process Justification',
  module: TypeModule.cac,
  definition: 'A class to describe a justification for the choice of tendering process.',
  fields: ProcessJustificationFieldMap,
}
