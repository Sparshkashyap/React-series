import style from './Style/Style.module.css';



function ModuleStyle() {



    return (
        <div className={style.show}>
            <div className={style.head}>
                <h1 >Sparsh kashyap</h1>
                <h1 >BTech CSE</h1>
                <h1 >SoftWare Developer</h1>
            </div>
            <img className={style.img} src="https://img.freepik.com/premium-photo/fraud-scammer-isometric-illustration_1029473-755326.jpg" alt="" />
            
        </div>
    )
}

export default ModuleStyle;