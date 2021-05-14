import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderPreparation
  meta: FieldMeta<T>
}

export default function TenderPreparationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderPreparation ubl-TenderPreparationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderPreparation ubl-UBLExtensions"
          meta={TenderPreparationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderPreparationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderPreparation ubl-Identifier ubl-TenderEnvelopeID"
          meta={TenderPreparationFieldMeta.TenderEnvelopeID} 
          value={value.TenderEnvelopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Tender Envelope Identifier"
              value={itemValue}
              meta={TenderPreparationFieldMeta.TenderEnvelopeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderPreparation ubl-Code ubl-TenderEnvelopeTypeCode"
          meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode} 
          value={value.TenderEnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tender Envelope Type Code"
              value={itemValue}
              meta={TenderPreparationFieldMeta.TenderEnvelopeTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderPreparation ubl-Text ubl-Description"
          meta={TenderPreparationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderPreparationFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderPreparation ubl-Identifier ubl-OpenTenderID"
          meta={TenderPreparationFieldMeta.OpenTenderID} 
          value={value.OpenTenderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Open Tender Identifier"
              value={itemValue}
              meta={TenderPreparationFieldMeta.OpenTenderID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderPreparation ubl-ProcurementProjectLot"
          meta={TenderPreparationFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={TenderPreparationFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderPreparation ubl-TenderRequirement ubl-DocumentTenderRequirement"
          meta={TenderPreparationFieldMeta.DocumentTenderRequirement} 
          value={value.DocumentTenderRequirement}
          itemDisplay={ (itemValue: TenderRequirement, key: string | number) =>
            <TenderRequirementDisplay
              key={key}
              label="Document Tender Requirement"
              value={itemValue}
              meta={TenderPreparationFieldMeta.DocumentTenderRequirement}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderPreparation ubl-EncryptionData ubl-TenderEncryptionData"
          meta={TenderPreparationFieldMeta.TenderEncryptionData} 
          value={value.TenderEncryptionData}
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
