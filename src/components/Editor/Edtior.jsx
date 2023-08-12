import React from 'react';
import styles from '../Editor/Editor.module.css';
import { useState } from 'react';
import InputControl from '../InputControl/InputControl';
import { X } from 'react-feather';
import { useEffect } from 'react';

const Edtior = (props) => {

    const sections = props.sections;
    const information = props.information;

    const [activeSectionKey, setAciveSectionKey] = useState(Object.keys(sections)[0])
    const [activeInformation,setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    ); 
    const [activeDetailIndex, setActiveDetailIndex] = useState(0);
    const [sectionTitle, setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]   
    );

    const [values, setValues] = useState({
        name:activeInformation?.detail?.name || "",
        title:activeInformation?.detail?.title || "",
        linkedin:activeInformation?.detail?.linkedin || "",
        github:activeInformation?.detail?.github || "",
        phone:activeInformation?.detail?.phone || "",
        email:activeInformation?.detail?.email || "",
    }); 

    const handlePointUpdate = (value,index) =>{
        const tempValues = {...values};
        if(!Array.isArray(tempValues.points)) tempValues.points = [];
        tempValues.points[index] = value;
        setValues(tempValues);
    }

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Title"
                placeholder = "Enter title eg. Frontend developer"
                value={values.title}
                onChange={(event)=>setValues((prev) => ({...prev, title:event.target.value}))}
                />
                <InputControl 
                label="Company Name"
                placeholder = "Enter company name eg. amazon"
                value={values.companyName}
                onChange={(event)=>setValues((prev) => ({...prev, companyName:event.target.value}))}
                />
            </div>
            <div className={styles.row}>
            <InputControl 
                label="Certificate Link"
                placeholder = "Enter certificate link"
                value={values.certificateLink}
                onChange={(event)=>setValues((prev) => ({...prev, certificateLink:event.target.value}))}
                />
                <InputControl 
                label="Location"
                placeholder = "Enter location eg. Remote"
                value={values.location}
                onChange={(event)=>setValues((prev) => ({...prev, location:event.target.value}))}
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Start Date"
                type = "date"
                placeholder = "Enter start date of work"
                value={values.startDate}
                onChange={(event)=>setValues((prev) => ({...prev, startDate:event.target.value}))}
                />
                <InputControl 
                label="End Date"
                type = "date"
                placeholder = "Enter end date of work"
                value={values.endDate}
                onChange={(event)=>setValues((prev) => ({...prev, endDate:event.target.value}))}
                />
            </div>
            <div className={styles.column}>
                 <label>Enter work description</label>
                 <InputControl placeholder = "Line 1"
                 value={values.points ? values.points[0] : ""}
                 onChange={(event)=> handlePointUpdate(event.target.value, 0)}
                 />
                 <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 1)}
                 />
                 <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 2)}
                 />
            </div>
        </div>
    );

    const projectBody =(
        <div className={styles.detail}>
            <div className={styles.row}>
            <InputControl 
                label="Title"
                value={values.title}
                placeholder = "Enter title eg. Chap app"
                onChange={(event)=>setValues((prev) => ({...prev, title:event.target.value}))}
                />
            </div>
            <InputControl 
                label="Overview"
                value={values.overview}
                placeholder = "Enter basic overview of project"
                onChange={(event)=>setValues((prev) => ({...prev, overview:event.target.value}))}
            />
            <div className={styles.row}>
                <InputControl 
                label="Deployed Link"
                value={values.link}
                placeholder = "Enter deployed link of project"
                onChange={(event)=>setValues((prev) => ({...prev, link:event.target.value}))}
                />
                <InputControl 
                label="Github Link"
                value={values.github}
                placeholder = "Enter github link of project"
                onChange={(event)=>setValues((prev) => ({...prev, github:event.target.value}))}
                />
            </div>
            <div className={styles.column}>
                 <lalel>Enter project description</lalel>
                 <InputControl placeholder = "Line 1"
                 value={values.points ? values.points[0] : ""}
                 onChange={(event)=> handlePointUpdate(event.target.value, 0)}
                 />
                 <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 1)}
                 />
                 <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 2)}
                 />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 4)}
                 />
            </div>
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Title"
                value={values.title}
                placeholder = "Enter title eg. B-tech"
                onChange={(event)=>setValues((prev) => ({...prev, title:event.target.value}))}
                />
            </div>
                <InputControl 
                label="Collage/School Name"
                value={values.collage}
                placeholder = "Enter name of your collage/school"
                onChange={(event)=>setValues((prev) => ({...prev, collage:event.target.value}))}
                />
            <div className={styles.row}>
                <InputControl 
                label="Start Date"
                value={values.startDate}
                type = "date"
                placeholder = "Enter start date of this education"
                onChange={(event)=>setValues((prev) => ({...prev, startDate:event.target.value}))}
                />
                <InputControl 
                label="End Date"
                value={values.endDate}
                type = "date"
                placeholder = "Enter end date of this education"
                onChange={(event)=>setValues((prev) => ({...prev, endDate:event.target.value}))}
                />
            </div>    
        </div>
    );

    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl 
                label="Name"
                value={values.name}
                placeholder = "Enter your full name eg. John Doe"
                onChange={(event)=>setValues((prev) => ({...prev, name:event.target.value}))}
                />
                 <InputControl 
                label="Title"
                value={values.title}
                placeholder = "Enter your title eg. Frontend developer"
                onChange={(event)=>setValues((prev) => ({...prev, title:event.target.value}))}
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Linkedin link"
                value={values.linkedin}
                placeholder = "Enter your linkedin profile link"
                onChange={(event)=>setValues((prev) => ({...prev, linkedin:event.target.value}))}
                />
                 <InputControl 
                label="Github Link"
                value={values.github}
                placeholder = "Enter your github profile link"
                onChange={(event)=>setValues((prev) => ({...prev, github:event.target.value}))}
                />
            </div>
            <div className={styles.row}>
                <InputControl 
                label="Email"
                value={values.email}
                placeholder = "Enter your email eg. example@gmail.com"
                onChange={(event)=>setValues((prev) => ({...prev, email:event.target.value}))}
                />
                 <InputControl 
                label="Enter Phone"
                value={values.phone}
                placeholder = "Enter your phone number"
                onChange={(event)=>setValues((prev) => ({...prev, phone:event.target.value}))}
                />
            </div>
            
        </div>
    );

    const achievementsBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                 <lalel>List your achievements </lalel>
                 <InputControl placeholder = "Line 1"
                 value={values.points ? values.points[0] : ""}
                 onChange={(event)=> handlePointUpdate(event.target.value, 0)}
                 />
                 <InputControl placeholder="Line 2"
                    value={values.points ? values.points[1] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 1)}
                 />
                 <InputControl placeholder="Line 3"
                    value={values.points ? values.points[2] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 2)}
                 />
                <InputControl placeholder="Line 3"
                    value={values.points ? values.points[3] : ""}
                    onChange={(event)=> handlePointUpdate(event.target.value, 3)}
                 />
            </div>
        </div>
    );

    const summaryBody = (
        <div className={styles.detail}>
                <InputControl 
                label="Summary"
                value={values.summary}
                placeholder = "Enter your objective/summary"
                onChange={(event)=>setValues((prev) => ({...prev, summary:event.target.value}))}
                />
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
                <InputControl 
                label="Other"
                values={values.other}
                placeholder = "Enter something"
                onChange={(event)=>setValues((prev) => ({...prev, other:event.target.value}))}
                />
        </div>
    );

    const generateBody = () =>{
        switch(sections[activeSectionKey]){
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            case sections.project:
                return projectBody;
            case sections.education:
                return educationBody;
            case sections.achievement:
                return achievementsBody;
            case sections.summary:
                return summaryBody;
            case sections.other:
                return otherBody;
            default: 
                return null;
        }
    }

    const handleSubmission = () =>{
        switch (sections[activeSectionKey]){
            case sections.basicInfo:{
                const tempDetail = {
                    name:values.name,
                    title:values.title,
                    linkedin:values.linkedin,
                    github:values.github,
                    email:values.email,
                    phone:values.phone,
                }
                props.setInformation((prev) => ({...prev, [sections.basicInfo]:{...prev[sections.basicInfo], detail : tempDetail, sectionTitle},
                }));
                break;
            }
            case sections.workExp:{
                const tempDetail = {
                    certificateLink:values.certificateLink,
                    title:values.title,
                    startDate:values.startDate,
                    endDate:values.endDate,
                    companyName:values.companyName,
                    location:values.location,
                    points:values.points,
                }
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({...prev, [sections.workExp]:{...prev[sections.workExp], detail : tempDetail, sectionTitle},
                }));
                break;
            }
            case sections.project:{
                const tempDetail = {
                    link:values.link,
                    title:values.title,
                    overview:values.overview,
                    github:values.github,
                    points:values.points,
                }
                const tempDetails = [...information[sections.project]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({...prev, [sections.project]:{...prev[sections.project], detail : tempDetail, sectionTitle},
                }));
                break;
            }
            case sections.education:{
                const tempDetail = {
                    title:values.title,
                    collage:values.collage,
                    startDate:values.startDate,
                    endDate:values.endDate,

                }
                const tempDetails = [...information[sections.education]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
                props.setInformation((prev) => ({...prev, [sections.education]:{...prev[sections.education], detail : tempDetail, sectionTitle},
                }));
                break;
            }
            case sections.achievement:{
                const tempPoints = values.points;
                props.setInformation((prev) => ({...prev, [sections.achievement]:{...prev[sections.achievement], points : tempPoints, sectionTitle},
                }));
                break;
            }
            case sections.summary:{
                const tempDetail = values.summary;
                props.setInformation((prev) => ({...prev, [sections.summary]:{...prev[sections.summary], detail : tempDetail, sectionTitle},
                }));
                break;
            }
            case sections.other:{
                const tempDetail = values.other;
                props.setInformation((prev) => ({...prev, [sections.other]:{...prev[sections.other], detail : tempDetail, sectionTitle},
                }));
                break;
            }
        }
    };


    useEffect(()=>{
        const activeInfo = information[sections[activeSectionKey]]
        setActiveInformation(activeInfo)
        setSectionTitle(sections[activeSectionKey])
        setActiveDetailIndex(0)
        setValues({
            name:activeInformation?.detail?.name || "",
            
            overview:activeInfo?.details ? activeInfo.details[0]?.overview || "" : "",
            link:activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
            certificateLink:activeInfo?.details ? activeInfo.details[0]?.certificateLink || "" : "",
            companyName:activeInfo?.details ? activeInfo.details[0]?.companyName || "" : "",
            location:activeInfo?.details ? activeInfo.details[0]?.location || "" : "",
            startDate:activeInfo?.details ? activeInfo.details[0]?.startDate || "" : "",
            endDate:activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
            points: activeInfo?.details ? activeInfo.details[0]?.points ? [...activeInfo.details[0]?.points] : "" : activeInfo?.points ? [...activeInfo.points] : "",
           
            title: activeInfo?.details ? activeInfo.details[0]?.title || "" : activeInfo?.detail.title || "",
            linkedin:activeInformation?.detail?.linkedin || "",
            github:activeInfo?.details ? activeInfo.details[0]?.github || "" : activeInfo?.detail.github || "",
            phone:activeInformation?.detail?.phone || "",
            email:activeInformation?.detail?.email || "",
            summary: typeof activeInformation?.detail !== Object ? activeInfo.detail : "",
            other: typeof activeInformation?.detail !== Object ? activeInfo.detail : "",
        })
    },[activeSectionKey]);

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
            <InputControl label="Title" placeholder="Enter section title"
            value={sectionTitle}
            onChange ={(event) => setSectionTitle(event.target.value)}
            />
            <div className={styles.chips}>
                {
                activeInformation?.details?activeInformation?.details?.map((item, index)=>(
                  <div className={`${styles.chip} ${activeDetailIndex === index?styles.active:""}`} key={item.title + index} onClick={()=> setActiveDetailIndex(index)}>
                    <p>{sections[activeSectionKey]} {index + 1}</p>
                    <X />
                  </div>  
                )) 
                : ""}  
            </div>
            {generateBody()}
            <button onClick={handleSubmission}>Save</button>
        </div>
    </div>
  );
}

export default Edtior