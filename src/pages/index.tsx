import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "@components/Layout";
import GeneralDetails from "@components/GeneralDetails";
import About from "@components/About";
import CompetencyGrid from "@components/CompetencyGrid";
import EducationSection from "@components/EducationSection";
import EmploymentSection from "@components/EmploymentSection";
import { DataProps } from "@typedefs/propTypes";
import type { PageProps } from "gatsby";
import {
  education,
  jobs,
  personalDetails,
  skills,
  technicalSkills,
} from "./data";

const IndexPage: React.FunctionComponent<PageProps<DataProps>> = (props) => {
  const isWestern = React.useMemo(
    () => new URLSearchParams(props.location.search).get("western") === "true",
    [props.location.search],
  );
  const [pageBreakClass, setPageBreakClass] = useState("page-break");
  const [isBot, setIsBot] = useState(false);
  const [_isSafari, setIsSafari] = useState(false); // used to generate page breaks for print medium

  const email = isBot ? "" : props.data.site.siteMetadata.email;
  const phone = isBot ? "" : props.data.site.siteMetadata.phone;

  useEffect(() => {
    const agent = window.navigator.userAgent;
    const isFirefox = /firefox/gi.test(agent);
    const isChrome = /chrome/gi.test(agent);
    const isSafari = /safari/gi.test(agent);
    const bot =
      /bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|teoma|slurp|yandex/i.test(
        agent,
      );
    setIsBot(bot);

    if (isFirefox) {
      setPageBreakClass((prev) => prev + " firefox");
    } else if (isChrome) {
      setPageBreakClass((prev) => prev + " chrome");
    } else if (!isChrome && isSafari) {
      setIsSafari(true);
      setPageBreakClass((prev) => prev + " safari");
    }
  }, []);

  return (
    <Layout>
      <p className="pdf-hint">
        Viewing Victor&apos;s CV —{" "}
        <a
          href={isWestern ? "/cv-western.pdf" : "/cv.pdf"}
          download={
            isWestern ? "Victor_Trofin_CV_Western.pdf" : "Victor_Trofin_CV.pdf"
          }
        >
          download as PDF
        </a>
      </p>
      <GeneralDetails
        personalDetails={{ ...personalDetails, email, phone }}
        western={isWestern}
      />
      <About />
      <CompetencyGrid items={skills} subtitleText="Abilities" />
      <CompetencyGrid items={technicalSkills} subtitleText="Technical Skills" />
      <EmploymentSection jobs={jobs} subtitleText="Employment history" />
      {/* <div className={pageBreakClass + " bottom"} /> */}
      {/* {isSafari && <div className={pageBreakClass + " top"} />} */}
      {/* {isSafari && <div className={pageBreakClass + " bottom"} />} */}
      <EducationSection education={education} subtitleText="Education" />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        phone
        email
      }
    }
  }
`;
