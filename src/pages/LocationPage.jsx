function LocationPage({ title, description, quest, onBack }) {
  return (
   <main className="min-h-screen bg-linear-to-br from-[#e8f1fb] to-[#fff8df] p-4 sm:p-6">
    <button className="game-button" onClick={onBack}>← Back to campus</button>
     <section className="mx-auto mt-[8vh] max-w-[720px] rounded-lg border-3 border-[#1c2b4a] bg-white p-6 shadow-[5px_5px_0_#1c2b4a] sm:mt-[12vh] sm:p-9 sm:shadow-[8px_8px_0_#1c2b4a]">
      <p className="m-0 font-bold uppercase tracking-[0.12em] text-[#b4513a]">Sikailok Academy</p>
      <h1 className="my-2 mb-4 text-[clamp(2rem,6vw,4rem)]">{title}</h1>
      <p className="text-[1.15rem] leading-[1.6]">{description}</p>
      <div className="my-7 grid gap-1.5 border-l-5 border-[#ffd23f] bg-[#fff8df] p-4">
       <strong>Current quest</strong>
       <span>{quest}</span>
      </div>
      <button className="game-button-primary" onClick={() => window.alert('Quest starting soon!')}>Start quest</button>
     </section>
   </main>
  )
}

export default LocationPage
