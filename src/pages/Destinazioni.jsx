export default function Destinazioni() {
  const destinazioni = [
    {
      id: 0,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Tokyo",
      imgUrl:
        "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <h1 className="my-2">I nostri viaggi</h1>
      <div className="grid grid-cols-4 gap-5">
        {destinazioni.map((destinazione) => (
          <div className="group mx-auto mt-2 rounded-2xl overflow-hidden bg-[#FFF0C5] h-88 border-2 border-[#FFF0C5]">
            <img
              src={destinazione.imgUrl}
              alt="picture"
              className="h-48 w-full group-hover:scale-110 transition duration-500"
            />
            <div className="flex flex-col p-2.5">
              <h2 className="text-2xl text-[#FF8C52] font-bold">
                {destinazione.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
