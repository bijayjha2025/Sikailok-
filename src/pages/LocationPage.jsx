function LocationPage({ title, description, quest, onBack }) {
  return (
   <main className="location-page">
    <button className="back-button" onClick={onBack}>← Back to campus</button>
     <section className="location-card">
      <p className="eyebrow">Sikailok Academy</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="quest">
       <strong>Current quest</strong>
       <span>{quest}</span>
      </div>
      <button className="primary-button" onClick={() => window.alert('Quest starting soon!')}>Start quest</button>
     </section>
   </main>
  )
}

export default LocationPage
