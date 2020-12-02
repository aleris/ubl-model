import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportExecutionTerms
  meta: FieldMeta<T>
}

export default function TransportExecutionTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportExecutionTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms} 
          value={value.TransportUserSpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionTermsFieldMeta.TransportUserSpecialTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms} 
          value={value.TransportServiceProviderSpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionTermsFieldMeta.TransportServiceProviderSpecialTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.ChangeConditions} 
          value={value.ChangeConditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportExecutionTermsFieldMeta.ChangeConditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms} 
          value={value.BonusPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.BonusPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms} 
          value={value.CommissionPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.CommissionPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms} 
          value={value.PenaltyPaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.PenaltyPaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission} 
          value={value.EnvironmentalEmission}
          itemDisplay={ (itemValue: EnvironmentalEmission, key: string | number) =>
            <EnvironmentalEmissionDisplay key={key} meta={TransportExecutionTermsFieldMeta.EnvironmentalEmission} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.NotificationRequirement} 
          value={value.NotificationRequirement}
          itemDisplay={ (itemValue: NotificationRequirement, key: string | number) =>
            <NotificationRequirementDisplay key={key} meta={TransportExecutionTermsFieldMeta.NotificationRequirement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms} 
          value={value.ServiceChargePaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportExecutionTermsFieldMeta.ServiceChargePaymentTerms} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
