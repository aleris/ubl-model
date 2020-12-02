import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryTerms } from  '../../model/cac/DeliveryTerms'
import { DeliveryTermsFieldMeta } from  '../../meta/cac/DeliveryTermsMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: DeliveryTerms
  meta: FieldMeta<T>
}

export default function DeliveryTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DeliveryTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryTermsFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.SpecialTerms} 
          value={value.SpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DeliveryTermsFieldMeta.SpecialTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode} 
          value={value.LossRiskResponsibilityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.LossRisk} 
          value={value.LossRisk}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DeliveryTermsFieldMeta.LossRisk} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={DeliveryTermsFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.DeliveryLocation} 
          value={value.DeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={DeliveryTermsFieldMeta.DeliveryLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryTermsFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={DeliveryTermsFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
