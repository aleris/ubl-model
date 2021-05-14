import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DeliveryTerms
  meta: FieldMeta<T>
}

export default function DeliveryTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DeliveryTerms ubl-DeliveryTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DeliveryTerms ubl-UBLExtensions"
          meta={DeliveryTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryTerms ubl-Identifier ubl-ID"
          meta={DeliveryTermsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DeliveryTerms ubl-Text ubl-SpecialTerms"
          meta={DeliveryTermsFieldMeta.SpecialTerms} 
          value={value.SpecialTerms}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Special Terms"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.SpecialTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryTerms ubl-Code ubl-LossRiskResponsibilityCode"
          meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode} 
          value={value.LossRiskResponsibilityCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Loss Risk Responsibility Code"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.LossRiskResponsibilityCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DeliveryTerms ubl-Text ubl-LossRisk"
          meta={DeliveryTermsFieldMeta.LossRisk} 
          value={value.LossRisk}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Loss Risk"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.LossRisk}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryTerms ubl-Amount"
          meta={DeliveryTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DeliveryTerms ubl-Location ubl-DeliveryLocation"
          meta={DeliveryTermsFieldMeta.DeliveryLocation} 
          value={value.DeliveryLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Delivery Location"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.DeliveryLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DeliveryTerms ubl-AllowanceCharge"
          meta={DeliveryTermsFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={DeliveryTermsFieldMeta.AllowanceCharge}
            />
          }
        />
        </div>
    </div>
  )
}
