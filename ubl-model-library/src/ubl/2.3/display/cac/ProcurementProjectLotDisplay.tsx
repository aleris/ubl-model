import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcurementProjectLot } from  '../../model/cac/ProcurementProjectLot'
import { ProcurementProjectLotFieldMeta } from  '../../meta/cac/ProcurementProjectLotMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ProcurementProjectDisplay from './ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import TenderingProcessDisplay from './TenderingProcessDisplay'
import { TenderingProcess } from '../../model/cac/TenderingProcess'
import TenderingTermsDisplay from './TenderingTermsDisplay'
import { TenderingTerms } from '../../model/cac/TenderingTerms'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ProcurementProjectLot
  meta: FieldMeta<T>
}

export default function ProcurementProjectLotDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ProcurementProjectLot ubl-ProcurementProjectLotType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ProcurementProjectLot ubl-UBLExtensions"
          meta={ProcurementProjectLotFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ProcurementProjectLot ubl-Identifier ubl-ID"
          meta={ProcurementProjectLotFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-DocumentReference ubl-LegalDocumentReference"
          meta={ProcurementProjectLotFieldMeta.LegalDocumentReference} 
          value={value.LegalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Legal Document Reference"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.LegalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-DocumentReference ubl-TechnicalDocumentReference"
          meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference} 
          value={value.TechnicalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Technical Document Reference"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.TechnicalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-DocumentReference ubl-RequiredDocumentReference"
          meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference} 
          value={value.RequiredDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Required Document Reference"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.RequiredDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-DocumentReference ubl-ProvidedDocumentReference"
          meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference} 
          value={value.ProvidedDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Provided Document Reference"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.ProvidedDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-TenderingTerms"
          meta={ProcurementProjectLotFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay
              key={key}
              label="Tendering Terms"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.TenderingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-TenderingProcess"
          meta={ProcurementProjectLotFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay
              key={key}
              label="Tendering Process"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.TenderingProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ProcurementProjectLot ubl-ProcurementProject"
          meta={ProcurementProjectLotFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={ProcurementProjectLotFieldMeta.ProcurementProject}
            />
          }
        />
        </div>
    </div>
  )
}
