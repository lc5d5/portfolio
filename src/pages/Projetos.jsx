const Projetos = () => {
    const videos = ["/fakestore.mp4", "/meow-cafe.mp4"];

    return ( 
        <main className="bg-black pt-20">
            <div className="flex flex-col mx-auto w-full max-w-4xl px-4">
                <div className="flex flex-col min-h-17 px-5">
                    <h3 className="text-soviet-red text-xs">Experiência</h3>
                    <h1 className="font-bold text-[48px] text-white">Projetos</h1>

                    {
                        videos.map((video) => (
                            <div className="grid grid-cols-2 *:rounded-xl gap-3 border border-b-soviet-red mb-10 hover:bg-soviet-grey/20">
                                <div className="w-64 h-64 shrink-0 overflow-hidden rounded-xl border border-white/20 shadow-lg mt-4 relative mb-6">
                                    <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover rounded-3xl block"
                                    >
                                    <source src={video} type="video/mp4"/>
                                    </video>
                                </div>
                            </div>
                        ))
                    }
                
                </div>
            </div>
        </main>
     );
}
 
export default Projetos;