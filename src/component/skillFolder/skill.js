import React from 'react'
import { Link} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'





const SkillBanner =(props)=>{

	let location = props.location.aboutProps
	const { innerWidth: width} = window;
	
	

    const container = useSpring({
		to: [{height: location? width <= 768 ?
				"250px" : '400px' :
				width <= 768 ?
				"250px" : "400px"}],
		from: {height:location? width <= 768 ?
			"250px" : '400px' :
			width <= 768 ?
			"250px" : "550px"}
    })

	// Leaf animation --------------

	const leafimg = useSpring({
		to: [{marginLeft:  '-10%', 
		
		marginTop: location ? '-13%' : '-13%'  }],
	
	
		from: {marginLeft: location? 
			location.name === 'fromTechnology' ?
			'-13%' :'-13%' : '-13%',
		
		marginTop: location ?
		location.name === 'fromTechnology' 
		? '-110%' : '-18%' : '-110%' },
		config: {
			duration: 300
		}
		})

	// brush animation --------------
	
	const brushimg = useSpring({
	to: [{marginTop: '-250px', marginRight:  '0%'}],
	from: {marginTop: '110px', marginRight: location ? '-100%' : '-30%'},
	config: {
		duration: 300
	}
	})

	// Gear animation --------------

	const gearimg= useSpring({
		to: [{marginRight: '-10%',
	
					marginTop: width <= 768 ? location ?
					location.name === "fromTechnology"
					? '-80px' : '-80px' : '-80px' :  location ?
					location.name === "fromTechnology"
					? '-210px' : '-210px' : '-210px'
				}],
		from: {marginRight: location ?
					location.name === "fromTechnology" ?
					'0%' : '57%' : '57%',
	
					marginTop: width <= 768 ? location ?
					location.name === "fromTechnology"
					? '-350px' : '-80px' : '-80px' :  location ?
					location.name === "fromTechnology"
					? '-350px' : '-210px' : '-210px'
					 },
		config: {
			duration: 300
		}
		})


    return(
			<div>
        <animated.div className="skill-banner" style={container}>
					<h1>Skill</h1>
				<animated.div className="skill-img1" style={leafimg}  >
						
					<Link
					to={{
						pathname:'/Environment',
						aboutProps:{
							name: 'fromSkill'
						}
					}}>
					
						<img    src={ leaf} alt='img' >
						</img>
						
					</Link>
					
				</animated.div>
				<animated.div className="skill-img2" style={gearimg} >

					
				<Link to={{
					pathname:'/technology',
					aboutProps:{
						name: 'fromSkill'
					}
				}}>

						<img  src={ circle} alt='img' >
						</img>

				</Link>
					
					
				</animated.div>
				<animated.div className="skill-img3" style={brushimg} >
					

				<Link to={{
					pathname:'/homeBanner',
					aboutProps:{
						name: 'fromSkill'
					}
				}}>

					<img className='brush-img' src={brush} alt='img' >
					</img>

				</Link>
					


				</animated.div>
				</animated.div>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
			</div>
    )
}

export default SkillBanner

