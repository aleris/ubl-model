import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportExecutionTerms
  meta: FieldMeta<T>
}

export default function TransportExecutionTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportExecutionTerms ubl-TransportExecutionTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportExecutionTerms ubl-UBLExtensions"
          meta={TransportExecutionTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionTerms ubl-Text ubl-TransportUserSpecialTerms"
          meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms} 
          value={value.TransportUserSpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transport User Special Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionTerms ubl-Text ubl-TransportServiceProviderSpecialTerms"
          meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms} 
          value={value.TransportServiceProviderSpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Transport Service Provider Special Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportExecutionTerms ubl-Text ubl-ChangeConditions"
          meta={TransportExecutionTermsFieldMeta.ChangeConditions} 
          value={value.ChangeConditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Change Conditions"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.ChangeConditions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-PaymentTerms"
          meta={TransportExecutionTermsFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-DeliveryTerms"
          meta={TransportExecutionTermsFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-PaymentTerms ubl-BonusPaymentTerms"
          meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms} 
          value={value.BonusPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Bonus Payment Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-PaymentTerms ubl-CommissionPaymentTerms"
          meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms} 
          value={value.CommissionPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Commission Payment Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-PaymentTerms ubl-PenaltyPaymentTerms"
          meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms} 
          value={value.PenaltyPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Penalty Payment Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-EnvironmentalEmission"
          meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission} 
          value={value.EnvironmentalEmission}
          itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
            <EnvironmentalEmissionDisplay
              key={key}
              label="Environmental Emission"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-NotificationRequirement"
          meta={TransportExecutionTermsFieldMeta.NotificationRequirement} 
          value={value.NotificationRequirement}
          itemDisplay={ (itemValue: NotificationRequirement, key: string | number) =>
            <NotificationRequirementDisplay
              key={key}
              label="Notification Requirement"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.NotificationRequirement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportExecutionTerms ubl-PaymentTerms ubl-ServiceChargePaymentTerms"
          meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms} 
          value={value.ServiceChargePaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Service Charge Payment Terms"
              value={itemValue}
              meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms}
            />
          }
        />
        </div>
    </div>
  )
}
