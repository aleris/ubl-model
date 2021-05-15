import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ItemLocationQuantity | undefined
  meta: FieldMeta<T>
}

export default function ItemLocationQuantityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemLocationQuantity">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemLocationQuantityFieldMeta.UBLExtensions}
          />

          <MeasureDisplay
            label="Lead Time"
            value={value.LeadTimeMeasure?.[0]}
            meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={ItemLocationQuantityFieldMeta.MinimumQuantity}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={ItemLocationQuantityFieldMeta.MaximumQuantity}
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-TradingRestrictions"
            label="Trading Restrictions"
            items={value.TradingRestrictions}
            meta={ItemLocationQuantityFieldMeta.TradingRestrictions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Trading Restrictions"
                value={itemValue}
                meta={ItemLocationQuantityFieldMeta.TradingRestrictions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Address ubl-ApplicableTerritoryAddress"
            label="Applicable Territory Address"
            items={value.ApplicableTerritoryAddress}
            meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Applicable Territory Address"
                value={itemValue}
                meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress}
              />
            }
          />

          <PriceDisplay
            label="Price"
            value={value.Price?.[0]}
            meta={ItemLocationQuantityFieldMeta.Price}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryUnit"
            label="Delivery Unit"
            items={value.DeliveryUnit}
            meta={ItemLocationQuantityFieldMeta.DeliveryUnit} 
            itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
              <DeliveryUnitDisplay
                key={key}
                label="Delivery Unit"
                value={itemValue}
                meta={ItemLocationQuantityFieldMeta.DeliveryUnit}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxCategory ubl-ApplicableTaxCategory"
            label="Applicable Tax Category"
            items={value.ApplicableTaxCategory}
            meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory} 
            itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
              <TaxCategoryDisplay
                key={key}
                label="Applicable Tax Category"
                value={itemValue}
                meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory}
              />
            }
          />

          <PackageDisplay
            label="Package"
            value={value.Package?.[0]}
            meta={ItemLocationQuantityFieldMeta.Package}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={ItemLocationQuantityFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={ItemLocationQuantityFieldMeta.AllowanceCharge}
              />
            }
          />

          <DependentPriceReferenceDisplay
            label="Dependent Price Reference"
            value={value.DependentPriceReference?.[0]}
            meta={ItemLocationQuantityFieldMeta.DependentPriceReference}
          />
        </div>
    </div>
  )
}
