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
	to: [{ left: '-100px', }],
	from: { left: '300px', },
	config: {
		duration: 3000
	}
	})

	// brush animation --------------
	
	const brushimg = useSpring({
	to: [{top: '-80px', }],
	from: {top: '110px', },
	config: {
		duration: 300
	}
	})

	// Gear animation --------------

	const gearimg= useSpring({
		to: [{ right: '-100px', }],
		from: { right: '500px', },
	config: {
		duration: 3000
	}
	})


    return(
			<div>
        <animated.div className="skill-banner" style={container}>
					
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
				{/* <h1>Skill</h1>s */}
				

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
				</animated.div>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
			</div>
    )
}

export default SkillBanner

