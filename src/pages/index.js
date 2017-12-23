import React from 'react'
import Link from 'gatsby-link'

import GeneralDetails from '../components/GeneralDetails';
import SectionSubtitle from '../components/SectionSubtitle';
import SimpleSection from '../components/SimpleSection';
import EducationSection from '../components/EducationSection';
import EmploymentSection from '../components/EmploymentSection';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			personalDetails: {
				name: 'Victor Trofin',
				location: 'Kyoto, Japan',
				email: 'trofin.victor@gmail.com',
				phone: '+81-80-4496-5881',
				age: 33,
			},
			skills: [
				'JavaScript with emphasis on the React ecosystem, HTML, CSS and SASS, SQL',
				'Fullstack React JS: React Router, Redux, GraphQL & GraphQL Server, Relay',
				'Familiar with React Native',
				'Unit Testing with Jest and Enzyme',
				'Familiar with Webpack and Git',
				'Problem solving oriented and strong business judgment',
				'Good time management skills',
				'Strong sense of responsibility and very good adaptability',
				'Self-learner',
				'Good communication and presentation skills',
				'Languages spoken: Romanian – mother tongue, fluent in English, intermediate Italian, basic Japanese'
			],
			education: [
				{
					yearStart: '2009',
					yearEnd: '2013',
					school: 'Bucharest University of Economic Studies – Master in International Business'
				},
				{
					yearStart: '2003',
					yearEnd: '2008',
					school: 'Politehnica University of Bucharest – Faculty of Electrical Engineering'
				}
			],
			jobs: [
				{
					company: 'SmoothJapan',
					yearStart: 'Sep 2017',
					yearEnd: '',
					city: 'Kyoto',
					jobTitle: 'Front End work for WordPress websites:',
					jobDescription: ['Restyling components', 'Resizing and styling for mobile devices']
				},
				{
					company: 'Self-employed',
					yearStart: '2011',
					yearEnd: '2015',
					city: 'Bucharest',
					jobTitle: 'Managed several websites',
					jobDescription: ['Managed contact with developers', 'Performed light development work in HTML, CSS, PHP', 'Sales and Marketing – prospected for new customers and advertisers', 'On-site SEO', 'Customer support']
				},
				/*{
					company: '',
					yearStart: '',
					yearEnd: '',
					city: '',
					jobTitle: '',
					jobDescription: ['', '', '']
				}*/,
			],
			other: [
				'Sayonaranippon.com – my learning project made using ReactJS, React Router, Fetch API and Graphcool’s GraphQL API',
				'Active in the Kansai developers’ community: co-organizer of the Osaka Web Designers and Developers Meetup, taking part in Hacker News Kansai and React Osaka meetups',
			],
		}
	}
	render() {
		return (
			<div>
				<GeneralDetails personalDetails={this.state.personalDetails}/>
				<SectionSubtitle subtitleText='Skills and abilities profile'/>
				<SimpleSection content={this.state.skills} />
				<SectionSubtitle subtitleText='Education'/>
				<EducationSection education={this.state.education}/>
				<SectionSubtitle subtitleText='Employment history*'/>
				<EmploymentSection jobs={this.state.jobs}/>
				<SectionSubtitle subtitleText='Other activities and interests'/>
				<SimpleSection content={this.state.other} />
				<p style={{fontStyle: 'italic'}} >*only relevant positions mentioned. </p>
			</div>
		)
	}
}

export default IndexPage
