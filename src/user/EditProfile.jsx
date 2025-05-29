import { useState } from 'react'
import './EditProfile.css'

function EditProfile() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleProfileSave = (e) => {
    e.preventDefault()
    alert('Profile saved: ' + JSON.stringify(profile, null, 2) + (image ? `, Image: ${image.name}` : ''))
  }

  return (
    <div className="edit-profile container my-4">
      <h3>Edit Profile</h3>
      <form onSubmit={handleProfileSave} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={profile.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={profile.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            value={profile.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Profile Image</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Profile Preview" className="img-thumbnail mt-3" style={{ maxWidth: '200px' }} />
          )}
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  )
}

export default EditProfile
