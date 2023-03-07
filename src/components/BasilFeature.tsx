export default function BasilFeature() {
  return (
    <div className="flex flex-col max-w-md">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/images/image-8.jpg"
          alt="basil-brush"
          className="inset-0 w-full h-full object-cover rounded-lg z-20 shadow"
          loading="lazy"
        />
        <div className="bg-white w-[95%] rounded-b px-6 pt-6 pb-12 mt-[-1px] z-10">
          <h4 className="font-gilroy uppercase font-bold bg-clip-text bg-gradient-to-r text-transparent from-pink-600 to-red-600 text-lg text-[19px]">Basil Brush</h4>
          <h3 className="font-gilroy uppercase font-black text-3xl">Ha Ha Ha! Boom! Boom!</h3>
          <p className="color-[#242222] text-lg text-[20px]">
            A mischievous character and a raconteur. Basil Brush is a fictional
            red fox, best known for his appearances on daytime British
            television.
          </p>
        </div>
      </div>
    </div>
  );
}
