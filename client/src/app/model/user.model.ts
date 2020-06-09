export interface User{
    contact: Contact;
    // skills: Skill[];
    // languages: Language[];
    // experience: Experience[];
    // education: Education[];
}

export interface Contact {
    firstName : String;
    lastName : String;
    title: String;
    address: String;
    email : String;
    phone : String;
}

export interface Skill{
    skillName: String;
    skillLevel: Number;
}

export interface Language{
    language: String;
    level: Number;
}

export interface Experience{
    title: String;
    startDay: Date;
    endDay: Date;
    jobDescription:String;
}

export interface Education{
    name: String;
    description: String;
}


