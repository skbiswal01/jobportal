import { useEffect, useState } from "react";

function Home() {
    const [jobs , setjobs] = useState([])
    const [filter , setfilter] = useState("")

    useEffect(()=>{
       async function getdata(){
            var x = await fetch(`https://jobportalsk.vercel.app/fetchalljobs`)
            var y = await x.json();
            setjobs(y);

        }
    },[])

  return (
    <div className="Home">
            <div>
                <input type="text" placeholder="Serch job" onChange={(e)=>{setfilter(e.target.value)}}/>
            </div>
            <div>
            {jobs.filter((job)=>{job.title.includes(filter)}).map((e)=>{
                return (<div className="content">
                    <div>
                        <p>Title : {e.title}</p>
                        <p>Description : {e.description}</p>
                        <p>CTC : {e.ctc}</p>
                    </div>
                    <div><button>Apply</button></div>
                </div>)
            })}

            </div>
    </div>
  );
}

export default Home;