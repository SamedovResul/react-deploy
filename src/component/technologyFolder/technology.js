import {useSpring, animated} from 'react-spring'
import {React, } from 'react'
import {Link} from 'react-router-dom'
import leaf from '../../images/leaf.png'
import brush from '../../images/brush.png'
import circle from '../../images/circle.png'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'

const TecnologyBanner = (props) =>{

    let location = props.location.aboutProps
		const { innerWidth: width} = window;
	

    const container = useSpring({
			to: [{height: location? width <= 768 ? "250px" : '400px' : width <= 768 ? "250px" : "400px"}],
  		from: {height:location? width <= 768 ? "250px" : '400px' : width <= 768 ? "250px" : "550px"}
		})

		// Leaf animation --------------

		const leafimg = useSpring({
		to: [{marginLeft: '-100%',
					marginTop: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : 'unset' : 'unset'
			 	}],
		from: {marginLeft: location ?
					location.name === 'fromSkill' ? 
					'-100%' : '24%' : '10%',
					marginTop: location ? location.name === 'fromEnvironment' ? 
					'-20%' : 'unset' : 'unset'
				},
		config: {
			duration: 300
		}
		})

		// Gear animation --------------

		const gearimg   = useSpring({
		to: [{marginTop: '-250px', marginLeft: location ? 
					location.name === 'fromSkill' ? 
					'0%' : '0%' : '0%'
				}],
		from: {marginTop: '110px', marginLeft: location ? 
					location.name === 'fromSkill' ? 
					'100%' : '-100%' : '0%' 
				},
		config: {
			duration: 300
		}
		})

		// brush animation --------------

		const brushimg = useSpring({
		to: [{marginRight: location ? 
					location.name === 'fromSkill' ? 
					'-100%' : '-100%' : '-100%',

					marginTop:  width <= 768 ? location ? 
					location.name === 'fromSkill' ?
					'-80px' : '-80px' : '-80px' :location ? 
					location.name === 'fromSkill' ?
					'-110px' : '-110px' : '-110px'
				}],
		from: {marginRight: location ? 
					location.name === 'fromSkill' ? 
					'-10%' : '-100%' : '-20%' ,
				
					marginTop: width <= 768 ? location ? 
					location.name === 'fromSkill' ?
					'-350px' :  '-80px' : '-80px': location ? 
					location.name === 'fromSkill' ?
					'-350px' : '-110px' : '-110px'
					},
			config: {
				duration: 300
			}
		})



    
    return(
			<div>
        <animated.div className="technology-banner" style={container}>
					<h1>Technology</h1>
					<animated.div className="technology-img1" style={ leafimg  } >
						
					<Link
					to={{
						pathname:'/Environment',
						aboutProps:{
							name: 'fromTechnology'
						}
					}}>
					
						<img    src={ leaf} alt='img' >
						</img>

					</Link>

					</animated.div>
					<animated.div className="technology-img2" style={ gearimg} >

						
							<Link to={{
							pathname:'/homeBanner',
							aboutProps:{
								name: 'fromTechnology'
							}
						}}>
							<img className='gear-img' src={ circle} alt='img' >
							</img>
						</Link>
						
						
					</animated.div>
					<animated.div className="technology-img3" style={brushimg} >

					<Link
					to={{
						pathname:'/skill',
						aboutProps:{
							name: 'fromTechnology'
						}
					}}>
						<img src={brush} alt='img' >
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

export default TecnologyBanner