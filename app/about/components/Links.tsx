import Image from "next/image";
import avatar from "public/avatar.png";

export default function Links() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24 max-w-lg mx-auto">
        <div className="flex animate-in flex-start gap-8">
          <Image
            src={avatar}
            width={100}
            height={100}
            alt="avatar"
            className="mx-auto animate-in rounded-full bg-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          />
        </div>
      </div>
    </>
  );
}
