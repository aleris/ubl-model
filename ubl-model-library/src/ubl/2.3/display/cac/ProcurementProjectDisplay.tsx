import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ProcurementProject | undefined
  meta: FieldMeta<T>
}

export default function ProcurementProjectDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ProcurementProject">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ProcurementProjectFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ProcurementProjectFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Name"
            label="Name"
            items={value.Name}
            meta={ProcurementProjectFieldMeta.Name} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Name"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.Name}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ProcurementProjectFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Procurement Type Code"
            value={value.ProcurementTypeCode?.[0]}
            meta={ProcurementProjectFieldMeta.ProcurementTypeCode}
          />

          <CodeDisplay
            label="Procurement Sub Type Code"
            value={value.ProcurementSubTypeCode?.[0]}
            meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode}
          />

          <CodeDisplay
            label="Quality Control Code"
            value={value.QualityControlCode?.[0]}
            meta={ProcurementProjectFieldMeta.QualityControlCode}
          />

          <AmountDisplay
            label="Required Fee"
            value={value.RequiredFeeAmount?.[0]}
            meta={ProcurementProjectFieldMeta.RequiredFeeAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-FeeDescription"
            label="Fee Description"
            items={value.FeeDescription}
            meta={ProcurementProjectFieldMeta.FeeDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Fee Description"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.FeeDescription}
              />
            }
          />

          <DateDisplay
            label="Requested Delivery Date"
            value={value.RequestedDeliveryDate?.[0]}
            meta={ProcurementProjectFieldMeta.RequestedDeliveryDate}
          />

          <QuantityDisplay
            label="Estimated Overall Contract"
            value={value.EstimatedOverallContractQuantity?.[0]}
            meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ProcurementProjectFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="SME Suitable"
            value={value.SMESuitableIndicator?.[0]}
            meta={ProcurementProjectFieldMeta.SMESuitableIndicator}
          />

          <RequestedTenderTotalDisplay
            label="Requested Tender Total"
            value={value.RequestedTenderTotal?.[0]}
            meta={ProcurementProjectFieldMeta.RequestedTenderTotal}
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification ubl-MainCommodityClassification"
            label="Main Commodity Classification"
            items={value.MainCommodityClassification}
            meta={ProcurementProjectFieldMeta.MainCommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Main Commodity Classification"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.MainCommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CommodityClassification ubl-AdditionalCommodityClassification"
            label="Additional Commodity Classification"
            items={value.AdditionalCommodityClassification}
            meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification} 
            itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
              <CommodityClassificationDisplay
                key={key}
                label="Additional Commodity Classification"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementAdditionalType"
            label="Procurement Additional Type"
            items={value.ProcurementAdditionalType}
            meta={ProcurementProjectFieldMeta.ProcurementAdditionalType} 
            itemDisplay={ (itemValue: ProcurementAdditionalType, key: string | number) =>
              <ProcurementAdditionalTypeDisplay
                key={key}
                label="Procurement Additional Type"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.ProcurementAdditionalType}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Location ubl-RealizedLocation"
            label="Realized Location"
            items={value.RealizedLocation}
            meta={ProcurementProjectFieldMeta.RealizedLocation} 
            itemDisplay={ (itemValue: Location, key: string | number) =>
              <LocationDisplay
                key={key}
                label="Realized Location"
                value={itemValue}
                meta={ProcurementProjectFieldMeta.RealizedLocation}
              />
            }
          />

          <PeriodDisplay
            label="Planned Period"
            value={value.PlannedPeriod?.[0]}
            meta={ProcurementProjectFieldMeta.PlannedPeriod}
          />

          <ContractExtensionDisplay
            label="Contract Extension"
            value={value.ContractExtension?.[0]}
            meta={ProcurementProjectFieldMeta.ContractExtension}
          />

          <ElementListDisplay
            className="ubl-cac ubl-RequestForTenderLine"
            label="Request For Tender Line"
            items={value.RequestForTenderLine}
            meta={ProcurementProjectFieldMeta.RequestForTenderLine} 
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
