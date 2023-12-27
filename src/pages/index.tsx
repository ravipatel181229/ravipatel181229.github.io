import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#252323",
}

const technologies = {
  "Front-end": [
    "HTML", "CSS", "Javascript"
  ],
  "Frameworks": [
    "ReactJS", "AngularJS", "NextJS", "Gatsby"
  ],
  "Backend": [
    ".NET", "NodeJS"
  ],
  "Database": [
    "MSSql", "MongoDB", "MySql"
  ]
}

const experiences = [
  {
    comapny: "Flawless Technologies",
    role: "Full-stack Developer",
    period: "since 2021",
    skills: ["React", "JS", "C#", "Web API"]
  },
  {
    comapny: "Helimp Softomation LLC.",
    role: "Full-stack Developer",
    period: "2019-2021",
    skills: ["AngularJS", "PHP", "Codeignite", "NodeJS"]
  },
  {
    comapny: "Syon Software Solutions",
    role: "Web Developer",
    period: "2016-2019",
    skills: ["C#", "PHP", "Wordpress", "RESTFul API"]
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div className="pin-container">
        <section id="profileSection" className="container-fluid bg-primary text-light pb-10 border-b-8 border-b-secondary">
          <div className="text-center p-20 text-4xl font-bold leading-snug uppercase">
            <h1 className="text-dark text-6xl hover:text-7xl transition-all">Hi There !!</h1>
            <h1>
              I am Ravi Patel,
              <br />
              A Full-stack Web developer from india,
              <br />
              working on Front-end As well as Back-end Technologies.
            </h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="text-center text-7xl">
              <a href="https://github.com/ravipatel181229" target="_blank">
                <i className="fi fi-brands-github hover:text-secondary"></i>
              </a>
            </div>
            <div className="text-center text-7xl">
              <a href="https://linkedin.com/in/ravipatel181229" target="_blank">
                <i className="fi fi-brands-linkedin hover:text-secondary"></i>
              </a>
            </div>
            <div className="text-center text-7xl">
              <a href="mailto:ravihpatel181229@gmail.com" target="_blank">
                <i className="fi fi-rs-envelope hover:text-secondary"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <a href="#wordCloudSection" className="display-5 text-body scroll-down-btn">
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="container-fluid border-b-8 border-primary py-10 pb-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Top Skills</h1>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4">{
              Object.entries(technologies).map(([key, value]) => {
                return <div>
                  <h3 className="mt-5 text-dark font-bold uppercase text-2xl">{key}</h3>
                  <div className="flex gap-2 justify-center mt-3">
                    {value.map((skill: any) => {
                      return <span className="p-3 bg-primary text-light rounded-sm">{skill}</span>
                    })}
                  </div>
                </div>
              })
            }
            </div>
          </div>
        </section>
        <div id="experienceSection" className="container-fluid bg-primary text-light border-b-8 border-b-secondary py-10 pb-20">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Professional Experiences</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {
                experiences.map(experience => {
                  return <div className="col-sm-6 col-lg-4 mt-3 mt-sm-0">
                    <div id="flawlessExperienceCard" className="card experience-card active" role="button">
                      <div className="row">
                        <div className="col-12 text-center">
                          <h5 className="mt-5 text-secondary font-bold uppercase text-2xl">{experience.comapny}</h5>
                          <h4>{experience.role}</h4>
                          <div className="flex gap-1 justify-center my-2">
                            {
                              experience.skills.map(skill => {
                                return <span className="p-2 border border-light">{skill}</span>
                              })
                            }
                          </div>
                          <strong>{experience.period}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <span role="button" className="fas fa-lightbulb dark-mode-btn" title="Toggle Dark Mode"></span>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
