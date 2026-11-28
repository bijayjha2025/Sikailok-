import { useEffect, useRef, useState } from 'react'
import PixelScene from './PixelScene'

const defaultProfile = {name: '', school:'', className: '', goal: '', }

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

  const updateSchool = (event) => {
    const { value } = event.target
    setProfile((current) => ({ ...current, school: value }))
  }

  const saveProfile = (event) => {
    event.preventDefault()
    const cleanedProfile = {
      name: profile.name.trim(),
      school: profile.school.trim(),
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

  const hasSavedProfile = Boolean(savedProfile.name && savedProfile.school && savedProfile.className)

  return (
   <main className="pixel-page">
    <header className="pixel-page-header">
     <button className="game-button" type="button" onClick={onBack}><span aria-hidden="true">←</span> Back to campus</button>
     <p className="pixel-kicker hidden sm:block">Sikailok Academy / Stage 01</p>
    </header>

    <section className="pixel-page-content grid max-w-[1000px] gap-4">
     <PixelScene title="Main School" scene="main-school" />
     <div className="grid items-start gap-5 md:grid-cols-[minmax(220px,0.8fr)_minmax(380px,1.2fr)] md:gap-6">
      <div className="grid gap-3">
       <div className="pixel-panel p-4">
        <p className="pixel-kicker">Student profile</p>
        <h1 className="pixel-title">Main School</h1>
        <p className="pixel-info m-0">Set up your profile to save your class and learning goal.</p>
       </div>
       {hasSavedProfile && (
        <div className="pixel-info grid gap-1.5 border-l-5 border-l-[#4f9e56] bg-[#f4faef]">
         <strong>Welcome back, {savedProfile.name}! from {savedProfile.school}</strong>
         <span className="text-[0.88rem] leading-[1.45] text-[#52627d]">Class {savedProfile.className}{savedProfile.goal ? ` · Goal: ${savedProfile.goal}` : ''}</span>
        </div>
       )}
      </div>

     <form className="pixel-panel grid gap-[18px] p-4 sm:p-6" onSubmit={saveProfile}>
      <div className="flex items-center gap-4 border-b border-[#d7deea] pb-5">
       <div className="grid size-[86px] flex-none place-items-center overflow-hidden rounded-[3px] border-3 border-[#1c2b4a] bg-[#ffd23f] text-[1.6rem] font-extrabold" aria-label="Profile photo preview">
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
       <input className="pixel-field" id="student-name" name="name" type="text" value={profile.name} onChange={updateProfile} placeholder="Enter your name" autoComplete="name" required />
      </div>

      <div className="grid gap-[7px]">
       <label className='font-extrabold' htmlFor='student-school'>School</label>
       <input className='pixel-field' id='student-school' name='school' value={profile.school} onChange={updateSchool} placeholder='Enter your school name' />
       <small className='text-[#52627d]'>Example: Sikailok Academy</small>
      </div>

      <div className="grid gap-[7px]">
       <label className="font-extrabold" htmlFor="student-class">Class</label>
       <select className="pixel-field" id="student-class" name="className" value={profile.className} onChange={updateProfile} required>
        <option value="">Select your class</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
       </select>
      </div>
      
      <div className="grid gap-[7px]">
       <label className="font-extrabold" htmlFor="student-goal">Your goal</label>
       <textarea className="pixel-field min-h-[100px] resize-y" id="student-goal" name="goal" value={profile.goal} onChange={updateProfile} placeholder="What do you want to achieve on this platform?" rows="4" />
       <small className="text-[#52627d]">Example: improve my coding skills</small>
      </div>

      <button className="game-button-primary justify-self-start" type="submit">Save profile</button>
       {status && (
       <p className="m-0 text-[0.88rem] font-extrabold text-[#397c40]" role="status">{status}</p>
        )}
     </form>
     </div>
    </section>
   </main>
  )
}

export default MainSchool
