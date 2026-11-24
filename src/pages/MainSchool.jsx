import { useEffect, useRef, useState } from 'react'

const defaultProfile = {name: '', className: '', goal: '', }

function getInitialProfile() {
  try {
    const savedProfile = window.localStorage.getItem('main-school-profile')
    return savedProfile ? { ...defaultProfile, ...JSON.parse(savedProfile) } : defaultProfile
  } catch {
    return defaultProfile
  }
}

function MainSchool({ onBack }) {
  const [profile, setProfile] = useState(getInitialProfile)
  const [savedProfile, setSavedProfile] = useState(getInitialProfile)
  const [photoUrl, setPhotoUrl] = useState('')
  const [status, setStatus] = useState('')
  const fileInputRef = useRef(null)

  useEffect(() => {
    return () => {
      if (photoUrl) URL.revokeObjectURL(photoUrl)
    }
  }, [photoUrl])

  const updateProfile = (event) => {
    const { name, value } = event.target
    setProfile((current) => ({ ...current, [name]: value }))
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setStatus('Please choose an image file.')
      event.target.value = ''
      return
    }

    if (photoUrl) URL.revokeObjectURL(photoUrl)
    setPhotoUrl(URL.createObjectURL(file))
    setStatus('')
  }

  const removePhoto = () => {
    if (photoUrl) URL.revokeObjectURL(photoUrl)
    setPhotoUrl('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const saveProfile = (event) => {
    event.preventDefault()
    const cleanedProfile = {
      name: profile.name.trim(),
      className: profile.className,
      goal: profile.goal.trim(),
    }

    setProfile(cleanedProfile)
    setSavedProfile(cleanedProfile)
    window.localStorage.setItem('main-school-profile', JSON.stringify(cleanedProfile))
    setStatus('Your learning profile was saved.')
  }

  const initials = profile.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0].toUpperCase())
    .join('')

  const hasSavedProfile = Boolean(savedProfile.name && savedProfile.className)

  return (
   <main className="min-h-screen bg-linear-to-br from-[#edf4fb] to-[#fff8df] p-4 sm:p-6">
    <header className="mx-auto flex max-w-[980px] items-center justify-between gap-4">
     <button className="game-button" type="button" onClick={onBack}><span aria-hidden="true">←</span> Back to campus</button>
     <p className="hidden text-[0.86rem] font-bold text-[#52627d] sm:block">Sikailok Academy / Main School</p>
    </header>

    <section className="mx-auto mt-5 grid max-w-[980px] items-start gap-7 md:mt-9 md:grid-cols-[minmax(240px,0.8fr)_minmax(380px,1.2fr)]">
     <div className="py-2 md:px-3 md:py-6">
      <p className="m-0 font-bold uppercase tracking-[0.12em] text-[#b4513a]">Student profile</p>
      <h1 className="my-2 mb-4 text-[clamp(2.6rem,7vw,4.8rem)] leading-none">Main School</h1>
      <p className="m-0 max-w-[390px] text-[1.08rem] leading-[1.65]">Tell us a little about yourself so we can shape your learning journey and keep track of your progress.</p>
      {hasSavedProfile && (
       <div className="mt-6 grid gap-1.5 border-l-5 border-[#4f9e56] bg-[#f4faef] px-4 py-3.5">
        <strong>Welcome back, {savedProfile.name}!</strong>
        <span className="text-[0.88rem] leading-[1.45] text-[#52627d]">Class {savedProfile.className}{savedProfile.goal ? ` · Goal: ${savedProfile.goal}` : ''}</span>
       </div>
      )}
     </div>

     <form className="grid gap-[18px] rounded-lg border-3 border-[#1c2b4a] bg-white p-5 shadow-[5px_5px_0_#1c2b4a] sm:p-7 sm:shadow-[8px_8px_0_#1c2b4a]" onSubmit={saveProfile}>
      <div className="flex items-center gap-4 border-b border-[#d7deea] pb-5">
       <div className="grid size-[86px] flex-none place-items-center overflow-hidden rounded-full border-3 border-[#1c2b4a] bg-[#ffd23f] text-[1.6rem] font-extrabold" aria-label="Profile photo preview">
       {photoUrl ? (
        <img className="size-full object-cover" src={photoUrl} alt="Selected profile" />
        ) : (
        <span>{initials || '?'}</span>
        )}
       </div>
       
       <div className="grid gap-[3px]">
        <strong>Profile photo</strong>
        <span className="text-[0.78rem] text-[#52627d]">Optional</span>
        <div className="mt-1.5 flex flex-wrap gap-2">
         <label className="game-button cursor-pointer px-2.5 py-[7px] text-[0.82rem] font-bold" htmlFor="profile-photo">{photoUrl ? 'Change photo' : 'Upload photo'}</label>
         {photoUrl && (
          <button className="game-button px-2.5 py-[7px] text-[0.82rem] font-bold" type="button" onClick={removePhoto}>Remove</button> )}
        </div>
       <input ref={fileInputRef} id="profile-photo" className="sr-only" type="file" accept="image/*" onChange={handlePhotoChange} />
       </div>
      </div>

      <div className="grid gap-[7px]">
       <label className="font-extrabold" htmlFor="student-name">Full name</label>
       <input className="w-full rounded border-2 border-[#1c2b4a] bg-white px-3 py-[11px] text-[#1c2b4a] outline-none focus:border-[#1c2b4a] focus:ring-3 focus:ring-[#ffd23f]/70" id="student-name" name="name" type="text" value={profile.name} onChange={updateProfile} placeholder="Enter your name" autoComplete="name" required />
      </div>

      <div className="grid gap-[7px]">
       <label className="font-extrabold" htmlFor="student-class">Class</label>
       <select className="w-full rounded border-2 border-[#1c2b4a] bg-white px-3 py-[11px] text-[#1c2b4a] outline-none focus:border-[#1c2b4a] focus:ring-3 focus:ring-[#ffd23f]/70" id="student-class" name="className" value={profile.className} onChange={updateProfile} required>
        <option value="">Select your class</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
       </select>
      </div>
      
      <div className="grid gap-[7px]">
       <label className="font-extrabold" htmlFor="student-goal">Your goal</label>
       <textarea className="min-h-[100px] w-full resize-y rounded border-2 border-[#1c2b4a] bg-white px-3 py-[11px] text-[#1c2b4a] outline-none focus:border-[#1c2b4a] focus:ring-3 focus:ring-[#ffd23f]/70" id="student-goal" name="goal" value={profile.goal} onChange={updateProfile} placeholder="What do you want to achieve on this platform?" rows="4" />
       <small className="text-[#52627d]">Example: improve my coding skills</small>
      </div>

      <button className="game-button-primary justify-self-start" type="submit">Save profile</button>
       {status && (
       <p className="m-0 text-[0.88rem] font-extrabold text-[#397c40]" role="status">{status}</p>
        )}
     </form>
    </section>
   </main>
  )
}

export default MainSchool
