import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import styled from 'styled-components'; // Importing styled-components library

// Renaming styled components to avoid conflict
const ProjectsContainer = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const ProjectsWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const ProjectsTitle = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const ProjectsDesc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ProjectsToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ProjectsToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
const ProjectsDivider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

const ProjectsCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDesc>
          I have worked on a wide range of Data analyst projects Here are some of my projects.
        </ProjectsDesc>
        <ProjectsToggleButtonGroup >
          {toggle === 'all' ?
            <ProjectsToggleButton active value="all" onClick={() => setToggle('all')}>All</ProjectsToggleButton>
            :
            <ProjectsToggleButton value="all" onClick={() => setToggle('all')}>All</ProjectsToggleButton>
          }
          <ProjectsDivider />
          {toggle === 'Sales' ?
            <ProjectsToggleButton active value="Sales" onClick={() => setToggle('Sales')}>Sales</ProjectsToggleButton>
            :
            <ProjectsToggleButton value="Sales" onClick={() => setToggle('Sales')}>Sales</ProjectsToggleButton>
          }
          <ProjectsDivider />
          {toggle === 'Supply Chain' ?
            <ProjectsToggleButton active value="Supply Chain" onClick={() => setToggle('Supply Chain')}>Supply Chain</ProjectsToggleButton>
            :
            <ProjectsToggleButton value="Supply Chain" onClick={() => setToggle('Supply Chain')}>Supply Chain</ProjectsToggleButton>
          }
          <ProjectsDivider />
          {toggle === 'machine learning' ?
            <ProjectsToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ProjectsToggleButton>
            :
            <ProjectsToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ProjectsToggleButton>
          }
        </ProjectsToggleButtonGroup>
        <ProjectsCardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </ProjectsCardContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
