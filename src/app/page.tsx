import Image from "next/image";
import logo from ""

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-14">
      <div className="flex justify-between items-center rounded-lg">
        <div className="flex gap-5 items-center">
          <span>
            <Image src={} alt="" />
          </span>
          <p>Extensions</p>
        </div>
        <div className="flex justify-center items-center">
          <span>
            <Image src={} alt="" />
          </span>
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}
