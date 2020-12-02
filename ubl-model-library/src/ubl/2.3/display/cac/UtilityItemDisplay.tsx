import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: UtilityItem
  meta: FieldMeta<T>
}

export default function UtilityItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={UtilityItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={UtilityItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityItemFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.SubscriberID} 
          value={value.SubscriberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={UtilityItemFieldMeta.SubscriberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.SubscriberType} 
          value={value.SubscriberType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityItemFieldMeta.SubscriberType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.SubscriberTypeCode} 
          value={value.SubscriberTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityItemFieldMeta.SubscriberTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityItemFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.PackQuantity} 
          value={value.PackQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={UtilityItemFieldMeta.PackQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.PackSizeNumeric} 
          value={value.PackSizeNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={UtilityItemFieldMeta.PackSizeNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.ConsumptionType} 
          value={value.ConsumptionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityItemFieldMeta.ConsumptionType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.ConsumptionTypeCode} 
          value={value.ConsumptionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityItemFieldMeta.ConsumptionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.CurrentChargeType} 
          value={value.CurrentChargeType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityItemFieldMeta.CurrentChargeType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.CurrentChargeTypeCode} 
          value={value.CurrentChargeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityItemFieldMeta.CurrentChargeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.OneTimeChargeType} 
          value={value.OneTimeChargeType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={UtilityItemFieldMeta.OneTimeChargeType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.OneTimeChargeTypeCode} 
          value={value.OneTimeChargeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={UtilityItemFieldMeta.OneTimeChargeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={UtilityItemFieldMeta.TaxCategory} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={UtilityItemFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={UtilityItemFieldMeta.Contract} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
