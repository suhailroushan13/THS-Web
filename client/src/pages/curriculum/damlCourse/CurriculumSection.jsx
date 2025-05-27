import React, { useState, useEffect } from 'react';
import CurriculumTimeline from '../coursePageSections/CurriculumTimeline';
import CurriculumTimelineHorizontal from '../coursePageSections/CurriculumTimelineHorizontal';
import useCurriculumData from './useCurriculumData';

// Use the hook to get the curriculum data
const CurriculumSection = ({
  curriculumData: propsCurriculumData = null,
  loading: propsLoading = false,
  error: propsError = null,
  onPhaseChange = null
}) => {
  // Use the hook to get the curriculum data if not provided via props
  const { curriculumData: hookData, loading: hookLoading, error: hookError } = useCurriculumData();

  // Use props data if provided, otherwise use hook data
  const curriculumData = propsCurriculumData || hookData;
  const loading = propsLoading || hookLoading;
  const error = propsError || hookError;

  const [activePhase, setActivePhase] = useState(null);
  const [content, setContent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Set initial content
  useEffect(() => {
    if (!curriculumData || !curriculumData.phases || curriculumData.phases.length === 0) return;

    // Try to find the 'warmup' phase first
    let initialPhase = curriculumData.phases.find(phase => phase.id === 'warmup');

    // If not found, try 'warmup-1'
    if (!initialPhase) {
      initialPhase = curriculumData.phases.find(phase => phase.id === 'warmup-1');
    }

    // If still not found, just use the first phase
    if (!initialPhase && curriculumData.phases.length > 0) {
      initialPhase = curriculumData.phases[0];
    }

    if (initialPhase) {
      setContent(initialPhase.content);
      setActivePhase(initialPhase.id);

      // Call the onPhaseChange callback if provided
      if (onPhaseChange && typeof onPhaseChange === 'function') {
        onPhaseChange(initialPhase.id, initialPhase);
      }
    }
  }, [curriculumData, onPhaseChange]);

  // Handle phase change with animation
  const handlePhaseChange = (phaseId) => {
    if (phaseId === activePhase || isAnimating || loading) return;

    setIsAnimating(true);

    // Fade out current content
    const contentElement = document.getElementById('curriculum-content');
    if (contentElement) {
      contentElement.style.opacity = '0';

      // After fade out, update content and fade in
      setTimeout(() => {
        const newPhase = curriculumData.phases.find(phase => phase.id === phaseId);
        if (newPhase) {
          setContent(newPhase.content);
          setActivePhase(phaseId);

          // Call the onPhaseChange callback if provided
          if (onPhaseChange && typeof onPhaseChange === 'function') {
            onPhaseChange(phaseId, newPhase);
          }

          // Fade in new content
          setTimeout(() => {
            contentElement.style.opacity = '1';
            setIsAnimating(false);
          }, 50);
        }
      }, 300);
    }
  };

  // Render technology icons
  const renderTechSection = (techItems) => {
    return (
      <div className="flex flex-wrap gap-4">
        {techItems.map((tech, index) => (
          <div key={index} className="flex items-center justify-center flex-col">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 mr-2"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/landing-page/placeholder.png'; // Fallback image
              }}
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };

  // Render list items
  const renderListSection = (items) => {
    return (
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  // Render section based on type
  const renderSection = (section) => {
    switch (section.type) {
      case 'tech':
        return renderTechSection(section.content);
      case 'list':
        return renderListSection(section.content);
      case 'text':
      default:
        return <p className="text-gray-700 mb-4">{section.content}</p>;
    }
  };

  // Render loading state
  const renderLoading = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  // Render error state
  const renderError = () => (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error!</strong>
      <span className="block sm:inline"> {error}</span>
    </div>
  );

  return (
    <section className="py-8 ">
      <div className="scale-[0.9] container mx-auto px-4">
        <div className="mx-auto rounded-lg overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 pb-20">{curriculumData?.title || "MERN Curriculum."}</h2>

          {error && renderError()}

          {loading ? (
            renderLoading()
          ) : (
            <div className="flex flex-col md:flex-row min-h-[700px]">
              {/* Left Timeline */}
              <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-0 rounded-3xl flex flex-col">
                <div className="h-full flex items-center justify-center">
                  <CurriculumTimeline
                    phases={curriculumData?.phases || []}
                    activePhase={activePhase}
                    onPhaseClick={handlePhaseChange}
                  />
                  <CurriculumTimelineHorizontal
                    phases={curriculumData?.phases || []}
                    activePhase={activePhase}
                    onPhaseClick={handlePhaseChange}
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-2/3 lg:w-3/4 bg-gray-100 p-10 rounded-3xl shadow-lg">
                <div
                  id="curriculum-content"
                  className="transition-all duration-300"
                  style={{ opacity: 1 }}
                >
                  {content ? (
                    <>
                      <h3 className="text-4xl font-bold mb-20">{content.title}</h3>

                      {content.sections && content.sections.map((section, index) => (
                        <div key={index} className="mb-8">
                          <h4 className="text-2xl font-semibold mb-4">{section.title}</h4>
                          <hr className="border-t border-gray-300 mb-4" />
                          {renderSection(section)}
                        </div>
                      ))}
                    </>
                  ) : !loading && (
                    <div className="text-center py-10">
                      <p className="text-xl text-gray-600">No curriculum content available.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection; 