import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ProcurementProject
  meta: FieldMeta<T>
}

export default function ProcurementProjectDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ProcurementProjectFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ProcurementProjectFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcurementProjectFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcurementProjectFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.ProcurementTypeCode} 
          value={value.ProcurementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcurementProjectFieldMeta.ProcurementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode} 
          value={value.ProcurementSubTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcurementProjectFieldMeta.ProcurementSubTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.QualityControlCode} 
          value={value.QualityControlCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ProcurementProjectFieldMeta.QualityControlCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.RequiredFeeAmount} 
          value={value.RequiredFeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ProcurementProjectFieldMeta.RequiredFeeAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.FeeDescription} 
          value={value.FeeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcurementProjectFieldMeta.FeeDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.RequestedDeliveryDate} 
          value={value.RequestedDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ProcurementProjectFieldMeta.RequestedDeliveryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity} 
          value={value.EstimatedOverallContractQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ProcurementProjectFieldMeta.EstimatedOverallContractQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ProcurementProjectFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.SMESuitableIndicator} 
          value={value.SMESuitableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ProcurementProjectFieldMeta.SMESuitableIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.RequestedTenderTotal} 
          value={value.RequestedTenderTotal}
          itemDisplay={ (itemValue: RequestedTenderTotal, key: string | number) =>
            <RequestedTenderTotalDisplay key={key} meta={ProcurementProjectFieldMeta.RequestedTenderTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.MainCommodityClassification} 
          value={value.MainCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={ProcurementProjectFieldMeta.MainCommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification} 
          value={value.AdditionalCommodityClassification}
          itemDisplay={ (itemValue: CommodityClassification, key: string | number) =>
            <CommodityClassificationDisplay key={key} meta={ProcurementProjectFieldMeta.AdditionalCommodityClassification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.ProcurementAdditionalType} 
          value={value.ProcurementAdditionalType}
          itemDisplay={ (itemValue: ProcurementAdditionalType, key: string | number) =>
            <ProcurementAdditionalTypeDisplay key={key} meta={ProcurementProjectFieldMeta.ProcurementAdditionalType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.RealizedLocation} 
          value={value.RealizedLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ProcurementProjectFieldMeta.RealizedLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.PlannedPeriod} 
          value={value.PlannedPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ProcurementProjectFieldMeta.PlannedPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.ContractExtension} 
          value={value.ContractExtension}
          itemDisplay={ (itemValue: ContractExtension, key: string | number) =>
            <ContractExtensionDisplay key={key} meta={ProcurementProjectFieldMeta.ContractExtension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ProcurementProjectFieldMeta.RequestForTenderLine} 
          value={value.RequestForTenderLine}
          itemDisplay={ (itemValue: RequestForTenderLine, key: string | number) =>
            <RequestForTenderLineDisplay key={key} meta={ProcurementProjectFieldMeta.RequestForTenderLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
