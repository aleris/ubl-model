import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: AllowanceCharge
  meta: FieldMeta<T>
}

export default function AllowanceChargeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AllowanceCharge ubl-AllowanceChargeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AllowanceCharge ubl-UBLExtensions"
          meta={AllowanceChargeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Identifier ubl-ID"
          meta={AllowanceChargeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Indicator ubl-ChargeIndicator"
          meta={AllowanceChargeFieldMeta.ChargeIndicator} 
          value={value.ChargeIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Charge Indicator"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.ChargeIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Code ubl-AllowanceChargeReasonCode"
          meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode} 
          value={value.AllowanceChargeReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Allowance Charge Reason Code"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Text ubl-AllowanceChargeReason"
          meta={AllowanceChargeFieldMeta.AllowanceChargeReason} 
          value={value.AllowanceChargeReason}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Allowance Charge Reason"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.AllowanceChargeReason}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Numeric ubl-MultiplierFactorNumeric"
          meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric} 
          value={value.MultiplierFactorNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Multiplier Factor"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Indicator ubl-PrepaidIndicator"
          meta={AllowanceChargeFieldMeta.PrepaidIndicator} 
          value={value.PrepaidIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Prepaid Indicator"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.PrepaidIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Numeric ubl-SequenceNumeric"
          meta={AllowanceChargeFieldMeta.SequenceNumeric} 
          value={value.SequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Sequence"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.SequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Amount"
          meta={AllowanceChargeFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Amount ubl-BaseAmount"
          meta={AllowanceChargeFieldMeta.BaseAmount} 
          value={value.BaseAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Base Amount"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.BaseAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Code ubl-AccountingCostCode"
          meta={AllowanceChargeFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Text ubl-AccountingCost"
          meta={AllowanceChargeFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AllowanceCharge ubl-Amount ubl-PerUnitAmount"
          meta={AllowanceChargeFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Per Unit Amount"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.PerUnitAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AllowanceCharge ubl-TaxCategory"
          meta={AllowanceChargeFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Tax Category"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.TaxCategory}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AllowanceCharge ubl-TaxTotal"
          meta={AllowanceChargeFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AllowanceCharge ubl-PaymentMeans"
          meta={AllowanceChargeFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={AllowanceChargeFieldMeta.PaymentMeans}
            />
          }
        />
        </div>
    </div>
  )
}
