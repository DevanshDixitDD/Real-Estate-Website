import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
//import {MdOutlinesArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
import { MdOutlineArrowDropDown } from 'react-icons/md';



const Value = () => {
    const [className, setClassName] = useState(null);
  return (
    <section className="v-wrapper">
        <div className="padding innerWidth flexCenter v-container">
            {/* left side */}
            <div className="flexCenter v-left">
                <div className="image-container dif-image">
                    <img src="./white.png" alt="" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value we Give to You</span>
                <span className="secondaryText">
                    We always ready to help by providing the best services for you.
                    <br />
                    We believ a good place to live can make your life better
                </span>

               
                <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i)=>{
                                
                                return (
                                    <AccordionItem className={' $(className)'} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className="flexCenter accordionButton">

                                                <AccordionItemState>
                                                    {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>
                                                <div className="flexCenter icon">{item.icon}</div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}/>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                </Accordion>
            </div>
        </div>
    </section>
  );
}

export default Value