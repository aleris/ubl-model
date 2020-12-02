import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AllowanceCharge } from  '../../model/cac/AllowanceCharge'
import { AllowanceChargeFieldMeta } from  '../../meta/cac/AllowanceChargeMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PaymentMeansDisplay from './PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: AllowanceCharge
  meta: FieldMeta<T>
}

export default function AllowanceChargeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AllowanceChargeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AllowanceChargeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.ChargeIndicator} 
          value={value.ChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AllowanceChargeFieldMeta.ChargeIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode} 
          value={value.AllowanceChargeReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.AllowanceChargeReason} 
          value={value.AllowanceChargeReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AllowanceChargeFieldMeta.AllowanceChargeReason} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric} 
          value={value.MultiplierFactorNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.PrepaidIndicator} 
          value={value.PrepaidIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={AllowanceChargeFieldMeta.PrepaidIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={AllowanceChargeFieldMeta.SequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AllowanceChargeFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.BaseAmount} 
          value={value.BaseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AllowanceChargeFieldMeta.BaseAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AllowanceChargeFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AllowanceChargeFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={AllowanceChargeFieldMeta.PerUnitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={AllowanceChargeFieldMeta.TaxCategory} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={AllowanceChargeFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AllowanceChargeFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={AllowanceChargeFieldMeta.PaymentMeans} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
