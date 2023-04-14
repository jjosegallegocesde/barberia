import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/barberiajjg.appspot.com/o/barberia.jpg?alt=media&token=da9a6063-5ce7-4a9a-9aa4-fd5cfbfcb004" alt="foto" className="img-fluid w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                            <Agenda></Agenda>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}