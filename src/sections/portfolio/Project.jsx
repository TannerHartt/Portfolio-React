import Card from '../../components/Card/Card.jsx';

const Project = ({ project }) => {
    return (
        <Card className="portfolio__project">
            <div className="portfolio__project-image">
                <img src={project.image} alt="Project Img" />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="portfolio__project-cta">
                <a href={project.demo} className='btn sm' target='_blank' rel='noreferrer noopener'>
                    Demo
                </a>
                <a href={project.github} className='btn sm primary' target='_blank' rel='noreferrer noopener'>
                    Github
                </a>
            </div>
        </Card>
    )
}

export default Project
