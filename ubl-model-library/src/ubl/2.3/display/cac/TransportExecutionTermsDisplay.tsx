import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportExecutionTerms } from  '../../model/cac/TransportExecutionTerms'
import { TransportExecutionTermsFieldMeta } from  '../../meta/cac/TransportExecutionTermsMeta'
import DeliveryTermsDisplay from './DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import EnvironmentalEmissionDisplay from './EnvironmentalEmissionDisplay'
import { EnvironmentalEmission } from '../../model/cac/EnvironmentalEmission'
import NotificationRequirementDisplay from './NotificationRequirementDisplay'
import { NotificationRequirement } from '../../model/cac/NotificationRequirement'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportExecutionTerms | undefined
  meta: FieldMeta<T>
}

export default function TransportExecutionTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportExecutionTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportExecutionTermsFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TransportUserSpecialTerms"
            label="Transport User Special Terms"
            items={value.TransportUserSpecialTerms}
            meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transport User Special Terms"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TransportServiceProviderSpecialTerms"
            label="Transport Service Provider Special Terms"
            items={value.TransportServiceProviderSpecialTerms}
            meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Transport Service Provider Special Terms"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ChangeConditions"
            label="Change Conditions"
            items={value.ChangeConditions}
            meta={TransportExecutionTermsFieldMeta.ChangeConditions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Change Conditions"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.ChangeConditions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={TransportExecutionTermsFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={TransportExecutionTermsFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.DeliveryTerms}
              />
            }
          />

          <PaymentTermsDisplay
            label="Bonus Payment Terms"
            value={value.BonusPaymentTerms?.[0]}
            meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms}
          />

          <PaymentTermsDisplay
            label="Commission Payment Terms"
            value={value.CommissionPaymentTerms?.[0]}
            meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms}
          />

          <PaymentTermsDisplay
            label="Penalty Payment Terms"
            value={value.PenaltyPaymentTerms?.[0]}
            meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EnvironmentalEmission"
            label="Environmental Emission"
            items={value.EnvironmentalEmission}
            meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission} 
            itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
              <EnvironmentalEmissionDisplay
                key={key}
                label="Environmental Emission"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-NotificationRequirement"
            label="Notification Requirement"
            items={value.NotificationRequirement}
            meta={TransportExecutionTermsFieldMeta.NotificationRequirement} 
            itemDisplay={ (itemValue: NotificationRequirement, key: string | number) =>
              <NotificationRequirementDisplay
                key={key}
                label="Notification Requirement"
                value={itemValue}
                meta={TransportExecutionTermsFieldMeta.NotificationRequirement}
              />
            }
          />

          <PaymentTermsDisplay
            label="Service Charge Payment Terms"
            value={value.ServiceChargePaymentTerms?.[0]}
            meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms}
          />
        </div>
    </div>
  )
}
