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
		to: [{left: '0%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' : '37px' : '37px' :location ? 
					location.name === 'fromEnvironment' ?
					'97px' : '97px' : '97px'
			 	}],


		from: {left: location ?
					location.name === 'fromEnvironment' ? 	'50%' : '0%' : '33%',


					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'-37px' : '37px' : '37px' : location ? 
					location.name === 'fromEnvironment' ?
					'-97px' : '97px' : '97px'
				},
		config: {
			duration: 500
		}
		})

		// Gear animation --------------

		const gearimg   = useSpring({
		to: [{top: '-48px', 

					left: location ? 
					location.name === 'fromEnvironment' ? 
					'50%' : '50%' : '50%'
				}],
		from: {top: '97px', left: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : '100%' : '50%' 
				},
		config: {
			duration: 500
		}
		})

		// brush animation --------------

		const brushimg = useSpring({
		to: [{right: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : '0%' : '0%',

					top:  width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' : '37px' : '37px' :location ? 
					location.name === 'fromEnvironment' ?
					'97px' : '97px' : '97px'
				}],

		from: {right: location ? 
					location.name === 'fromEnvironment' ? 
					'0%' : '50%' : '30%' ,
				
					top: width <= 768 ? location ? 
					location.name === 'fromEnvironment' ?
					'37px' :  '-48px' : '37px': location ? 
					location.name === 'fromEnvironment' ?
					'97px' : '-110px' : '97px'
					},
			config: {
				duration: 500
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