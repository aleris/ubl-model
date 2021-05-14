import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemLocationQuantity
  meta: FieldMeta<T>
}

export default function ItemLocationQuantityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemLocationQuantity ubl-ItemLocationQuantityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemLocationQuantity ubl-UBLExtensions"
          meta={ItemLocationQuantityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemLocationQuantity ubl-Measure ubl-LeadTimeMeasure"
          meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure} 
          value={value.LeadTimeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Lead Time"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.LeadTimeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemLocationQuantity ubl-Quantity ubl-MinimumQuantity"
          meta={ItemLocationQuantityFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemLocationQuantity ubl-Quantity ubl-MaximumQuantity"
          meta={ItemLocationQuantityFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemLocationQuantity ubl-Indicator ubl-HazardousRiskIndicator"
          meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.HazardousRiskIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ItemLocationQuantity ubl-Text ubl-TradingRestrictions"
          meta={ItemLocationQuantityFieldMeta.TradingRestrictions} 
          value={value.TradingRestrictions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Trading Restrictions"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.TradingRestrictions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-Address ubl-ApplicableTerritoryAddress"
          meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Applicable Territory Address"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.ApplicableTerritoryAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-Price"
          meta={ItemLocationQuantityFieldMeta.Price} 
          value={value.Price}
          itemDisplay={ (itemValue: Price, key: string | number) =>
            <PriceDisplay
              key={key}
              label="Price"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.Price}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-DeliveryUnit"
          meta={ItemLocationQuantityFieldMeta.DeliveryUnit} 
          value={value.DeliveryUnit}
          itemDisplay={ (itemValue: DeliveryUnit, key: string | number) =>
            <DeliveryUnitDisplay
              key={key}
              label="Delivery Unit"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.DeliveryUnit}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-TaxCategory ubl-ApplicableTaxCategory"
          meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory} 
          value={value.ApplicableTaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Applicable Tax Category"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.ApplicableTaxCategory}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-Package"
          meta={ItemLocationQuantityFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Package"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.Package}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-AllowanceCharge"
          meta={ItemLocationQuantityFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ItemLocationQuantity ubl-DependentPriceReference"
          meta={ItemLocationQuantityFieldMeta.DependentPriceReference} 
          value={value.DependentPriceReference}
          itemDisplay={ (itemValue: DependentPriceReference, key: string | number) =>
            <DependentPriceReferenceDisplay
              key={key}
              label="Dependent Price Reference"
              value={itemValue}
              meta={ItemLocationQuantityFieldMeta.DependentPriceReference}
            />
          }
        />
        </div>
    </div>
  )
}
