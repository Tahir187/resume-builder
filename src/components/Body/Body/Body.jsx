import React, { useEffect } from 'react'
import styles from "../Body/Body.module.css"
import { ArrowDown } from 'react-feather'
import Edtior from '../Editor/Edtior'
import { useState } from 'react'

const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"]
    const sections = {
      basicInfo: "Basic Info",
      workExp: "Work Experience",
      project: "Projects",
      education: "Education",
      achievement: "Achievements",
      summary: "Summary",
      other: "Other",
    };

    const [resumeInformation, setResumeInformation] = useState({
      [sections.basicInfo]:{
        id: sections.basicInfo,
        sectionTitle: sections.basicInfo,
        detail:{}
      },
      [sections.workExp]:{
        id: sections.workExp,
        sectionTitle: sections.workExp,
        details:[],
      },
      [sections.project]:{
        id: sections.project,
        sectionTitle: sections.project,
        details:[]
      },
      [sections.education]:{
        id: sections.education,
        sectionTitle: sections.education,
        details:[]
      },
      [sections.achievement]:{
        id: sections.achievement,
        sectionTitle: sections.achievement,
        points: []
      },
      [sections.summary]:{
        id: sections.summary,
        sectionTitle: sections.summary,
        detail: ''
      },
      [sections.other]:{
        id: sections.other,
        sectionTitle: sections.other,
        detail: ""
      },
    });

    useEffect(()=>{
      console.log(resumeInformation);
    },[resumeInformation])

  return (
    <div className={styles.container}>
    <p className={styles.heading}>Resume Builder</p>
    <div className={styles.toolbar}>
        <div className={styles.colors}>
            {colors.map((item)=>(
                 <span key={item} style={{backgroundColor: item}} className={styles.color} />
            ))}
            
        </div>
        <button>Download <ArrowDown/> </button>
    </div>
    <div className={styles.main}>
      <Edtior sections = {sections} information ={resumeInformation} setInformation = {setResumeInformation } />
              
    </div>
    </div>
  )
}

export default Body