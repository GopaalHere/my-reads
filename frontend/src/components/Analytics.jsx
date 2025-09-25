import {Line} from 'react-chartjs-2'
import{Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js'
import { useState } from 'react';
import { getAnalytics } from '../../api/projectAPI';
import { useEffect } from 'react';
import '../styles/analytics.css'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

const Analytics=()=>{
    const[chartData,setChartData] = useState({labels:[],datasets:[]});
    const[period,setPeriod] = useState("monthly");
    const[loading,setLoading] = useState(true);
    const fetchData = async(selectedPeriod)=>{
        try{
            setLoading(true);
            const res = await getAnalytics(selectedPeriod);
            setChartData({
                labels:res.labels,
                datasets:[
                    {
                        label:"Books Read",
                        data:res.data,
                        borderColor:"rgb(75,192,192)",
                        backgroundColor:"rgba(75,192,192,0.2)",
                    }
                ]
            })
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchData(period);
    },[period]);
    return(
        <div className='chartContainer'>
            <h2>Reading Analytics</h2>
            <div className='bts'>
                <label htmlFor="period">View By</label>
                <select id="period" value={period} onChange={(e)=>setPeriod(e.target.value)} style={{padding:"5px",marginLeft:"10px"}}>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            {loading?(
                <p>Loading Chart..</p>
            ):(
                <Line style={{backgroundColor:"white"}} data={chartData}/>
            )}
        </div>
    )
}

export default Analytics;