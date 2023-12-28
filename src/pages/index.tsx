import * as React from "react"
import { graphql, type HeadFC, type PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const pageStyles = {
  color: "#252323",
}
const IndexPage: React.FC<PageProps> = ({ data }: any) => {

  return (
    <main style={pageStyles}>
      <div className="pin-container">
        <section id="profileSection" className="container-fluid bg-primary text-light pb-10 border-b-8 border-b-secondary">
          <StaticImage src="../images/code.JPG" alt="Ravi Patel"
            className="fixed h-full w-full -z-10 left-0 blur-md" />
          <div className="md:flex text-center md:text-left justify-between gap-x-9 p-20 text-4xl font-bold leading-snug uppercase">
            <StaticImage src="../images/picture.jpg" alt="Ravi Patel"
              className="w-100 md:w-48 border-2 border-secondary hover:border-8 transition-all" />
            <div>
              <h1 className="text-dark text-6xl">Hi There !!</h1>
              <h1>
                I am <span className="text-light">Ravi Patel</span>,
              </h1>
              <span className="text-3xl">
                A Full-stack Web developer from india,<br /> working on Front-end As well as Back-end Technologies.
              </span>
            </div>
            <div className="flex flex-col justify-between">
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
          </div>
          <div className="grid grid-cols-3 hidden">
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
            <h1 className="text-3xl font-bold text-light">Top Skills</h1>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4">{
              Object.entries(data.markdownRemark.frontmatter.skills).map(([key, value]: any) => {
                return <div key={key}>
                  <h3 className="mt-5 text-light font-bold uppercase text-2xl">{key}</h3>
                  <div className="flex gap-2 justify-center mt-3">
                    {value.map((skill: any) => {
                      return <span key={skill} className="p-3 bg-primary text-light rounded-sm">{skill}</span>
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
                data.markdownRemark.frontmatter.experiences.map((experience: any, index: any) => {
                  return <div key={index} className="col-sm-6 col-lg-4 mt-3 mt-sm-0">
                    <div id="flawlessExperienceCard" className="card experience-card active" role="button">
                      <div className="row">
                        <div className="col-12 text-center">
                          <h5 className="mt-5 text-secondary hover:text-light font-bold uppercase text-2xl">{experience.company}</h5>
                          <h4>{experience.role}</h4>
                          <div className="flex gap-1 justify-center my-2">
                            {
                              experience.skills.map((skill: any) => {
                                return <span key={skill} className="p-2 border border-light">{skill}</span>
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

export const pageQuery = graphql`
query IndexPageQuery {
  markdownRemark(fileAbsolutePath: { regex: "/content.md/" }) {
    frontmatter {
      skills{
        Frontend
        Frameworks
        Backend
        Database
      }
      experiences{
        company,role,period,skills
      }
    }
  }
}
`
