import React, { useState } from 'react';
import HeaderDark from '../../../components/custom/headerDark';
import CurriculumSection from './CurriculumSection';
import useCurriculumData from './useCurriculumData';
import CoursePageHeroSection from './HeroSection';
import CoursePageOutcomes from '../coursePageSections/CourseOutcomes';
import CoursePagePartnersSection from '../coursePageSections/PartnersSection';
export default function WebCoursePage() {
    const { curriculumData, loading, error, setCurriculumData } = useCurriculumData();
    
    const [jsonInput, setJsonInput] = useState('');
    const [showJsonInput, setShowJsonInput] = useState(false);
    
    const handleJsonSubmit = (e) => {
        e.preventDefault();
        try {
            const parsedData = JSON.parse(jsonInput);
            setCurriculumData(parsedData);
        } catch (err) {
            alert('Invalid JSON format. Please check your input.');
        }
    };
    
    // Function to handle phase changes
    const handlePhaseChange = (phaseId, phaseData) => {
        console.log(`Phase changed to: ${phaseId}`, phaseData);
    };

    return (
        <div className="min-h-screen bg-white">
            <HeaderDark />
            <CoursePageHeroSection />
            <CoursePageOutcomes />
            
            <CurriculumSection 
                curriculumData={curriculumData}
                loading={loading}
                error={error}
                onPhaseChange={handlePhaseChange}
            />
            <CoursePagePartnersSection />
            
        </div>
    );
}