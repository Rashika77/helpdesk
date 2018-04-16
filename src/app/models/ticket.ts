export interface Iticket {
    id?:String,
    typeId?:String,
    title:String,
    requesterUser:String,
    assigneeUser?:String,
    affectedUser?:String,
    status?:String,
    priority?:String,
    department:String,
    creationTimestamp?:String,
    updationTimestamp?:String,
    referenceTicketId?:String,
    description:String
    contact:String
}
