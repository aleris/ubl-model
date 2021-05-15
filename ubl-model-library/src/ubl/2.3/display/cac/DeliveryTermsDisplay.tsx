import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: DeliveryTerms | undefined
  meta: FieldMeta<T>
}

export default function DeliveryTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DeliveryTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DeliveryTermsFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DeliveryTermsFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SpecialTerms"
            label="Special Terms"
            items={value.SpecialTerms}
            meta={DeliveryTermsFieldMeta.SpecialTerms} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Special Terms"
                value={itemValue}
                meta={DeliveryTermsFieldMeta.SpecialTerms}
              />
            }
          />

          <CodeDisplay
            label="Loss Risk Responsibility Code"
            value={value.LossRiskResponsibilityCode?.[0]}
            meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-LossRisk"
            label="Loss Risk"
            items={value.LossRisk}
            meta={DeliveryTermsFieldMeta.LossRisk} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Loss Risk"
                value={itemValue}
                meta={DeliveryTermsFieldMeta.LossRisk}
              />
            }
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={DeliveryTermsFieldMeta.Amount}
          />

          <LocationDisplay
            label="Delivery Location"
            value={value.DeliveryLocation?.[0]}
            meta={DeliveryTermsFieldMeta.DeliveryLocation}
          />

          <AllowanceChargeDisplay
            label="Allowance Charge"
            value={value.AllowanceCharge?.[0]}
            meta={DeliveryTermsFieldMeta.AllowanceCharge}
          />
        </div>
    </div>
  )
}
