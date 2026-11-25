import PixelScene from './PixelScene'

function LocationPage({ title, description, quest, scene, onBack }) {
  return (
   <main className="pixel-page">
    <header className="pixel-page-header">
     <button className="game-button" type="button" onClick={onBack}>← Back to campus</button>
     <p className="pixel-kicker hidden sm:block">Sikailok Academy / Stage 01</p>
    </header>
     <section className="pixel-page-content max-w-[1000px]">
      <PixelScene title={title} scene={scene} />
      <div className="pixel-panel mt-4 grid gap-5 p-4 sm:p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
       <div className="grid gap-3">
        <p className="pixel-kicker">Sikailok Academy / Location</p>
        <h1 className="pixel-title m-0">{title}</h1>
        <p className="pixel-info m-0">{description}</p>
       </div>
       <div>
        <div className="pixel-quest my-0">
         <strong>Current quest</strong>
         <span>{quest}</span>
        </div>
        <button className="game-button-primary mt-4" type="button" onClick={() => window.alert('Quest starting soon!')}>Start quest</button>
       </div>
      </div>
     </section>
   </main>
  )
}

export default LocationPage
