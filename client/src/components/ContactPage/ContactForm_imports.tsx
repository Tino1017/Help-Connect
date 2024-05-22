import React from "react";
import { ContactForm } from "./Contact_Form";
import { FAQ } from "./FAQS";

export const Contact_Page: React.FC = () =>{
    return(
        <>
       <ContactForm/>
        <FAQ/>
        </>
    )
}
