import React from "react";
import { ContactForm } from "./Contact_Form";
import { FAQ } from "./FAQS";
import {Footer} from "../Landing/footer/Footer"

export const Help_Support_Page: React.FC = () =>{
    return(
        <>
       <ContactForm/>
        <FAQ/>
        <Footer />
        </>
    )
}
