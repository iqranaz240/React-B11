
import Header from "./Header";
import Tasks from "./Tasks";
export default function Home() {
  // const name: string = "Iqra"
  const data = 'loremdcxnb ui  hiuwd saxoi wdsaxuy8 ieqswyuax  yeq8idy'
  return (
    <div>
      <Header name="Hello Button" color='red'/>
      <Tasks data={data}/>
    </div>
  );
}
