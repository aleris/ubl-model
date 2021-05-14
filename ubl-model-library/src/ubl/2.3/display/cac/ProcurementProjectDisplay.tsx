import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProject } from  '../../model/cac/ProcurementProject'
import { ProcurementProjectFieldMeta } from  '../../meta/cac/ProcurementProjectMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CommodityClassificationDisplay from './CommodityClassificationDisplay'
import { CommodityClassification } from '../../model/cac/CommodityClassification'
import ContractExtensionDisplay from './ContractExtensionDisplay'
import { ContractExtension } from '../../model/cac/ContractExtension'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ProcurementAdditionalTypeDisplay from './ProcurementAdditionalTypeDisplay'
import { ProcurementAdditionalType } from '../../model/cac/ProcurementAdditionalType'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import RequestedTenderTotalDisplay from './RequestedTenderTotalDisplay'
import { RequestedTenderTotal } from '../../model/cac/RequestedTenderTotal'
import RequestForTenderLineDisplay from './RequestForTenderLineDisplay'
import { RequestForTenderLine } from '../../model/cac/RequestForTenderLine'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementProject
  meta: FieldMeta<T>
}

export default function ProcurementProjectDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProcurementProject ubl-ProcurementProjectType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProcurementProject ubl-UBLExtensions"
          meta={ProcurementProjectFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Identifier ubl-ID"
          meta={ProcurementProjectFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Text ubl-Name"
          meta={ProcurementProjectFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Text ubl-Description"
          meta={ProcurementProjectFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Code ubl-ProcurementTypeCode"
          meta={ProcurementProjectFieldMeta.ProcurementTypeCode} 
          value={value.ProcurementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procurement Type Code"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.ProcurementTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Code ubl-ProcurementSubTypeCode"
          meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode} 
          value={value.ProcurementSubTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procurement Sub Type Code"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Code ubl-QualityControlCode"
          meta={ProcurementProjectFieldMeta.QualityControlCode} 
          value={value.QualityControlCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Quality Control Code"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.QualityControlCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Amount ubl-RequiredFeeAmount"
          meta={ProcurementProjectFieldMeta.RequiredFeeAmount} 
          value={value.RequiredFeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Required Fee"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.RequiredFeeAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Text ubl-FeeDescription"
          meta={ProcurementProjectFieldMeta.FeeDescription} 
          value={value.FeeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Fee Description"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.FeeDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Date ubl-RequestedDeliveryDate"
          meta={ProcurementProjectFieldMeta.RequestedDeliveryDate} 
          value={value.RequestedDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Requested Delivery Date"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.RequestedDeliveryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Quantity ubl-EstimatedOverallContractQuantity"
          meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity} 
          value={value.EstimatedOverallContractQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Estimated Overall Contract"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Text ubl-Note"
          meta={ProcurementProjectFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProject ubl-Indicator ubl-SMESuitableIndicator"
          meta={ProcurementProjectFieldMeta.SMESuitableIndicator} 
          value={value.SMESuitableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="SME Suitable"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.SMESuitableIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProject ubl-RequestedTenderTotal"
          meta={ProcurementProjectFieldMeta.RequestedTenderTotal} 
          value={value.RequestedTenderTotal}
          itemDisplay={ (itemValue: RequestedTenderTotal, key: string | number) =>
            <RequestedTenderTotalDisplay
              key={key}
              label="Requested Tender Total"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.RequestedTenderTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProject ubl-CommodityClassification ubl-MainCommodityClassification"
          meta={ProcurementProjectFieldMeta.MainCommodityClassification} 
          value={value.MainCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Main Commodity Classification"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.MainCommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProject ubl-CommodityClassification ubl-AdditionalCommodityClassification"
          meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification} 
          value={value.AdditionalCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay
              key={key}
              label="Additional Commodity Classification"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProject ubl-ProcurementAdditionalType"
          meta={ProcurementProjectFieldMeta.ProcurementAdditionalType} 
          value={value.ProcurementAdditionalType}
          itemDisplay={ (itemValue: ProcurementAdditionalType, key: string | number) =>
            <ProcurementAdditionalTypeDisplay
              key={key}
              label="Procurement Additional Type"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.ProcurementAdditionalType}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProject ubl-Location ubl-RealizedLocation"
          meta={ProcurementProjectFieldMeta.RealizedLocation} 
          value={value.RealizedLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Realized Location"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.RealizedLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProject ubl-Period ubl-PlannedPeriod"
          meta={ProcurementProjectFieldMeta.PlannedPeriod} 
          value={value.PlannedPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Planned Period"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.PlannedPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProject ubl-ContractExtension"
          meta={ProcurementProjectFieldMeta.ContractExtension} 
          value={value.ContractExtension}
          itemDisplay={ (itemValue: ContractExtension, key: string | number) =>
            <ContractExtensionDisplay
              key={key}
              label="Contract Extension"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.ContractExtension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProject ubl-RequestForTenderLine"
          meta={ProcurementProjectFieldMeta.RequestForTenderLine} 
          value={value.RequestForTenderLine}
          itemDisplay={ (itemValue: RequestForTenderLine, key: string | number) =>
            <RequestForTenderLineDisplay
              key={key}
              label="Request For Tender Line"
              value={itemValue}
              meta={ProcurementProjectFieldMeta.RequestForTenderLine}
            />
          }
        />
        </div>
    </div>
  )
}
