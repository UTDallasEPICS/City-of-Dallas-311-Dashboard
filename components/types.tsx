type ServiceRequest = {
  attributes: {type: string, url: string}
  Incap311__Location__c: {latitude: number, longitude: number}
  Incap311__Address__c: string
  Status: string
  Council_District__c: string
  Incap311__Service_Request_Number__c: string
  SR_Owner__c: string
  Service_Department_Code__c: string
  Service_Department__c: string
  Incap311__Service_Type_Version_Code__c: string
  Incap311__Service_Type_Version__c: string
}

export { ServiceRequest }