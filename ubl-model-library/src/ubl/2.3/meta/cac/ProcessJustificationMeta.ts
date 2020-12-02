import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaPreviousCancellationReasonCode = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.PreviousCancellationReasonCode,
  'PreviousCancellationReasonCode',
  'Previous Cancellation Reason Code',
  'Code',
  'A code signifying the type of the previous tendering process (which is now being cancelled).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaProcessReasonCode = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.ProcessReasonCode,
  'ProcessReasonCode',
  'Process Reason Code',
  'Code',
  'The reason why the contracting authority has followed a particular tendering procedure for the awarding of a contract, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaProcessReason = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.ProcessReason,
  'ProcessReason',
  'Process Reason',
  'Text',
  'The reason why the contracting authority has followed a particular tendering procedure for the awarding of a contract, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ProcessJustificationFieldMetaDescription = new FieldMeta<ProcessJustificationField>(
  ProcessJustificationField.Description,
  'Description',
  'Description',
  'Text',
  'Text providing justification for the selection of this process.',
  '0..n',
  'cbc',
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
