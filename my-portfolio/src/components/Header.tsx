import Image from "next/image";



export default function Header() {
  return (
    <div>
      <header className=" w-full flex justify-center py-4 ">
        <h1 className="text-3xl font-bold text-black m-5">
          Hi! I&apos;m Zoobia
        </h1>
      </header>
      <div className="flex justify-center">
        <Image
          className="rounded-full border-solid border-white border-20 p-5 m-10 relative"
          src={"/facephoto.jpg"}
          alt="this is a photo of me"
          width="350"
          height="200"
        />
        <h1 className="text-black w-1/3 m-10 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
      </div>
    </div>
  );
}
