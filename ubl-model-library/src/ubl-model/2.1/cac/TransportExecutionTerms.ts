import { DeliveryTerms } from './DeliveryTerms'
import { EnvironmentalEmission } from './EnvironmentalEmission'
import { NotificationRequirement } from './NotificationRequirement'
import { PaymentTerms } from './PaymentTerms'
import { Text } from '../cbc/Text'

/**
 * A class to describe terms applying to a transport execution plan.
 */
export interface TransportExecutionTerms {
  /**
   * Text describing special terms specified by the transport user.
   * Text
   * Cardinality: 0..n
   */
  TransportUserSpecialTerms?: Array<Text> | undefined

  /**
   * Text describing special terms specified by the transport service provider.
   * Text
   * Cardinality: 0..n
   */
  TransportServiceProviderSpecialTerms?: Array<Text> | undefined

  /**
   * Text describing conditions applying to a change of these transport execution terms.
   * Text
   * Cardinality: 0..n
   */
  ChangeConditions?: Array<Text> | undefined

  /**
   * Payment terms associated with the transportation service.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms?: Array<PaymentTerms> | undefined

  /**
   * Delivery terms (e.g., Incoterms) associated with the transportation service.
   * Delivery Terms
   * Cardinality: 0..n
   */
  DeliveryTerms?: Array<DeliveryTerms> | undefined

  /**
   * Terms relating to payment of applicable bonuses associated with the transport service.
   * Payment Terms
   * Cardinality: 0..1
   */
  BonusPaymentTerms?: [PaymentTerms] | undefined

  /**
   * Terms of payment applying to a commission specified in the transport execution plan.
   * Payment Terms
   * Cardinality: 0..1
   */
  CommissionPaymentTerms?: [PaymentTerms] | undefined

  /**
   * Terms of payment applying to a penalty specified in the transport execution plan.
   * Payment Terms
   * Cardinality: 0..1
   */
  PenaltyPaymentTerms?: [PaymentTerms] | undefined

  /**
   * An environmental emission resulting from the transportation service.
   * Environmental Emission
   * Cardinality: 0..n
   */
  EnvironmentalEmission?: Array<EnvironmentalEmission> | undefined

  /**
   * A notification requirement related to the transportation service; e.g., a requirement that the transport user
   * should be notified when goods are ready for pickup.
   * Notification Requirement
   * Cardinality: 0..n
   */
  NotificationRequirement?: Array<NotificationRequirement> | undefined

  /**
   * Payment terms for the service charge associated with the transport service.
   * Payment Terms
   * Cardinality: 0..1
   */
  ServiceChargePaymentTerms?: [PaymentTerms] | undefined
}
