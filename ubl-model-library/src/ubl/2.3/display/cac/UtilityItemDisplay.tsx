import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: UtilityItem
  meta: FieldMeta<T>
}

export default function UtilityItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-UtilityItem ubl-UtilityItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-UtilityItem ubl-UBLExtensions"
          meta={UtilityItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UtilityItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Identifier ubl-ID"
          meta={UtilityItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={UtilityItemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Identifier ubl-SubscriberID"
          meta={UtilityItemFieldMeta.SubscriberID} 
          value={value.SubscriberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Subscriber Identifier"
              value={itemValue}
              meta={UtilityItemFieldMeta.SubscriberID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Text ubl-SubscriberType"
          meta={UtilityItemFieldMeta.SubscriberType} 
          value={value.SubscriberType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Subscriber Type"
              value={itemValue}
              meta={UtilityItemFieldMeta.SubscriberType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Code ubl-SubscriberTypeCode"
          meta={UtilityItemFieldMeta.SubscriberTypeCode} 
          value={value.SubscriberTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Subscriber Type Code"
              value={itemValue}
              meta={UtilityItemFieldMeta.SubscriberTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Text ubl-Description"
          meta={UtilityItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={UtilityItemFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Quantity ubl-PackQuantity"
          meta={UtilityItemFieldMeta.PackQuantity} 
          value={value.PackQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Pack Quantity"
              value={itemValue}
              meta={UtilityItemFieldMeta.PackQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Numeric ubl-PackSizeNumeric"
          meta={UtilityItemFieldMeta.PackSizeNumeric} 
          value={value.PackSizeNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Pack Size"
              value={itemValue}
              meta={UtilityItemFieldMeta.PackSizeNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Text ubl-ConsumptionType"
          meta={UtilityItemFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Consumption Type"
              value={itemValue}
              meta={UtilityItemFieldMeta.ConsumptionType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Code ubl-ConsumptionTypeCode"
          meta={UtilityItemFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Consumption Type Code"
              value={itemValue}
              meta={UtilityItemFieldMeta.ConsumptionTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Text ubl-CurrentChargeType"
          meta={UtilityItemFieldMeta.CurrentChargeType} 
          value={value.CurrentChargeType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Current Charge Type"
              value={itemValue}
              meta={UtilityItemFieldMeta.CurrentChargeType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Code ubl-CurrentChargeTypeCode"
          meta={UtilityItemFieldMeta.CurrentChargeTypeCode} 
          value={value.CurrentChargeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Current Charge Type Code"
              value={itemValue}
              meta={UtilityItemFieldMeta.CurrentChargeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Text ubl-OneTimeChargeType"
          meta={UtilityItemFieldMeta.OneTimeChargeType} 
          value={value.OneTimeChargeType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="One Time Charge Type"
              value={itemValue}
              meta={UtilityItemFieldMeta.OneTimeChargeType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UtilityItem ubl-Code ubl-OneTimeChargeTypeCode"
          meta={UtilityItemFieldMeta.OneTimeChargeTypeCode} 
          value={value.OneTimeChargeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="One Time Charge Type Code"
              value={itemValue}
              meta={UtilityItemFieldMeta.OneTimeChargeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityItem ubl-TaxCategory"
          meta={UtilityItemFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Tax Category"
              value={itemValue}
              meta={UtilityItemFieldMeta.TaxCategory}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UtilityItem ubl-Contract"
          meta={UtilityItemFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={UtilityItemFieldMeta.Contract}
            />
          }
        />
        </div>
    </div>
  )
}
