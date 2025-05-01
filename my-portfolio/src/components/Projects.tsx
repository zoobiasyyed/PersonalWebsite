import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="flex">
        <div className="w-1/3 flex justify-center items-center">
          <button>
            <Image
              src={"/projects_button.png"}
              alt="this is projects button"
              width="190"
              height="200"
              className="cursor-pointer transition-transform duration-300 hover:-rotate-3 hover:scale-105"
            />
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <button>
            <Image
              src={"/Ux_Design_Button.png"}
              alt="this is UX Design button"
              width="190"
              height="200"
              className="cursor-pointer transition-transform duration-300 hover:-rotate-3 hover:scale-105"
            />
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <button>
            <Image
              src={"/experiences_button.png"}
              alt="this is experiences button"
              width="190"
              height="200"
              className="cursor-pointer transition-transform duration-300 hover:-rotate-3 hover:scale-105"
            />
          </button>
        </div>
      </div>
    </>
  );
}
