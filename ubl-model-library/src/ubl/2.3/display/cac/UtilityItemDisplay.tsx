import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UtilityItem } from  '../../model/cac/UtilityItem'
import { UtilityItemFieldMeta } from  '../../meta/cac/UtilityItemMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from './ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: UtilityItem | undefined
  meta: FieldMeta<T>
}

export default function UtilityItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-UtilityItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={UtilityItemFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={UtilityItemFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Subscriber Identifier"
            value={value.SubscriberID?.[0]}
            meta={UtilityItemFieldMeta.SubscriberID}
          />

          <TextDisplay
            label="Subscriber Type"
            value={value.SubscriberType?.[0]}
            meta={UtilityItemFieldMeta.SubscriberType}
          />

          <CodeDisplay
            label="Subscriber Type Code"
            value={value.SubscriberTypeCode?.[0]}
            meta={UtilityItemFieldMeta.SubscriberTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={UtilityItemFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={UtilityItemFieldMeta.Description}
              />
            }
          />

          <QuantityDisplay
            label="Pack Quantity"
            value={value.PackQuantity?.[0]}
            meta={UtilityItemFieldMeta.PackQuantity}
          />

          <NumericDisplay
            label="Pack Size"
            value={value.PackSizeNumeric?.[0]}
            meta={UtilityItemFieldMeta.PackSizeNumeric}
          />

          <TextDisplay
            label="Consumption Type"
            value={value.ConsumptionType?.[0]}
            meta={UtilityItemFieldMeta.ConsumptionType}
          />

          <CodeDisplay
            label="Consumption Type Code"
            value={value.ConsumptionTypeCode?.[0]}
            meta={UtilityItemFieldMeta.ConsumptionTypeCode}
          />

          <TextDisplay
            label="Current Charge Type"
            value={value.CurrentChargeType?.[0]}
            meta={UtilityItemFieldMeta.CurrentChargeType}
          />

          <CodeDisplay
            label="Current Charge Type Code"
            value={value.CurrentChargeTypeCode?.[0]}
            meta={UtilityItemFieldMeta.CurrentChargeTypeCode}
          />

          <TextDisplay
            label="One Time Charge Type"
            value={value.OneTimeChargeType?.[0]}
            meta={UtilityItemFieldMeta.OneTimeChargeType}
          />

          <CodeDisplay
            label="One Time Charge Type Code"
            value={value.OneTimeChargeTypeCode?.[0]}
            meta={UtilityItemFieldMeta.OneTimeChargeTypeCode}
          />

          <TaxCategoryDisplay
            label="Tax Category"
            value={value.TaxCategory?.[0]}
            meta={UtilityItemFieldMeta.TaxCategory}
          />

          <ContractDisplay
            label="Contract"
            value={value.Contract?.[0]}
            meta={UtilityItemFieldMeta.Contract}
          />
        </div>
    </div>
  )
}
