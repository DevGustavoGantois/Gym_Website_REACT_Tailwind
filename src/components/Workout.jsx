//import data
import { workouts } from "../data"

//import components
import { WorkoutSlider } from './WorkoutSlider';


export function Workout() {
    //destructure workout
    const { title, icon } = workouts;
    return (
        <section className="section" id="treinos">
            <div className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0" data-aos="fade-up" data-aos-delay="200">
                <img src={icon} alt="" />
                <h2 className="h2 section-title">{title}</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <WorkoutSlider />
            </div>
        </section>
    )
}