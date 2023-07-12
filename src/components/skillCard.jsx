export default function SkillCard(params){
    const {img, skill, progress} = params;
    return(
        <div className="skillCard gradient-border">
            <img src={img} alt={`Imagen sobre ${skill}`}></img>

            <strong>{skill}</strong>

            <div className="progressBar ">
                <div className="progress" style={{ width: `${progress}%` }}>{`${progress}%`}</div>
            </div>
        </div>
    )
}