import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemLocationQuantity } from  '../../model/cac/ItemLocationQuantity'
import { ItemLocationQuantityFieldMeta } from  '../../meta/cac/ItemLocationQuantityMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import DeliveryUnitDisplay from './DeliveryUnitDisplay'
import { DeliveryUnit } from '../../model/cac/DeliveryUnit'
import DependentPriceReferenceDisplay from './DependentPriceReferenceDisplay'
import { DependentPriceReference } from '../../model/cac/DependentPriceReference'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import PriceDisplay from './PriceDisplay'
import { Price } from '../../model/cac/Price'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ItemLocationQuantity
  meta: FieldMeta<T>
}

export default function ItemLocationQuantityDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemLocationQuantityFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure} 
          value={value.LeadTimeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemLocationQuantityFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ItemLocationQuantityFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.TradingRestrictions} 
          value={value.TradingRestrictions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemLocationQuantityFieldMeta.TradingRestrictions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay key={key} meta={ItemLocationQuantityFieldMeta.Price} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.DeliveryUnit} 
          value={value.DeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay key={key} meta={ItemLocationQuantityFieldMeta.DeliveryUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory} 
          value={value.ApplicableTaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={ItemLocationQuantityFieldMeta.Package} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ItemLocationQuantityFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemLocationQuantityFieldMeta.DependentPriceReference} 
          value={value.DependentPriceReference}
          itemDisplay={ (itemValue: DependentPriceReference, key: string | number) =>
            <DependentPriceReferenceDisplay key={key} meta={ItemLocationQuantityFieldMeta.DependentPriceReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
