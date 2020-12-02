import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionProperty } from  '../../model/cac/TenderingCriterionProperty'
import { TenderingCriterionPropertyFieldMeta } from  '../../meta/cac/TenderingCriterionPropertyMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceDisplay from './EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderingCriterionProperty
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode} 
          value={value.ValueDataTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode} 
          value={value.ValueUnitCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode} 
          value={value.ValueCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount} 
          value={value.ExpectedAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedID} 
          value={value.ExpectedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator} 
          value={value.ExpectedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedCode} 
          value={value.ExpectedCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric} 
          value={value.ExpectedValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription} 
          value={value.ExpectedDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ExpectedURI} 
          value={value.ExpectedURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ExpectedURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MaximumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MinimumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric} 
          value={value.MaximumValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric} 
          value={value.MinimumValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode} 
          value={value.TranslationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription} 
          value={value.CertificationLevelDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode} 
          value={value.CopyQualityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence} 
          value={value.TemplateEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay key={key} meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
