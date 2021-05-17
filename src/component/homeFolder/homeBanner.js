import  {React } from 'react'
import {useSpring, animated} from 'react-spring'
import { Link} from 'react-router-dom'
import SectionOne from './sectionOne'
import circle from '../../images/circle.png'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import SectionSix from './sectionSix'
import SectionSeven from './sectionSeven'
import FooterSection from './footerSection'


const HomeBanner = (props) =>{

	let location = props.location.aboutProps
	const { innerWidth: width} = window;
	console.log(location)


// container height animation------------------

	const container = useSpring({
		to: [{height: width <= 768 ? location ? "350px" : '400px':
				location ? "550px" : '550px'
			}],
		from: {height: width === 768 ?  location ? "400px" :'550px':
				location ? "400px" :'550px'}
	})

// banner text animation -------------------------

	const bannerStyleText = useSpring({
		to: [{opacity: location? '5' : '5'}],
		from: {opacity:  location? '-1': '5'},
		config: {
			duration: 4000
		}
	})

// banner style animation------------------------------

	const bannerStyleLogo = useSpring({
		to: [{marginTop: location?
			location.name === 'fromNavication'?
			'50%' : '50%' : '50%'}],
		from: {marginTop:  location? 
			location.name === 'fromNavication' ? 
			'-25%' : '30%': '30%'},
		config: {
			duration: 1000
		}
	})

// leaf img animation----------------------------------

	const leafimg = useSpring({
		to: [{marginLeft: location? 
			location.name === 'fromNavication'?  
			'-20%' :  location.name === 'fromTechnology'? 
			'-20%' : location.name === "fromEnvironment"?
			"-20%" : location.name === "fromSkill"? 
			'-20%' : '10%' :  '-20%',
			marginTop: location? 
			location.name === 'fromEnvironment'?
			'0%' : 'unset' : 'unset' 
		}],
  	from: {marginLeft: location? 
			location.name === 'fromNavication' ? 
			'0%' : location.name === 'fromTechnology' ?
			'-50%' : location.name ==="fromEnvironment" ?  
			"1%" : location.name === 'fromSkill'? 
			'-50%' : '0%' : '0%',
			 marginTop: location? 
			 location.name === 'fromEnvironment'?
			'-20%' : 'unset' : 'unset'
		},
			config: {
				duration: 300
			}
		})

// brush img animation --------------------

		const brushimg = useSpring({
			to: [{
				marginLeft: location? 
				location.name === 'fromNavication' ?  
				'20%' : location.name === 'fromEnvironment'?
				'22%' : location.name === 'fromTechnology'? 
				'22%' : location.name === 'fromSkill'? 
				'22%' : 'unset' :  '20%',


				marginTop: location?
				location.name === 'fromNavication'?
				'unset' : location.name === 'fromSkill'? 
				'0%': 'unset' : 'unset',
			}],
				from: {marginLeft: location? 
				location.name === 'fromNavication' ?
				'0%' : location.name === 'fromEnvironment'?
				'40%' : location.name === 'fromTechnology' ? 
				'40%' : location.name === 'fromSkill'? 
				'-2%' : '30%' : '0%',


				marginTop: location?
				location.name === 'fromNavication'?
				'unset' : location.name === 'fromSkill'? 
				'-20%': 'unset' : 'unset'},
				config: {
					duration: 300
				}
			})

//  circle img animation -----------------------

			const circleimg = useSpring({
				to: [{
					marginLeft: location? 
					location.name === 'fromNavication' ?  
					'unset' : location.name === 'fromTechnology' ?
					'1%' : location.name === 'fromEnvironment'? 
					'1%' :  location.name === 'fromSkill'? 
					'1%' : 'unset' :  '0%',


					marginTop: location?
					location.name === 'fromEnvironment'?
					'unset' : location.name === 'fromTechnology' ? 
					'0%' : "1%" : 'unset'
			}],
					from: {marginLeft: location? 
					location.name === 'fromNavication' ?
					'unset' : location.name === 'fromTechnology' ?
					'1%' :  location.name === 'fromEnvironment'? 
					'-50%' : location.name === 'fromSkill'? 
					'50%' : 'unset' :  '0%',


					marginTop: location?
					location.name === 'fromEnvironment'?
					'unset' : location.name === 'fromTechnology' ? 
					'-22%' : "1%" : 'unset'},
					config: {
						duration: 300
					}
				})


	//  banner text img animation




		

	
	
	return(
		<div>
			<animated.div style={container} className='main-banner'>
				<div className='banner-container'>
					<div style={bannerStyleText} className='banner-text' >
						
							<h1>ENTESK</h1>
							<p>environment technology skills</p>
						
					</div>
					<animated.div style={bannerStyleLogo} className="" >

						<Link  className='link environment' to='/environment'>
							<animated.img  src={ leaf} alt='img'  style={leafimg} className=''></animated.img>
						</Link >

						<Link className='link technology' to='/technology'>
							<animated.img src={ circle} alt='img' className='centerimg'style={circleimg} ></animated.img>
						</Link>

						<Link className='link skill' to='/skill'>
							<animated.img src={brush} alt='img' style={brushimg} ></animated.img>
						</Link>
						
					</animated.div>
				</div>
			</animated.div>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<SectionSeven />
			<FooterSection />
		</div>
	)
}

export default HomeBanner
