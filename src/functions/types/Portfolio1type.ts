type Portfoliotype = {
    navimg: string;
    bio: {
        name: string;
        profession: string; 
        gender: boolean; 
        description: string
        img: string
    }; 
    wcm: {description: string}; 
    whatido: {
        description: string; services: {icon: string; name: string}[]
    }; 
    projects: {name: string; img: string, live: string, link: string}[][]; 
    testimolials: [{name: string; profession: string; comment: string}]
    phone: string;
    email: string;
    address: string;
};

export type {Portfoliotype}