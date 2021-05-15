import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TenderPreparation | undefined
  meta: FieldMeta<T>
}

export default function TenderPreparationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderPreparation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderPreparationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Tender Envelope Identifier"
            value={value.TenderEnvelopeID?.[0]}
            meta={TenderPreparationFieldMeta.TenderEnvelopeID}
          />

          <CodeDisplay
            label="Tender Envelope Type Code"
            value={value.TenderEnvelopeTypeCode?.[0]}
            meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderPreparationFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderPreparationFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Open Tender Identifier"
            value={value.OpenTenderID?.[0]}
            meta={TenderPreparationFieldMeta.OpenTenderID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={TenderPreparationFieldMeta.ProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Procurement Project Lot"
                value={itemValue}
                meta={TenderPreparationFieldMeta.ProcurementProjectLot}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderRequirement ubl-DocumentTenderRequirement"
            label="Document Tender Requirement"
            items={value.DocumentTenderRequirement}
            meta={TenderPreparationFieldMeta.DocumentTenderRequirement} 
            itemDisplay={ (itemValue: TenderRequirement, key: string | number) =>
              <TenderRequirementDisplay
                key={key}
                label="Document Tender Requirement"
                value={itemValue}
                meta={TenderPreparationFieldMeta.DocumentTenderRequirement}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EncryptionData ubl-TenderEncryptionData"
            label="Tender Encryption Data"
            items={value.TenderEncryptionData}
            meta={TenderPreparationFieldMeta.TenderEncryptionData} 
            itemDisplay={ (itemValue: EncryptionData, key: string | number) =>
              <EncryptionDataDisplay
                key={key}
                label="Tender Encryption Data"
                value={itemValue}
                meta={TenderPreparationFieldMeta.TenderEncryptionData}
              />
            }
          />
        </div>
    </div>
  )
}
