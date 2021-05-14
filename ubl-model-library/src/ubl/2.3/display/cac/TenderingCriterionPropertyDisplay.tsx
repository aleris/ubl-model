import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: TenderingCriterionProperty
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingCriterionProperty ubl-TenderingCriterionPropertyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingCriterionProperty ubl-UBLExtensions"
          meta={TenderingCriterionPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Identifier ubl-ID"
          meta={TenderingCriterionPropertyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Text ubl-Name"
          meta={TenderingCriterionPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Text ubl-Description"
          meta={TenderingCriterionPropertyFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-TypeCode"
          meta={TenderingCriterionPropertyFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.TypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-ValueDataTypeCode"
          meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode} 
          value={value.ValueDataTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Value Data Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-ValueUnitCode"
          meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode} 
          value={value.ValueUnitCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Value Unit Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-ValueCurrencyCode"
          meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode} 
          value={value.ValueCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Value Currency Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Amount ubl-ExpectedAmount"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount} 
          value={value.ExpectedAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Expected Amount"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Identifier ubl-ExpectedID"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedID} 
          value={value.ExpectedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Expected Identifier"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Indicator ubl-ExpectedIndicator"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator} 
          value={value.ExpectedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Expected Indicator"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-ExpectedCode"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedCode} 
          value={value.ExpectedCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Expected Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Numeric ubl-ExpectedValueNumeric"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric} 
          value={value.ExpectedValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Expected Value"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Text ubl-ExpectedDescription"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription} 
          value={value.ExpectedDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Expected Description"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Identifier ubl-ExpectedURI"
          meta={TenderingCriterionPropertyFieldMeta.ExpectedURI} 
          value={value.ExpectedURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Expected URI"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ExpectedURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Amount ubl-MaximumAmount"
          meta={TenderingCriterionPropertyFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Amount"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MaximumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Amount ubl-MinimumAmount"
          meta={TenderingCriterionPropertyFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Minimum Amount"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MinimumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Numeric ubl-MaximumValueNumeric"
          meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric} 
          value={value.MaximumValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Value"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Numeric ubl-MinimumValueNumeric"
          meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric} 
          value={value.MinimumValueNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Minimum Value"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Quantity ubl-MaximumQuantity"
          meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity} 
          value={value.MaximumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Quantity"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Quantity ubl-MinimumQuantity"
          meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity} 
          value={value.MinimumQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Minimum Quantity"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-TranslationTypeCode"
          meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode} 
          value={value.TranslationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Translation Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Text ubl-CertificationLevelDescription"
          meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription} 
          value={value.CertificationLevelDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Certification Level Description"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingCriterionProperty ubl-Code ubl-CopyQualityTypeCode"
          meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode} 
          value={value.CopyQualityTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Copy Quality Type Code"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionProperty ubl-Period ubl-ApplicablePeriod"
          meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod} 
          value={value.ApplicablePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Applicable Period"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingCriterionProperty ubl-Evidence ubl-TemplateEvidence"
          meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence} 
          value={value.TemplateEvidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay
              key={key}
              label="Template Evidence"
              value={itemValue}
              meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence}
            />
          }
        />
        </div>
    </div>
  )
}
