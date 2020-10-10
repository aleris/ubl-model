import { ContractingParty } from '../cac/ContractingParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { EconomicOperatorParty } from '../cac/EconomicOperatorParty'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLotReference } from '../cac/ProcurementProjectLotReference'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document sent from a Contracting Party to the Economic Operator confirming that the latter has been unsubscribed
 * from a tendering procedure.
 */
export interface UnsubscribeFromProcedureResponse {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions: [UBLExtensions] | undefined

  /**
   * The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be
   * encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.
   * Identifier
   * Cardinality: 0..1
   */
  ContractFolderID: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A reference to the unsubscribe to procedure document associated with this confirmation.
   * Document Reference
   * Cardinality: 0..1
   */
  UnsubscribeToProcedureDocumentReference: [DocumentReference] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The Economic Operator receiving this unsubscribe to procedure confirmation.
   * Economic Operator Party
   * Cardinality: 1
   */
  EconomicOperatorParty: [EconomicOperatorParty]

  /**
   * The Contracting Party.
   * Contracting Party
   * Cardinality: 1
   */
  ContractingParty: [ContractingParty]

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject: [ProcurementProject] | undefined

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot Reference
   * Cardinality: 0..n
   */
  ProcurementProjectLotReference: Array<ProcurementProjectLotReference> | undefined
}
