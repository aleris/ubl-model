import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DeliveryTermsType } from './DeliveryTermsMeta'
import { EnvironmentalEmissionType } from './EnvironmentalEmissionMeta'
import { NotificationRequirementType } from './NotificationRequirementMeta'
import { PaymentTermsType } from './PaymentTermsMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportExecutionTermsField {
  UBLExtensions = 'UBLExtensions',
  TransportUserSpecialTerms = 'TransportUserSpecialTerms',
  TransportServiceProviderSpecialTerms = 'TransportServiceProviderSpecialTerms',
  ChangeConditions = 'ChangeConditions',
  PaymentTerms = 'PaymentTerms',
  DeliveryTerms = 'DeliveryTerms',
  BonusPaymentTerms = 'BonusPaymentTerms',
  CommissionPaymentTerms = 'CommissionPaymentTerms',
  PenaltyPaymentTerms = 'PenaltyPaymentTerms',
  EnvironmentalEmission = 'EnvironmentalEmission',
  NotificationRequirement = 'NotificationRequirement',
  ServiceChargePaymentTerms = 'ServiceChargePaymentTerms'
}

export const TransportExecutionTermsFieldMetaUBLExtensions = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaTransportUserSpecialTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.TransportUserSpecialTerms,
  'TransportUserSpecialTerms',
  'Transport User Special Terms',
  TextType.name,
  'Text describing special terms specified by the transport user.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaTransportServiceProviderSpecialTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.TransportServiceProviderSpecialTerms,
  'TransportServiceProviderSpecialTerms',
  'Transport Service Provider Special Terms',
  TextType.name,
  'Text describing special terms specified by the transport service provider.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaChangeConditions = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.ChangeConditions,
  'ChangeConditions',
  'Change Conditions',
  TextType.name,
  'Text describing conditions applying to a change of these transport execution terms.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaPaymentTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'Payment terms associated with the transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaDeliveryTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'Delivery terms (e.g., Incoterms) associated with the transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaBonusPaymentTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.BonusPaymentTerms,
  'BonusPaymentTerms',
  'Bonus Payment Terms',
  PaymentTermsType.name,
  'Terms relating to payment of applicable bonuses associated with the transport service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaCommissionPaymentTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.CommissionPaymentTerms,
  'CommissionPaymentTerms',
  'Commission Payment Terms',
  PaymentTermsType.name,
  'Terms of payment applying to a commission specified in the transport execution plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaPenaltyPaymentTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.PenaltyPaymentTerms,
  'PenaltyPaymentTerms',
  'Penalty Payment Terms',
  PaymentTermsType.name,
  'Terms of payment applying to a penalty specified in the transport execution plan.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaEnvironmentalEmission = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.EnvironmentalEmission,
  'EnvironmentalEmission',
  'Environmental Emission',
  EnvironmentalEmissionType.name,
  'An environmental emission resulting from the transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaNotificationRequirement = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.NotificationRequirement,
  'NotificationRequirement',
  'Notification Requirement',
  NotificationRequirementType.name,
  'A notification requirement related to the transportation service; e.g., a requirement that the transport user should be notified when goods are ready for pickup.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportExecutionTermsFieldMetaServiceChargePaymentTerms = new FieldMeta<TransportExecutionTermsField>(
  TransportExecutionTermsField.ServiceChargePaymentTerms,
  'ServiceChargePaymentTerms',
  'Service Charge Payment Terms',
  PaymentTermsType.name,
  'Payment terms for the service charge associated with the transport service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportExecutionTermsFieldMeta {
  public static readonly UBLExtensions = TransportExecutionTermsFieldMetaUBLExtensions
  public static readonly TransportUserSpecialTerms = TransportExecutionTermsFieldMetaTransportUserSpecialTerms
  public static readonly TransportServiceProviderSpecialTerms = TransportExecutionTermsFieldMetaTransportServiceProviderSpecialTerms
  public static readonly ChangeConditions = TransportExecutionTermsFieldMetaChangeConditions
  public static readonly PaymentTerms = TransportExecutionTermsFieldMetaPaymentTerms
  public static readonly DeliveryTerms = TransportExecutionTermsFieldMetaDeliveryTerms
  public static readonly BonusPaymentTerms = TransportExecutionTermsFieldMetaBonusPaymentTerms
  public static readonly CommissionPaymentTerms = TransportExecutionTermsFieldMetaCommissionPaymentTerms
  public static readonly PenaltyPaymentTerms = TransportExecutionTermsFieldMetaPenaltyPaymentTerms
  public static readonly EnvironmentalEmission = TransportExecutionTermsFieldMetaEnvironmentalEmission
  public static readonly NotificationRequirement = TransportExecutionTermsFieldMetaNotificationRequirement
  public static readonly ServiceChargePaymentTerms = TransportExecutionTermsFieldMetaServiceChargePaymentTerms
}

export const TransportExecutionTermsFieldMap = new Map([
  [TransportExecutionTermsField.UBLExtensions, TransportExecutionTermsFieldMetaUBLExtensions],
  [TransportExecutionTermsField.TransportUserSpecialTerms, TransportExecutionTermsFieldMetaTransportUserSpecialTerms],
  [TransportExecutionTermsField.TransportServiceProviderSpecialTerms, TransportExecutionTermsFieldMetaTransportServiceProviderSpecialTerms],
  [TransportExecutionTermsField.ChangeConditions, TransportExecutionTermsFieldMetaChangeConditions],
  [TransportExecutionTermsField.PaymentTerms, TransportExecutionTermsFieldMetaPaymentTerms],
  [TransportExecutionTermsField.DeliveryTerms, TransportExecutionTermsFieldMetaDeliveryTerms],
  [TransportExecutionTermsField.BonusPaymentTerms, TransportExecutionTermsFieldMetaBonusPaymentTerms],
  [TransportExecutionTermsField.CommissionPaymentTerms, TransportExecutionTermsFieldMetaCommissionPaymentTerms],
  [TransportExecutionTermsField.PenaltyPaymentTerms, TransportExecutionTermsFieldMetaPenaltyPaymentTerms],
  [TransportExecutionTermsField.EnvironmentalEmission, TransportExecutionTermsFieldMetaEnvironmentalEmission],
  [TransportExecutionTermsField.NotificationRequirement, TransportExecutionTermsFieldMetaNotificationRequirement],
  [TransportExecutionTermsField.ServiceChargePaymentTerms, TransportExecutionTermsFieldMetaServiceChargePaymentTerms]
])

export const TransportExecutionTermsType: Type<TransportExecutionTermsField> = {
  name: 'TransportExecutionTerms',
  label: 'Transport Execution Terms',
  module: TypeModule.cac,
  definition: 'A class to describe terms applying to a transport execution plan.',
  fields: TransportExecutionTermsFieldMap,
}
