import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderPreparation } from  '../../model/cac/TenderPreparation'
import { TenderPreparationFieldMeta } from  '../../meta/cac/TenderPreparationMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EncryptionDataDisplay from './EncryptionDataDisplay'
import { EncryptionData } from '../../model/cac/EncryptionData'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ProcurementProjectLotDisplay from './ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import TenderRequirementDisplay from './TenderRequirementDisplay'
import { TenderRequirement } from '../../model/cac/TenderRequirement'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderPreparation
  meta: FieldMeta<T>
}

export default function TenderPreparationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderPreparationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderPreparationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.TenderEnvelopeID} 
          value={value.TenderEnvelopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderPreparationFieldMeta.TenderEnvelopeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode} 
          value={value.TenderEnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderPreparationFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.OpenTenderID} 
          value={value.OpenTenderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderPreparationFieldMeta.OpenTenderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={TenderPreparationFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.DocumentTenderRequirement} 
          value={value.DocumentTenderRequirement}
          itemDisplay={ (itemValue: TenderRequirement, key: string | number) =>
            <TenderRequirementDisplay key={key} meta={TenderPreparationFieldMeta.DocumentTenderRequirement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderPreparationFieldMeta.TenderEncryptionData} 
          value={value.TenderEncryptionData}
          itemDisplay={ (itemValue: EncryptionData, key: string | number) =>
            <EncryptionDataDisplay key={key} meta={TenderPreparationFieldMeta.TenderEncryptionData} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
