import Image from "next/image";
import CSVUploader from "./uploadcsv/page";
import Bar from "./sidebar/page";
import Incentives from "./sidebar/incentives/page";

export default function Home() {
  return (
    <div className="flex">
      <Bar/>
      <Incentives/>
    </div>
  );
}
