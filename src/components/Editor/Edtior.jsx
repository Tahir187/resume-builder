import React from 'react';
import styles from '../Editor/Editor.module.css';
import { useState } from 'react';
import InputControl from '../InputControl/InputControl';


const Edtior = (props) => {
    const sections = props.sections
    const [activeSectionKey, setAciveSectionKey] = useState(Object.keys(sections)[0])

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Title"
                placeholder = "Enter title eg. Frontend developer"
                />
                <InputControl 
                label="Company Name"
                placeholder = "Enter company name eg. amazon"
                />
            </div>
            <div className={styles.row}>
            <InputControl 
                label="Certificate Link"
                placeholder = "Enter certificate link"
                />
                <InputControl 
                label="Location"
                placeholder = "Enter location eg. Remote"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Start Date"
                type = "date"
                placeholder = "Enter start date of work"
                />
                <InputControl 
                label="End Date"
                type = "date"
                placeholder = "Enter end date of work"
                />
            </div>
            <div className={styles.column}>
                 <lalel>Enter work description</lalel>
                 <InputControl placeholder = "Line 1"/>
                 <InputControl placeholder="Line 2"/>
                 <InputControl placeholder="Line 3"/>
            </div>
        </div>
    );

    const projectBody =(
        <div className={styles.detail}>
            <div className={styles.row}>
            <InputControl 
                label="Title"
                placeholder = "Enter title eg. Chap app"
                />
            </div>
            <InputControl 
                label="Overview"
                placeholder = "Enter basic overview of project"
            />
            <div className={styles.row}>
                <InputControl 
                label="Deployed Link"
                placeholder = "Enter deployed link of project"
                />
                <InputControl 
                label="Github Link"
                placeholder = "Enter github link of project"
                />
            </div>
            <div className={styles.column}>
                 <lalel>Enter project description</lalel>
                 <InputControl placeholder = "Line 1"/>
                 <InputControl placeholder="Line 2"/>
                 <InputControl placeholder="Line 3"/>
                 <InputControl placeholder="Line 4"/>
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Title"
                placeholder = "Enter title eg. B-tech"
                />
            </div>
                <InputControl 
                label="Collage/School Name"
                placeholder = "Enter name of your collage/school"
                />
            <div className={styles.row}>
                <InputControl 
                label="Start Date"
                type = "date"
                placeholder = "Enter start date of this education"
                />
                <InputControl 
                label="End Date"
                type = "date"
                placeholder = "Enter end date of this education"
                />
            </div>    
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Name"
                placeholder = "Enter your full name eg. John Doe"
                />
                 <InputControl 
                label="Title"
                placeholder = "Enter your title eg. Frontend developer"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Linkedin link"
                placeholder = "Enter your linkedin profile link"
                />
                 <InputControl 
                label="Github Link"
                placeholder = "Enter your github profile link"
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Email"
                placeholder = "Enter your email eg. example@gmail.com"
                />
                 <InputControl 
                label="Enter Phone"
                placeholder = "Enter your phone number"
                />
            </div>
            
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                 <lalel>List your achievements </lalel>
                 <InputControl placeholder = "Line 1"/>
                 <InputControl placeholder="Line 2"/>
                 <InputControl placeholder="Line 3"/>
                 <InputControl placeholder="Line 4"/>
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
                <InputControl 
                label="Summary"
                placeholder = "Enter your objective/summary"
                />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
                <InputControl 
                label="Other"
                placeholder = "Enter something"
                />
        </div>
    );

    const generateBody = () =>{}

  return (

    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map((key)=>(
                <div className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} key={key} onClick={()=> setAciveSectionKey(key)}>
                    {sections[key]}
                </div>
            ))}
        </div>
        <div className={styles.body}>
            <InputControl label="Title" placeholder="Enter section title"/>
        </div>
    </div>
  )
}

export default Edtior