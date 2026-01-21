import "./Header.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col items-center justify-center mt-30">
        <Image 
          src="/profile-picture.png" 
          alt="Foto de perfil de Miguel Gonçalves" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-white shadow-lg" 
        />
        <p className="text-center">Hello World! My name is Miguel Gonçalves</p>
      </div>
    </header>
  );
}